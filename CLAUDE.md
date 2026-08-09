# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 常用命令

```bash
npm run dev          # 启动开发服务器 (next dev)
npm run build        # 生产构建 (next build)
npm run start        # 启动生产服务 (next start)
npm run lint         # ESLint 检查
npm run format       # Prettier 格式化
npm run commit       # 交互式提交 (czg)
```

## 页面测试

**需要打开页面测试或打开网页时，必须使用 `playwright-cli` 工具**（全局已安装），不要使用临时 CDP 脚本或手动 Edge 调试。

```bash
playwright-cli open http://localhost:3000   # 打开浏览器并导航
playwright-cli snapshot                      # 页面快照（元素 ref，后续用 ref 交互）
playwright-cli eval "document.title"         # 执行 JS 检查/测量
playwright-cli console                       # 查看控制台输出
playwright-cli requests                      # 查看网络请求
playwright-cli screenshot --filename=x.png   # 截图
playwright-cli close                         # 关闭浏览器
```

## 维护规则

**新增或删除文件/目录后，必须同步更新 `README.md` 与本文件（CLAUDE.md）**，保持文档与代码一致：

- 新增/删除文档页（`app/(mdx)/**/page.mdx`）→ 更新 README 的「文档内容」表格、目录结构
- 新增/删除组件、工具函数或配置 → 更新 README 的「目录结构」与 CLAUDE.md 的「架构概览」
- 技术栈/依赖变化 → 更新 README 的「技术栈」表格
- 架构、流水线、行为变化 → 更新 CLAUDE.md 对应章节

在任务收尾时检查是否遗漏文档同步。

## 架构概览

### 路由结构

```
app/
├── (mdx)/           # 文档路由组 — MDX 页面，共享 MDX 布局
│   ├── layout.tsx   #   布局: TableOfContents(浮动按钮+抽屉) + <article id="dmx-layout">
│   ├── study/       #   学习文档: agent/db/devops/node/react/system/vue
│   ├── interview/   #   面试题文档: db/devops/node/react/vue
│   └── */page.mdx   #   各文档页面
├── (other)/         # 导航页 + 关于（px-3 pb-3 容器在根 layout 的 <main> 上）
│   ├── study/       #   学习文档导航（根页面）
│   ├── interview/   #   面试题文档导航
│   └── about/
├── layout.tsx       # 根布局: SiteHeader + ThemeProvider + <main>
├── page.tsx         # 根页面 → 学习文档导航
├── globals.css      # Tailwind v4 + shadcn/ui CSS 变量(OKLCH) + 亮/暗主题
└── error.tsx / not-found.tsx / loading.tsx
```

### MDX 渲染流水线

1. `next.config.ts` — `@next/mdx` 插件，`pageExtensions` 包含 `md`/`mdx`；开启 `reactCompiler: true`（React Compiler）、`cacheComponents`/`partialPrefetching`
2. **remark 插件**: `remark-gfm`（GFM 表格/任务列表）
3. **rehype 插件**: `rehype-slug`（为 h1/h2 生成 id）→ `rehype-pretty-code`（Shiki 语法高亮，`github-dark-dimmed` 主题）
4. `mdx-components.tsx` — `useMDXComponents()` 将原始 HTML 映射为带 Tailwind 样式的 React 组件。h1-h3 带 `scroll-mt-16`（与锚点跳转对齐），pre 包裹在相对定位 div 中、右上角展示语言标签

### TableOfContents（目录抽屉）

`components/table-of-contents.tsx` — 客户端组件：

- 从 `<article id="dmx-layout">` 内 querySelectorAll `h1, h2`
- IntersectionObserver (`rootMargin: "-80px 0px -70% 0px"`) 追踪当前可见标题并高亮
- 层级缩进: `LEVEL_INDENT` 映射 `{ 1: "pl-3", 2: "pl-6", 3: "pl-9" }`
- 渲染为右侧浮动 `List` 图标按钮 → 触发 `Drawer` (vaul, `direction="right"`) 展示目录
- 点击目录项 → `scrollIntoView` + 关闭抽屉
- 跟随 `pathname` 变化自动重建

### 字体系统

- 默认字体 **Maple Mono NF CN**（OFL 1.1），字体文件在项目根目录 `fonts/`（Regular/Medium/SemiBold/Bold 四个字重，当前默认使用 Bold）
- `app/layout.tsx` 中通过 `next/font/local` 加载（`src: "../fonts/..."`，路径相对 `app/` 目录），输出 CSS 变量 `--font-maple`（挂载在 `<html>` 的 `maple.variable`）
- `app/globals.css` 的 `@theme inline` 中 `--font-sans` / `--font-mono` / `--font-heading` 均指向 `--font-maple`（正文、代码块、标题统一使用）
- 调整字重：字体文件放入 `fonts/`，在 `layout.tsx` 的 `localFont` src 数组中注册对应字重

### 主题系统

- `next-themes` 的 `ThemeProvider`，`attribute="class"`（在 `<html>` 上切换 `.dark`）
- 亮/暗 CSS 变量定义在 `app/globals.css` 的 `:root` 和 `:root.dark` 中，使用 OKLCH 色彩空间
- `components/theme-toggle.tsx` — 亮色/暗色/系统 三态循环按钮

### shadcn/ui 配置

- 风格: `radix-nova`，baseColor: `neutral`（见 `components.json`）
- `cn()` 函数位于 `lib/utils.ts`（`clsx` + `tailwind-merge`）
- `@/*` 别名映射项目根目录
- 基础组件在 `components/ui/`（button, card, drawer, navigation-menu）
- `.mcp.json` 配置了 shadcn MCP server（`npx shadcn@latest mcp`），在 Claude Code 中可通过它管理组件

### 中间件 (proxy.ts)

- 注入 `x-pathname` 请求头（`NextResponse.next({ request: { headers } })`），使服务端组件可通过 `lib/server-utils.ts` 的 `getPathname()` 获取当前路径
- 对 `.well-known/appspecific` 探测请求直接放行（忽略 DevTools 探测）
- matcher 匹配除 `api`、`_next/static`、`_next/image`、`favicon.ico` 外的所有路由

### Tailwind CSS v4

使用 `@tailwindcss/postcss` 插件，无 `tailwind.config.ts`。配置通过 CSS 完成：

- `@import "tailwindcss"` / `@import "tw-animate-css"` / `@import "shadcn/tailwind.css"`
- `@plugin "tailwindcss-mac-scrollbar/plugin"` — macOS 风格滚动条
- `@theme inline` 块将 CSS 变量桥接到 Tailwind token
- `@layer base` 的 `body` 设置 `word-break: break-all` + `overflow-wrap: anywhere`（英文单词任意字符处打断换行、无连接符；代码块 `white-space: pre` 不受影响，仍横向滚动）

### 提交规范

- commitlint + czg 交互式提示（中文 prompt，带 emoji，如 `feat: ✨`）
- scope 自动从 `app/` 直接子目录读取（`(mdx)`/`(other)` 等），配置在 `commitlint.config.cjs`
- 新增 `types` 提交类型（czg 自定义枚举）
- husky + lint-staged: 提交前对 `*.{js(x),ts(x),vue,css,less,scss,sass,md,json}` 执行 Prettier 格式化（`.lintstagedrc`）
