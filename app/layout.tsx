import SiteHeader from "@/components/site-header"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import localFont from "next/font/local"
import "./globals.css"

const maple = localFont({
  src: [
    { path: "../fonts/MapleMono-NF-CN-Bold.ttf", style: "normal" },
    // { path: "../fonts/MapleMono-NF-CN-Regular.ttf", weight: "400", style: "normal" },
    // { path: "../fonts/MapleMono-NF-CN-Medium.ttf", weight: "500", style: "normal" },
    // { path: "../fonts/MapleMono-NF-CN-SemiBold.ttf", weight: "600", style: "normal" },
    // { path: "../fonts/MapleMono-NF-CN-Bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-maple",
})

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
      className={`${maple.variable} h-full antialiased`}
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
