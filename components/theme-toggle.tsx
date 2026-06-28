"use client"

import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

const themes = ["system", "light", "dark"] as const

/**
 * 主题切换按钮 — 亮色 / 暗色 / 跟随系统 三态循环切换。
 *
 * 使用 next-themes 的 useTheme Hook，
 * 客户端渲染前保持空白避免 hydration mismatch。
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <span className="size-4" />
      </Button>
    )
  }

  const current = theme ?? "system"
  const next = themes[(themes.indexOf(current as (typeof themes)[number]) + 1) % themes.length]

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(next)}
      aria-label={`切换主题 (当前: ${current})`}
    >
      <Sun
        className={`size-4 transition-all ${
          current === "light" ? "scale-100 rotate-0" : "absolute scale-0 rotate-90"
        }`}
      />
      <Moon
        className={`size-4 transition-all ${
          current === "dark" ? "scale-100 rotate-0" : "absolute scale-0 -rotate-90"
        }`}
      />
      <Monitor
        className={`size-4 transition-all ${
          current === "system" ? "scale-100 rotate-0" : "absolute scale-0 rotate-90"
        }`}
      />
    </Button>
  )
}
