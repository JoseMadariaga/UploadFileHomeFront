import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

type NavItem = {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
}

type NavMainProps = {
  items: NavItem[]
  className?: string
}

export function NavMain({ items, className }: NavMainProps) {
  return (
    <SidebarMenu className={cn(className)}>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={item.isActive}>
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
