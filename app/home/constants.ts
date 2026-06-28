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
  description?: string
  children: { title: string; icon: string; url: string; description?: string }[]
}

export const HOME_FROUPS: CardGroup[] = [
  {
    title: "Agent",
    icon: "bot",
    children: [{ title: "Claude Code", icon: "bot", url: "/agent/claude-code" }],
  },
  {
    title: "React",
    icon: "atom",
    children: [
      { title: "React", icon: "atom", url: "/react-react" },
      { title: "NextJS", icon: "triangle", url: "/react-next" },
      { title: "NestJS", icon: "server", url: "/react-nest" },
      { title: "Taro", icon: "smartphone", url: "/react-taro" },
    ],
  },
  {
    title: "Vue",
    icon: "layers",
    children: [
      { title: "Vue", icon: "layers", url: "/vue-vue" },
      { title: "UniApp", icon: "smartphone", url: "/vue-uniapp" },
    ],
  },
  {
    title: "Lib",
    icon: "package",
    children: [
      { title: "React", icon: "puzzle", url: "/lib-react" },
      { title: "vue", icon: "puzzle", url: "/lib-vue" },
    ],
  },
  {
    title: "Database",
    icon: "database",
    children: [
      { title: "PostgreSQL", icon: "database", url: "/database-postgresql" },
      { title: "MySQL", icon: "database", url: "/database-mysql" },
      { title: "MongoDB", icon: "leaf", url: "/database-mongo" },
      { title: "Redis", icon: "database", url: "/database-redis" },
    ],
  },
  {
    title: "Devops",
    icon: "terminal",
    children: [
      { title: "Git", icon: "git-branch", url: "/devops-git" },
      { title: "Nginx", icon: "globe", url: "/devops-nginx" },
      { title: "Jenkins", icon: "cog", url: "/devops-jenkins" },
      { title: "Docker", icon: "container", url: "/devops-docker" },
      { title: "K8S", icon: "ship", url: "/devops-k8s" },
    ],
  },
  {
    title: "System",
    icon: "monitor",
    children: [
      { title: "Linux", icon: "terminal", url: "/system-linux" },
      { title: "Windows", icon: "monitor", url: "/system-windows" },
    ],
  },
  {
    title: "Interview",
    icon: "message-circle-question",
    children: [
      { title: "JavaScript", icon: "file-code-2", url: "/interview-javascript" },
      { title: "CSS", icon: "palette", url: "/interview-css" },
      { title: "React", icon: "atom", url: "/interview-react" },
      { title: "Algorithm", icon: "code-2", url: "/interview-algorithm" },
      { title: "Network", icon: "network", url: "/interview-network" },
      { title: "Engineering", icon: "wrench", url: "/interview-engineering" },
      { title: "Agent", icon: "bot", url: "/interview-agent" },
      { title: "Node", icon: "server", url: "/interview-node" },
      { title: "Vue", icon: "layers", url: "/interview-vue" },
    ],
  },
]
