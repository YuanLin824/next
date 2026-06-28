"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HOME_FROUPS, resolveIcon } from "./constants"

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-10">
      {HOME_FROUPS.map((group) => {
        const CategoryIcon = resolveIcon(group.icon)
        return (
          <section key={group.title}>
            <div className="border-border mb-4 flex items-center gap-2 border-b pb-2">
              <CategoryIcon className="text-muted-foreground size-6" />
              <h2 className="text-2xl font-semibold">{group.title}</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {group.children.map((child) => {
                const ChildIcon = resolveIcon(child.icon)
                return (
                  <a key={child.title} href={child.url}>
                    <Card className="hover:bg-muted transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <ChildIcon className="text-primary size-4 transition-transform group-hover/card:scale-110" />
                          <span>{child.title}</span>
                        </CardTitle>
                        {child.desc && <CardDescription>{child.desc}</CardDescription>}
                      </CardHeader>
                    </Card>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
