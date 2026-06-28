import { headers } from "next/headers"

export const getPathname = async () => {
  const headersList = await headers()
  return headersList.get("x-pathname")
}
