import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

type DocumentItem = {
  name: string
  url: string
  icon?: LucideIcon
}

type NavDocumentsProps = {
  items: DocumentItem[]
  className?: string
}

export function NavDocuments({ items, className }: NavDocumentsProps) {
  return (
    <SidebarMenu className={cn(className)}>
      {items.map((item) => (
        <SidebarMenuItem key={item.name}>
          <SidebarMenuButton asChild>
            <a href={item.url}>
              {item.icon ? <item.icon className="size-4" /> : null}
              <span>{item.name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
