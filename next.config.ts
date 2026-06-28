import createMDX from "@next/mdx"
import type { NextConfig } from "next"

const withMDX = createMDX({
  options: {
    remarkPlugins: [["remark-gfm", {}]],
    rehypePlugins: ["rehype-slug", ["rehype-pretty-code", { theme: "github-dark-dimmed" }]],
  },
})

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

export default withMDX(nextConfig)
