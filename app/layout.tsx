import SiteHeader from "@/components/site-header"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import "./globals.css"

export async function generateMetadata(): Promise<Metadata> {
  return { title: "学习文档", description: "存放个人学习文档的网站" }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <body className="flex min-h-full flex-col items-center">
        <ThemeProvider attribute="class">
          <SiteHeader />

          <main className="flex flex-col w-full max-w-7xl flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
