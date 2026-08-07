# 学习文档

个人学习文档网站，基于 Next.js 16 + React 19 + MDX 构建，使用 Tailwind CSS v4 + shadcn/ui，支持亮色/暗色主题。

包含**学习文档**与**面试题文档**两大板块：学习文档覆盖 AI 工具（Agent）、前端框架、Node.js、数据库、DevOps、操作系统等方向；面试题文档按数据库、DevOps、Node、React、Vue 分类整理。

## 技术栈

| 类别     | 选型                                               |
| -------- | -------------------------------------------------- |
| 框架     | Next.js 16 + React 19（开启 React Compiler）       |
| 语言     | TypeScript 5                                       |
| 内容     | MDX（`@next/mdx`）                                 |
| 样式     | Tailwind CSS v4 + shadcn/ui                        |
| 代码高亮 | rehype-pretty-code（Shiki + `github-dark-dimmed`） |
| 字体     | Maple Mono NF CN（`next/font/local`）              |
| 主题     | next-themes（亮色 / 暗色 / 跟随系统）              |
| 组件     | radix-ui + vaul + lucide-react                     |
| 提交规范 | commitlint + czg（交互式）                         |
| Git Hook | husky + lint-staged                                |
| 部署     | Docker（`node:24-alpine`）                         |

## 目录结构

```
next/
├── app/
│   ├── (mdx)/             # 文档页面（MDX 路由组，共享目录抽屉布局）
│   │   ├── study/         #   学习文档: agent/db/devops/node/react/system/vue
│   │   ├── interview/     #   面试题文档: db/devops/node/react/vue
│   │   └── layout.tsx     #   目录抽屉 + 正文区布局
│   ├── (other)/           # 导航页 + 关于
│   │   ├── study/         #   学习文档导航（根页面）
│   │   ├── interview/     #   面试题文档导航
│   │   └── about/
│   ├── page.tsx           # 根页面 → 学习文档导航
│   ├── globals.css        # 全局样式（Tailwind v4 + CSS 变量）
│   └── layout.tsx         # 根布局（导航栏 + 主题）
├── components/
│   ├── ui/                # shadcn/ui 基础组件
│   │   ├── button.tsx         # 按钮（多尺寸/变体）
│   │   ├── card.tsx           # 卡片
│   │   ├── drawer.tsx         # 抽屉（vaul，支持 4 方向）
│   │   └── navigation-menu.tsx
│   ├── nav-page.tsx           # 导航页组件（CardGroup 分组渲染）
│   ├── site-header.tsx        # 顶部导航栏
│   ├── table-of-contents.tsx  # 右侧浮动抽屉目录
│   └── theme-toggle.tsx       # 主题切换按钮
├── lib/
│   ├── utils.ts               # cn() 类名合并
│   ├── route-utils.ts         # 客户端路由跳转
│   └── server-utils.ts        # 服务端路径名获取
├── fonts/                     # Maple Mono NF CN 字体（OFL 1.1）
├── proxy.ts                   # 中间件（注入 x-pathname）
├── mdx-components.tsx         # MDX 自定义组件映射
├── next.config.ts             # Next.js + MDX 配置（reactCompiler）
├── postcss.config.mjs         # PostCSS（@tailwindcss/postcss）
├── components.json            # shadcn/ui 配置（radix-nova）
├── commitlint.config.cjs      # 提交规范（czg 交互式）
├── tsconfig.json
├── Dockerfile
└── package.json
```

## 文档内容

| 板块         | 分类   | 主题                                    |
| ------------ | ------ | --------------------------------------- |
| **学习文档** | Agent  | Ccswitch、Claude Code、Reasonix         |
|              | DB     | PostgreSQL、MySQL、MongoDB、Redis       |
|              | Devops | Git、Docker、Kubernetes、Jenkins、Nginx |
|              | Node   | Node.js、Express、Koa、Fastify、NestJS  |
|              | React  | React、Next.js、React Router、Taro      |
|              | System | Linux、Windows                          |
|              | Vue    | Vue、UniApp                             |
| **面试题**   | DB     | PostgreSQL、MySQL、MongoDB、Redis       |
|              | Devops | Git、Docker、Kubernetes、Jenkins、Nginx |
|              | Node   | Node.js、Express、Koa、Fastify、NestJS  |
|              | React  | React、Next.js、React Router、Taro      |
|              | Vue    | Vue、UniApp                             |

## 开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务
npm run start
```

## 功能特性

- **双板块导航** — 学习文档与面试题文档独立导航（`nav-page` 卡片分组渲染），根页面直达学习文档
- **MDX 文档** — 所有内容以 `.mdx` 编写，支持 GFM（表格、任务列表等），代码块右上角显示语言标签
- **字体** — Maple Mono NF CN 等宽字体，正文、代码块、标题统一使用（`next/font/local` 加载）
- **React Compiler** — 自动记忆化优化，减少不必要的重新渲染
- **目录导航** — 右侧浮动按钮触发展开抽屉目录，IntersectionObserver 追踪当前滚动位置并高亮，含 h1/h2 层级缩进
- **主题切换** — 亮色 / 暗色 / 跟随系统三种模式
- **代码块** — Shiki 语法高亮，深色主题自适应，自适应宽度溢出滚动
- **响应式** — 首页卡片网格适配多列布局
- **提交规范** — commitlint + czg 交互式引导提交信息

## 代码质量

```bash
# ESLint 检查
npm run lint

# Prettier 格式化
npm run format
```

## License

MIT
