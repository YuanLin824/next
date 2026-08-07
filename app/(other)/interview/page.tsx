import NavPage, { CardGroup } from "@/components/nav-page"

const HOME_FROUPS: CardGroup[] = [
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
    title: "Vue",
    icon: "layers",
    url: "/vue",
    children: [
      { title: "UniApp", icon: "app-window", url: "/uniapp", desc: "跨端应用框架" },
      { title: "Vue", icon: "layers", url: "/vue", desc: "渐进式 UI 框架" },
    ],
  },
]

export default function Page() {
  return <NavPage type="interview" groups={HOME_FROUPS} />
}
