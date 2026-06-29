import {
  Atom,
  Bot,
  Code2,
  Cog,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Layers,
  Leaf,
  MessageCircleQuestion,
  Monitor,
  Network,
  Package,
  Palette,
  Puzzle,
  Server,
  Ship,
  Smartphone,
  Terminal,
  Triangle,
  Wrench,
} from "lucide-react"
import type { ComponentType, SVGProps } from "react"

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const ICON_MAP: Record<string, IconComponent> = {
  atom: Atom,
  bot: Bot,
  "code-2": Code2,
  cog: Cog,
  container: Ship,
  database: Database,
  "file-code-2": FileCode2,
  "git-branch": GitBranch,
  globe: Globe,
  layers: Layers,
  leaf: Leaf,
  "message-circle-question": MessageCircleQuestion,
  monitor: Monitor,
  network: Network,
  package: Package,
  palette: Palette,
  puzzle: Puzzle,
  server: Server,
  ship: Ship,
  smartphone: Smartphone,
  terminal: Terminal,
  triangle: Triangle,
  wrench: Wrench,
}

export function resolveIcon(key: string): IconComponent {
  return ICON_MAP[key] ?? Puzzle
}

interface CardGroup {
  title: string
  icon: string
  children: { title: string; icon: string; url: string; desc: string }[]
}

export const HOME_FROUPS: CardGroup[] = [
  {
    title: "Agent",
    icon: "bot",
    children: [
      {
        title: "Claude Code",
        icon: "bot",
        url: "/agent-claude-code",
        desc: "终端里的 AI 编程伙伴",
      },
    ],
  },
  {
    title: "React",
    icon: "atom",
    children: [
      { title: "React", icon: "atom", url: "/react-react", desc: "声明式 UI 库" },
      { title: "NextJS", icon: "triangle", url: "/react-next", desc: "React 全栈框架" },
      { title: "NestJS", icon: "server", url: "/react-nest", desc: "企业级 Node.js 框架" },
      { title: "Taro", icon: "smartphone", url: "/react-taro", desc: "跨端小程序框架" },
    ],
  },
  {
    title: "Vue",
    icon: "layers",
    children: [
      { title: "Vue", icon: "layers", url: "/vue-vue", desc: "渐进式 UI 框架" },
      { title: "UniApp", icon: "smartphone", url: "/vue-uniapp", desc: "跨端应用框架" },
    ],
  },
  {
    title: "Lib",
    icon: "package",
    children: [
      { title: "React", icon: "puzzle", url: "/lib-react", desc: "React 生态工具库" },
      { title: "vue", icon: "puzzle", url: "/lib-vue", desc: "Vue 生态工具库" },
    ],
  },
  {
    title: "Database",
    icon: "database",
    children: [
      {
        title: "PostgreSQL",
        icon: "database",
        url: "/database-postgresql",
        desc: "高级关系型数据库",
      },
      { title: "MySQL", icon: "database", url: "/database-mysql", desc: "关系型数据库" },
      { title: "MongoDB", icon: "leaf", url: "/database-mongo", desc: "文档型 NoSQL 数据库" },
      { title: "Redis", icon: "database", url: "/database-redis", desc: "内存键值存储" },
    ],
  },
  {
    title: "Devops",
    icon: "terminal",
    children: [
      { title: "Git", icon: "git-branch", url: "/devops-git", desc: "分布式版本控制" },
      { title: "Nginx", icon: "globe", url: "/devops-nginx", desc: "高性能 Web 服务器" },
      { title: "Jenkins", icon: "cog", url: "/devops-jenkins", desc: "持续集成工具" },
      { title: "Docker", icon: "container", url: "/devops-docker", desc: "容器化平台" },
      { title: "K8S", icon: "ship", url: "/devops-k8s", desc: "容器编排平台" },
    ],
  },
  {
    title: "System",
    icon: "monitor",
    children: [
      { title: "Linux", icon: "terminal", url: "/system-linux", desc: "开源操作系统" },
      { title: "Windows", icon: "monitor", url: "/system-windows", desc: "桌面操作系统" },
    ],
  },
  {
    title: "Interview",
    icon: "message-circle-question",
    children: [
      {
        title: "JavaScript",
        icon: "file-code-2",
        url: "/interview-javascript",
        desc: "JS 核心概念与常见手写题",
      },
      { title: "CSS", icon: "palette", url: "/interview-css", desc: "布局、盒模型与动画面试题" },
      {
        title: "React",
        icon: "atom",
        url: "/interview-react",
        desc: "React 原理、Hooks 与状态管理",
      },
      {
        title: "Algorithm",
        icon: "code-2",
        url: "/interview-algorithm",
        desc: "手写算法与数据结构",
      },
      {
        title: "Network",
        icon: "network",
        url: "/interview-network",
        desc: "HTTP、HTTPS 与网络协议",
      },
      {
        title: "Engineering",
        icon: "wrench",
        url: "/interview-engineering",
        desc: "Webpack、Vite 与构建优化",
      },
      { title: "Agent", icon: "bot", url: "/interview-agent", desc: "AI Agent 原理与面试题" },
      { title: "Node", icon: "server", url: "/interview-node", desc: "Node.js 核心概念" },
      { title: "Vue", icon: "layers", url: "/interview-vue", desc: "Vue 原理、响应式与状态管理" },
    ],
  },
]
