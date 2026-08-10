import NavPage, { CardGroup } from "@/components/nav-page"

const HOME_FROUPS: CardGroup[] = [
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
    title: "CSS",
    icon: "palette",
    url: "/css",
    children: [{ title: "CSS", icon: "palette", url: "", desc: "难度递进式样式学习" }],
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
    title: "JS",
    icon: "braces",
    url: "/js",
    children: [{ title: "JS", icon: "braces", url: "", desc: "难度递进式JS学习" }],
  },

  {
    title: "JS-ES5",
    icon: "braces",
    url: "/js",
    children: [
      // ES5
      { title: "AJAX", icon: "braces", url: "/es5/ajax", desc: "异步请求与交互" },
      { title: "Array 常用方法", icon: "braces", url: "/es5/array", desc: "数组增删改查" },
      { title: "Boolean 布尔值", icon: "braces", url: "/es5/boolean" },
      { title: "数据类型", icon: "braces", url: "/es5/data-types" },
      { title: "DOM", icon: "braces", url: "/es5/dom", desc: "文档对象模型" },
      { title: "事件循环", icon: "braces", url: "/es5/event-loop", desc: "Event Loop" },
      { title: "JavaScript 事件", icon: "braces", url: "/es5/events" },
      { title: "Function 函数", icon: "braces", url: "/es5/function", desc: "闭包、高阶函数" },
      { title: "JavaScript 继承", icon: "braces", url: "/es5/inheritance", desc: "六种继承方式" },
      { title: "内存泄漏与垃圾回收", icon: "braces", url: "/es5/memory-leak" },
      { title: "Number 常用方法", icon: "braces", url: "/es5/number" },
      { title: "Object 常用方法", icon: "braces", url: "/es5/object" },
      { title: "运算符", icon: "braces", url: "/es5/operators" },
      { title: "RegExp 正则表达式", icon: "braces", url: "/es5/regexp" },
      { title: "本地存储", icon: "braces", url: "/es5/storage" },
      { title: "String 常用方法", icon: "braces", url: "/es5/string" },
      { title: "变量", icon: "braces", url: "/es5/variables" },
    ],
  },

  {
    title: "JS-ES6",
    icon: "braces",
    url: "/js",
    children: [
      // ES6
      { title: "Class 类", icon: "sparkles", url: "/es6/class" },
      { title: "Generator 与装饰器", icon: "sparkles", url: "/es6/generator-decorator" },
      { title: "Promise 与 async/await", icon: "sparkles", url: "/es6/promise-async-await" },
      { title: "Proxy 与 Reflect", icon: "sparkles", url: "/es6/proxy-reflect" },
      { title: "Set 与 Map", icon: "sparkles", url: "/es6/set-map" },
      { title: "Symbol", icon: "sparkles", url: "/es6/symbol" },
      { title: "Web Components", icon: "sparkles", url: "/es6/web-components" },
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

export default function Page() {
  return <NavPage type="study" groups={HOME_FROUPS} />
}
