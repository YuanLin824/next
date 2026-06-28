"use client"

export default function Error() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-2">
      <h1 className="text-2xl font-bold">出错了</h1>
      <p className="text-muted-foreground">页面发生错误，请稍后重试</p>
    </main>
  )
}
