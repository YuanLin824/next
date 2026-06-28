export default async function MDXLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="px-3 pb-3">{children}</div>
}
