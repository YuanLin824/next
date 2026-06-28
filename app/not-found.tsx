export default async function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 my-auto">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg font-medium">页面未找到</p>
      <p className="text-muted-foreground">你访问的页面不存在</p>
    </div>
  )
}
