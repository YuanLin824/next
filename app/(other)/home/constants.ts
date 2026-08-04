import {
  AppWindow,
  Atom,
  Bot,
  Brain,
  Cat,
  Code2,
  Container,
  Database,
  DatabaseZap,
  FileCode2,
  GitBranch,
  Grid2x2,
  Hexagon,
  KeyRound,
  Layers,
  Leaf,
  MessageCircleQuestion,
  Monitor,
  Network,
  Package,
  Palette,
  Puzzle,
  Repeat,
  Route,
  Server,
  Shell,
  ShipWheel,
  Smartphone,
  Sparkles,
  Sprout,
  Table2,
  Terminal,
  Triangle,
  Wrench,
  Zap,
} from "lucide-react"
import type { ComponentType, SVGProps } from "react"

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const ICON_MAP: Record<string, IconComponent> = {
  "app-window": AppWindow,
  atom: Atom,
  bot: Bot,
  brain: Brain,
  cat: Cat,
  "code-2": Code2,
  container: Container,
  database: Database,
  "database-zap": DatabaseZap,
  "file-code-2": FileCode2,
  "git-branch": GitBranch,
  "grid-2x2": Grid2x2,
  hexagon: Hexagon,
  "key-round": KeyRound,
  layers: Layers,
  leaf: Leaf,
  "message-circle-question": MessageCircleQuestion,
  monitor: Monitor,
  network: Network,
  package: Package,
  palette: Palette,
  puzzle: Puzzle,
  repeat: Repeat,
  route: Route,
  server: Server,
  shell: Shell,
  "ship-wheel": ShipWheel,
  smartphone: Smartphone,
  sparkles: Sparkles,
  sprout: Sprout,
  "table-2": Table2,
  terminal: Terminal,
  triangle: Triangle,
  wrench: Wrench,
  zap: Zap,
}

export function resolveIcon(key: string): IconComponent {
  return ICON_MAP[key] ?? Puzzle
}

interface CardGroup {
  title: string
  icon: string
  url: string
  children: { title: string; icon: string; url: string; desc: string }[]
}

export const HOME_FROUPS: CardGroup[] = [
  {
    title: "Agent",
    icon: "bot",
    url: "/agent",
    children: [
      { title: "CCSwitch", icon: "repeat", url: "/ccswitch", desc: "多供应商一键切换工具" },
      {
        title: "Claude Code",
        icon: "sparkles",
        url: "/claude-code",
        desc: "Anthropic 官方终端编程智能体",
      },
      { title: "Reasonix", icon: "brain", url: "/reasonix", desc: "DeepSeek 原生终端编程智能体" },
    ],
  },

  {
    title: "DB",
    icon: "database",
    url: "/db",
    children: [
      { title: "MongoDB", icon: "leaf", url: "/mongo", desc: "文档型 NoSQL 数据库" },
      { title: "MySQL", icon: "table-2", url: "/mysql", desc: "关系型数据库" },
      { title: "PostgreSQL", icon: "database-zap", url: "/postgresql", desc: "高级关系型数据库" },
      { title: "Redis", icon: "key-round", url: "/redis", desc: "内存键值存储" },
    ],
  },

  {
    title: "Devops",
    icon: "terminal",
    url: "/devops",
    children: [
      { title: "Docker", icon: "container", url: "/docker", desc: "容器化平台" },
      { title: "Git", icon: "git-branch", url: "/git", desc: "分布式版本控制" },
      { title: "Jenkins", icon: "wrench", url: "/jenkins", desc: "持续集成工具" },
      { title: "K8S", icon: "ship-wheel", url: "/k8s", desc: "容器编排平台" },
      { title: "Nginx", icon: "network", url: "/nginx", desc: "高性能 Web 服务器" },
    ],
  },

  {
    title: "Node",
    icon: "server",
    url: "/node",
    children: [
      { title: "Node.js", icon: "hexagon", url: "/node", desc: "服务端 JavaScript 运行时" },
      { title: "Express", icon: "code-2", url: "/express", desc: "极简 Web 框架" },
      { title: "Koa", icon: "sprout", url: "/koa", desc: "轻量优雅的 Web 框架" },
      { title: "Fastify", icon: "zap", url: "/fastify", desc: "高性能 Web 框架" },
      { title: "NestJS", icon: "cat", url: "/nest", desc: "企业级 Node 框架" },
    ],
  },

  {
    title: "React",
    icon: "atom",
    url: "/react",
    children: [
      { title: "NextJS", icon: "triangle", url: "/next", desc: "React 全栈框架" },
      { title: "React", icon: "atom", url: "/react", desc: "声明式 UI 库" },
      { title: "React Router", icon: "route", url: "/react-router", desc: "React 声明式路由库" },
      { title: "Taro", icon: "smartphone", url: "/taro", desc: "多端统一开发框架" },
    ],
  },

  {
    title: "System",
    icon: "monitor",
    url: "/system",
    children: [
      { title: "Linux", icon: "shell", url: "/linux", desc: "开源操作系统" },
      { title: "Windows", icon: "grid-2x2", url: "/windows", desc: "桌面操作系统" },
    ],
  },

  {
    title: "Vue",
    icon: "layers",
    url: "/vue",
    children: [
      { title: "UniApp", icon: "app-window", url: "/uniapp", desc: "跨端应用框架" },
      { title: "Vue", icon: "layers", url: "/vue", desc: "渐进式 UI 框架" },
    ],
  },
]
