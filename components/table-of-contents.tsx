/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { cn } from "@/lib/utils"
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
 * 渲染为 sticky 右侧栏，按层级缩进，IntersectionObserver 追踪当前位置并高亮。
 * 跟随路由变化自动重建目录。
 */
export function TableOfContents() {
  const pathname = usePathname()
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState("")
  const [loading, setLoading] = useState(true)
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

  // Loading 骨架屏
  if (loading) {
    return (
      <aside className="sticky top-14.25 hidden w-50 shrink-0 self-start lg:block">
        <nav className="h-[calc(100vh-57px)] overflow-y-auto py-5">
          <div className="text-muted-foreground/60 mb-3 text-xs font-semibold tracking-wider uppercase">
            目录
          </div>
          <div className="animate-pulse space-y-2.5">
            <div className="bg-muted h-2.5 w-20 rounded" />
            <div className="bg-muted ml-3 h-2 w-24 rounded" />
            <div className="bg-muted ml-6 h-2 w-18 rounded" />
            <div className="bg-muted h-2 w-28 rounded" />
            <div className="bg-muted ml-3 h-2 w-20 rounded" />
            <div className="bg-muted ml-6 h-2 w-16 rounded" />
          </div>
        </nav>
      </aside>
    )
  }

  return (
    <aside className="sticky top-14.25 hidden w-50 shrink-0 self-start lg:block">
      <nav className="h-[calc(100vh-57px)] overflow-y-auto py-5">
        <div className="text-muted-foreground/60 mb-3 text-xs font-semibold tracking-wider uppercase">
          目录
        </div>
        <ul className="border-border space-y-0.5 border-l">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
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
      </nav>
    </aside>
  )
}
