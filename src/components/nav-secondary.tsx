import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

type NavSecondaryItem = {
  title: string
  url: string
  icon?: LucideIcon
}

type NavSecondaryProps = {
  items: NavSecondaryItem[]
  className?: string
}

export function NavSecondary({ items, className }: NavSecondaryProps) {
  return (
    <SidebarMenu className={cn(className)}>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <a href={item.url}>
              {item.icon ? <item.icon className="size-4" /> : null}
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
