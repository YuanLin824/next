import { TableOfContents } from "@/components/table-of-contents"

export default async function MDXLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <TableOfContents />
      <article id="dmx-layout" className="px-3">
        {children}
      </article>
    </>
  )
}
