import createMDX from "@next/mdx"
import type { NextConfig } from "next"

const withMDX = createMDX({
  options: {
    remarkPlugins: [["remark-gfm", {}]],
    rehypePlugins: ["rehype-slug", ["rehype-pretty-code", { theme: "github-dark-dimmed" }]],
  },
})

const nextConfig: NextConfig = {
  // 开启 React 编译器
  reactCompiler: true,
  experimental: { turbopackRustReactCompiler: true },

  cacheComponents: true, // 开启组件缓存
  partialPrefetching: true, // 开启部分预取

  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
}

export default withMDX(nextConfig)
