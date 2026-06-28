import type { MDXComponents } from "mdx/types"
import Link from "next/link"

/**
 * MDX 渲染时使用的自定义组件。
 *
 * HTML 元素 → React 组件的映射，使 Markdown 语法自动继承项目 Tailwind 样式。
 * 例如 `# 标题` → `<h1 className="text-3xl font-bold ...">`
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1 className="mt-8 mb-4 scroll-mt-14.25 text-3xl font-bold tracking-tight" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="mt-6 mb-3 scroll-mt-14.25 text-xl font-semibold tracking-tight" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="mt-4 mb-2 scroll-mt-14.25 text-lg font-medium" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="text-muted-foreground leading-7 not-first:mt-4" {...props}>
        {children}
      </p>
    ),
    a: ({ children, href, ...props }) => (
      <Link
        href={href ?? "#"}
        className="text-primary font-medium underline underline-offset-4 hover:opacity-80"
        {...props}
      >
        {children}
      </Link>
    ),
    ul: ({ children, ...props }) => (
      <ul className="text-muted-foreground my-4 ml-6 list-disc [&>li]:mt-2" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="text-muted-foreground my-4 ml-6 list-decimal [&>li]:mt-2" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-7" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-primary/30 text-muted-foreground mt-4 border-l-2 pl-4 italic"
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({ children, className, ...props }) => (
      <code className={className} {...props}>
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => {
      const language = (props as Record<string, unknown>)?.["data-language"] as string | undefined
      return (
        <div className="group/code relative my-4 rounded-lg border">
          {language && (
            <div className="text-muted-foreground/60 border-border bg-background pointer-events-none absolute top-0 right-4 rounded-b-md border-x border-b px-3 py-1 font-mono text-xs transition-opacity group-hover/code:opacity-0">
              {language}
            </div>
          )}
          <pre
            className="overflow-x-auto rounded-lg p-4 font-mono text-sm leading-relaxed"
            {...props}
          >
            {children}
          </pre>
        </div>
      )
    },
    hr: (props) => <hr className="border-border my-8" {...props} />,
    img: ({ alt, ...props }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img alt={alt} className="my-6 rounded-lg border" {...props} />
    ),
    table: ({ children, ...props }) => (
      <div className="my-6 w-full overflow-x-auto">
        <table className="w-full text-sm" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th className="border px-4 py-2 text-left font-semibold" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="border px-4 py-2" {...props}>
        {children}
      </td>
    ),
    ...components,
  }
}
