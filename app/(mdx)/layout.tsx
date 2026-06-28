import { TableOfContents } from "@/components/table-of-contents"

export default async function MDXLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex">
      <TableOfContents />
      <article id="dmx-layout" className="px-3 flex-1 overflow-auto">
        {children}
      </article>
    </div>
  )
}
