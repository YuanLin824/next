/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"
import { List } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

interface TocItem {
  id: string
  text: string
  level: number
}

/** 每级标题对应的左侧缩进（Tailwind pl-*） */
const LEVEL_INDENT: Record<number, string> = {
  1: "pl-3",
  2: "pl-6",
  3: "pl-9",
}

/**
 * 页面目录 — 从当前页面提取 h1/h2/h3 标题，
 * 通过右侧浮动按钮触发 Drawer 抽屉展示，按层级缩进，
 * IntersectionObserver 追踪当前位置并高亮。
 * 跟随路由变化自动重建目录。
 */
export function TableOfContents() {
  const pathname = usePathname()
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState("")
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const visibleSet = useRef<Set<string>>(new Set())

  useEffect(() => {
    // 路由变化时重置状态
    setLoading(true)
    setActiveId("")
    visibleSet.current.clear()

    const article = document.querySelector("article#dmx-layout")
    if (!article) {
      setLoading(false)
      return
    }

    const headings = article.querySelectorAll("h1, h2, h3")
    const tocItems: TocItem[] = []
    headings.forEach((h) => {
      if (h.id) {
        const level = Number(h.tagName.charAt(1)) // "H1" → 1, "H2" → 2, "H3" → 3
        tocItems.push({ id: h.id, text: h.textContent || "", level })
      }
    })
    setItems(tocItems)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSet.current.add(entry.target.id)
          } else {
            visibleSet.current.delete(entry.target.id)
          }
        }
        const first = tocItems.find((item) => visibleSet.current.has(item.id))
        if (first) setActiveId(first.id)
      },
      { rootMargin: "-80px 0px -70% 0px" }
    )

    headings.forEach((h) => observer.observe(h))

    const timer = setTimeout(() => setLoading(false), 100)
    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [pathname])

  /** 点击目录项：跳转并关闭抽屉 */
  const handleClick = (id: string) => {
    setActiveId(id)
    setOpen(false)
  }

  const tocList = (
    <ul className="border-border space-y-0.5 border-l">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault()
              handleClick(item.id)
              document.querySelector(`#${item.id}`)?.scrollIntoView({ behavior: "smooth" })
            }}
            className={cn(
              "text-muted-foreground hover:text-secondary-foreground block py-1 text-xs transition-colors border-l-2",
              LEVEL_INDENT[item.level] ?? "pl-3",
              activeId === item.id
                ? "text-secondary-foreground border-secondary-foreground -ml-px"
                : "border-transparent"
            )}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  )

  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button
          className="fixed left-2 top-16 z-40 rounded-full border bg-background p-2.5 shadow-md transition-colors hover:bg-muted"
          aria-label="打开目录"
        >
          <List className="size-5" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="max-w-70">
        <DrawerHeader>
          <DrawerTitle>目录</DrawerTitle>
        </DrawerHeader>
        <nav className="overflow-y-auto px-4 pb-6">
          {loading ? (
            // Loading 骨架屏
            <div className="animate-pulse space-y-2.5">
              <div className="bg-muted h-2.5 w-28 rounded" />
              <div className="bg-muted ml-3 h-2 w-32 rounded" />
              <div className="bg-muted ml-6 h-2 w-24 rounded" />
              <div className="bg-muted h-2 w-36 rounded" />
              <div className="bg-muted ml-3 h-2 w-28 rounded" />
              <div className="bg-muted ml-6 h-2 w-20 rounded" />
            </div>
          ) : (
            tocList
          )}
        </nav>
      </DrawerContent>
    </Drawer>
  )
}
