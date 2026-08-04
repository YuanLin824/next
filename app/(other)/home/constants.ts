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
  url: string
  children: { title: string; icon: string; url: string; desc: string }[]
}

export const HOME_FROUPS: CardGroup[] = [
  {
    title: "Agent",
    icon: "bot",
    url: "agent",
    children: [
      { title: "CCSwitch", icon: "bot", url: "/ccswitch", desc: "终端里的 AI 编程伙伴" },
      { title: "Claude Code", icon: "bot", url: "/claude-code", desc: "终端里的 AI 编程伙伴" },
      { title: "Reasonix", icon: "bot", url: "/reasonix", desc: "终端里的 AI 编程伙伴" },
    ],
  },

  {
    title: "DB",
    icon: "database",
    url: "db",
    children: [
      { title: "MongoDB", icon: "leaf", url: "/mongo", desc: "文档型 NoSQL 数据库" },
      { title: "MySQL", icon: "database", url: "/mysql", desc: "关系型数据库" },
      { title: "PostgreSQL", icon: "database", url: "/postgresql", desc: "高级关系型数据库" },
      { title: "Redis", icon: "database", url: "/redis", desc: "内存键值存储" },
    ],
  },

  {
    title: "Devops",
    icon: "terminal",
    url: "devops",
    children: [
      { title: "Docker", icon: "container", url: "/docker", desc: "容器化平台" },
      { title: "Git", icon: "git-branch", url: "/git", desc: "分布式版本控制" },
      { title: "Jenkins", icon: "cog", url: "/jenkins", desc: "持续集成工具" },
      { title: "K8S", icon: "ship", url: "/k8s", desc: "容器编排平台" },
      { title: "Nginx", icon: "globe", url: "/nginx", desc: "高性能 Web 服务器" },
    ],
  },

  {
    title: "React",
    icon: "atom",
    url: "react",
    children: [
      { title: "NextJS", icon: "triangle", url: "/next", desc: "React 全栈框架" },
      { title: "React", icon: "atom", url: "/react", desc: "声明式 UI 库" },
      { title: "React Router", icon: "triangle", url: "/react-router", desc: "React 声明式路由库" },
      { title: "Taro", icon: "smartphone", url: "/taro", desc: "跨端小程序框架" },
    ],
  },

  {
    title: "System",
    icon: "monitor",
    url: "system",
    children: [
      { title: "Linux", icon: "terminal", url: "/linux", desc: "开源操作系统" },
      { title: "Windows", icon: "monitor", url: "/windows", desc: "桌面操作系统" },
    ],
  },

  {
    title: "Vue",
    icon: "layers",
    url: "vue",
    children: [
      { title: "UniApp", icon: "smartphone", url: "/uniapp", desc: "跨端应用框架" },
      { title: "Vue", icon: "layers", url: "/vue", desc: "渐进式 UI 框架" },
    ],
  },
]
