import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AppWindow,
  Atom,
  Bot,
  Braces,
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
  braces: Braces,
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

function resolveIcon(key: string): IconComponent {
  return ICON_MAP[key] ?? Puzzle
}

export interface CardGroup {
  title: string
  icon: string
  url: string
  children: { title: string; icon: string; url: string; desc?: string }[]
}

export type NavPageProps = { type: "study" | "interview"; groups: CardGroup[] }

export default function NavPage({ type, groups }: NavPageProps) {
  return (
    <div className="flex w-full flex-col gap-10 pt-5">
      <h1 className="text-3xl">{type === "interview" ? "面试题文档" : "学习文档"}</h1>

      {groups.map((group) => {
        const CategoryIcon = resolveIcon(group.icon)

        return (
          <section key={group.title}>
            <div className="border-border mb-4 flex items-center gap-2 border-b pb-2">
              <CategoryIcon className="text-muted-foreground size-6" />
              <h2 className="text-2xl font-semibold">{group.title}</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {group.children.map((child) => {
                const ChildIcon = resolveIcon(child.icon)

                return (
                  <a key={child.title} href={type + group.url + child.url}>
                    <Card className="hover:bg-muted transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <ChildIcon className="text-primary size-4 transition-transform group-hover/card:scale-110" />
                          <span>{child.title}</span>
                        </CardTitle>
                        {child.desc && <CardDescription>{child.desc}</CardDescription>}
                      </CardHeader>
                    </Card>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
