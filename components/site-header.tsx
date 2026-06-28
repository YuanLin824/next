import { ThemeToggle } from "./theme-toggle"
import { navigationMenuTriggerStyle } from "./ui/navigation-menu"

export default function SiteHeader() {
  return (
    <header className="bg-background/70 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 flex w-full justify-center border-b backdrop-blur-md">
      <div className="container flex h-14 max-w-7xl items-center px-2.5">
        {/* Logo / 站点名称 */}
        <a href="/home" className="mr-6 flex items-center gap-2 text-sm font-semibold">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md text-xs font-bold">
            B
          </div>
          <span className="hidden sm:inline-block">DOC</span>
        </a>

        {/* 导航链接 */}
        <a href="/home" className={navigationMenuTriggerStyle()}>
          首页
        </a>
        <a href="/about" className={navigationMenuTriggerStyle()}>
          关于
        </a>

        {/* 右侧操作区: 主题切换 + 语言切换 */}
        <div className="flex flex-1 items-center justify-end gap-1">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
