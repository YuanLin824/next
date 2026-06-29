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

## 架构概览

### 路由结构

```
app/
├── (mdx)/           # 文档路由组 — MDX 页面，共享 MDX 布局
│   ├── layout.tsx   #   布局: TableOfContents(浮动按钮+抽屉) + <article>
│   └── */page.mdx   #   各文档页面
├── (other)/         # 其他路由组 — 首页、关于
│   ├── layout.tsx   #   简单 px-3 pb-3 容器
│   └── home/        #   首页卡片导航
├── layout.tsx       # 根布局: SiteHeader + ThemeProvider + <main>
├── page.tsx         # 根页面 → 重定向到 /home
├── globals.css      # Tailwind v4 + shadcn/ui CSS 变量(OKLCH) + 亮/暗主题
└── error.tsx / not-found.tsx / loading.tsx
```

### MDX 渲染流水线

1. `next.config.ts` — `@next/mdx` 插件，`pageExtensions` 包含 `md`/`mdx`
2. **remark 插件**: `remark-gfm`（GFM 表格/任务列表）
3. **rehype 插件**: `rehype-slug`（为 h1/h2/h3 生成 id）→ `rehype-pretty-code`（Shiki 语法高亮，`github-dark-dimmed` 主题）
4. `mdx-components.tsx` — `useMDXComponents()` 将原始 HTML 映射为带 Tailwind 样式的 React 组件。h1-h3 带 `scroll-mt-14.25`（与 header 高度对齐），pre 包裹在相对定位 div 中展示语言标签

### TableOfContents（目录抽屉）

`components/table-of-contents.tsx` — 客户端组件：

- 从 `<article id="dmx-layout">` 内 querySelectorAll `h1, h2, h3`
- IntersectionObserver (`rootMargin: "-80px 0px -70% 0px"`) 追踪当前可见标题并高亮
- 层级缩进: `LEVEL_INDENT` 映射 `{ 1: "pl-3", 2: "pl-6", 3: "pl-9" }`
- 渲染为右侧浮动 `List` 图标按钮 → 触发 `Drawer` (vaul, `direction="right"`) 展示目录
- 点击目录项 → `scrollIntoView` + 关闭抽屉
- 跟随 `pathname` 变化自动重建

### 主题系统

- `next-themes` 的 `ThemeProvider`，`attribute="class"`（在 `<html>` 上切换 `.dark`）
- 亮/暗 CSS 变量定义在 `app/globals.css` 的 `:root` 和 `:root.dark` 中，使用 OKLCH 色彩空间
- `components/theme-toggle.tsx` — 亮色/暗色/系统 三态循环按钮

### shadcn/ui 配置

- 风格: `radix-nova`，baseColor: `neutral`
- `cn()` 函数位于 `lib/utils.ts`（`clsx` + `tailwind-merge`）
- `@/*` 别名映射项目根目录
- 基础组件在 `components/ui/`（button, card, drawer, navigation-menu）

### 中间件 (proxy.ts)

注入 `x-pathname` 请求头，使服务端组件可通过 `lib/server-utils.ts` 的 `getPathname()` 获取当前路径。匹配除 `api`、`_next/static`、`_next/image`、`favicon.ico` 外的所有路由。

### Tailwind CSS v4

使用 `@tailwindcss/postcss` 插件，无 `tailwind.config.ts`。配置通过 CSS 完成：

- `@import "tailwindcss"` / `@import "tw-animate-css"` / `@import "shadcn/tailwind.css"`
- `@plugin "tailwindcss-mac-scrollbar/plugin"` — macOS 风格滚动条
- `@theme inline` 块将 CSS 变量桥接到 Tailwind token

### 提交规范

- commitlint + czg 交互式提示
- scope 自动从 `app/` 目录读取
- husky + lint-staged: Prettier 自动格式化
