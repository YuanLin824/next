# 学习文档

个人学习文档网站，基于 Next.js 16 + React 19 + MDX 构建，使用 Tailwind CSS v4 + shadcn/ui，支持亮色/暗色主题。

覆盖前端框架、数据库、DevOps、操作系统、AI 工具及面试题等方向。

## 技术栈

| 类别     | 选型                                               |
| -------- | -------------------------------------------------- |
| 框架     | Next.js 16 + React 19                              |
| 语言     | TypeScript 5                                       |
| 内容     | MDX（`@next/mdx`）                                 |
| 样式     | Tailwind CSS v4 + shadcn/ui                        |
| 代码高亮 | rehype-pretty-code（Shiki + `github-dark-dimmed`） |
| 主题     | next-themes（亮色 / 暗色 / 跟随系统）              |
| 组件     | radix-ui + vaul + lucide-react                     |
| 提交规范 | commitlint + czg（交互式）                         |
| Git Hook | husky + lint-staged                                |
| 部署     | Docker（`node:24-alpine`）                         |

## 目录结构

```
next/
├── app/
│   ├── (mdx)/           # 文档页面（MDX 路由组）
│   │   └── layout.tsx   #   目录抽屉 + 正文区布局
│   ├── (other)/         # 其他页面（首页、关于）
│   ├── globals.css      # 全局样式（Tailwind v4 + CSS 变量）
│   └── layout.tsx       # 根布局（导航栏 + 主题）
├── components/
│   ├── ui/              # shadcn/ui 基础组件
│   │   ├── button.tsx       # 按钮（多尺寸/变体）
│   │   ├── card.tsx         # 卡片
│   │   ├── drawer.tsx       # 抽屉（vaul，支持 4 方向）
│   │   └── navigation-menu.tsx
│   ├── site-header.tsx      # 顶部导航栏
│   ├── table-of-contents.tsx # 右侧浮动抽屉目录
│   └── theme-toggle.tsx     # 主题切换按钮
├── lib/
│   ├── utils.ts             # cn() 类名合并
│   ├── route-utils.ts       # 客户端路由跳转
│   └── server-utils.ts      # 服务端路径名获取
├── proxy.ts                 # 中间件（注入 x-pathname）
├── mdx-components.tsx       # MDX 自定义组件映射
├── next.config.ts           # Next.js + MDX 配置
├── postcss.config.mjs       # PostCSS（@tailwindcss/postcss）
├── tsconfig.json
├── Dockerfile
└── package.json
```

## 文档内容

| 分类           | 主题                                                         |
| -------------- | ------------------------------------------------------------ |
| **Agent**      | Claude Code                                                  |
| **React 生态** | React、Next.js、NestJS、Taro                                 |
| **Vue 生态**   | Vue、UniApp                                                  |
| **工具库**     | React/Vue 生态工具                                           |
| **数据库**     | PostgreSQL、MySQL、MongoDB、Redis                            |
| **DevOps**     | Git、Docker、Kubernetes、Jenkins、Nginx                      |
| **系统**       | Linux、Windows                                               |
| **面试题**     | JavaScript、CSS、React、Vue、Node、算法、网络、工程化、Agent |

## 开始

```bash
# 安装依赖
npm run install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务
npm run start
```

## 功能特性

- **MDX 文档** — 所有内容以 `.mdx` 编写，支持 GFM（表格、任务列表等）
- **目录导航** — 右侧浮动按钮触发展开抽屉目录，IntersectionObserver 追踪当前滚动位置并高亮，含 h1/h2/h3 层级缩进
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
