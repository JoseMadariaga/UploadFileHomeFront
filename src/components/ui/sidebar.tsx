import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

type SidebarContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  toggle: () => void
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null)

type SidebarProviderProps = React.HTMLAttributes<HTMLDivElement> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange,
  className,
  children,
  ...props
}: SidebarProviderProps) {
  const [openState, setOpenState] = React.useState(defaultOpen)
  const open = openProp ?? openState

  const setOpen = React.useCallback(
    (value: boolean) => {
      onOpenChange?.(value)
      if (openProp === undefined) {
        setOpenState(value)
      }
    },
    [onOpenChange, openProp]
  )

  const toggle = React.useCallback(() => {
    setOpen(!open)
  }, [open, setOpen])

  return (
    <SidebarContext.Provider value={{ open, setOpen, toggle }}>
      <div className={cn('flex min-h-screen w-full', className)} {...props}>
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.')
  }
  return context
}

type SidebarProps = React.HTMLAttributes<HTMLDivElement> & {
  collapsible?: 'offcanvas' | 'icon' | 'none'
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, collapsible = 'none', ...props }, ref) => {
    const context = React.useContext(SidebarContext)
    const isOpen = context ? context.open : true
    const isOffcanvas = collapsible === 'offcanvas'

    return (
      <div
        ref={ref}
        data-state={isOpen ? 'open' : 'closed'}
        data-collapsible={collapsible}
        className={cn(
          'flex min-h-screen flex-col bg-background text-foreground transition-[width,transform] duration-200 ease-out',
          isOffcanvas
            ? isOpen
              ? 'w-64 translate-x-0 border-r'
              : 'w-0 -translate-x-full overflow-hidden border-r-0'
            : 'w-64 border-r',
          className
        )}
        {...props}
      />
    )
  }
)
Sidebar.displayName = 'Sidebar'

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center px-2 py-2', className)}
    {...props}
  />
))
SidebarHeader.displayName = 'SidebarHeader'

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex min-h-0 flex-1 flex-col gap-2 overflow-auto p-2', className)}
    {...props}
  />
))
SidebarContent.displayName = 'SidebarContent'

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('border-t px-2 py-2', className)}
    {...props}
  />
))
SidebarFooter.displayName = 'SidebarFooter'

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('m-0 flex list-none flex-col gap-1 p-0', className)}
    {...props}
  />
))
SidebarMenu.displayName = 'SidebarMenu'

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('list-none', className)} {...props} />
))
SidebarMenuItem.displayName = 'SidebarMenuItem'

type SidebarMenuButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  isActive?: boolean
}

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(({ className, asChild = false, isActive, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      ref={ref}
      data-slot="sidebar-menu-button"
      data-active={isActive ? 'true' : undefined}
      className={cn(
        'flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground data-[active=true]:bg-accent data-[active=true]:text-foreground',
        className
      )}
      {...props}
    />
  )
})
SidebarMenuButton.displayName = 'SidebarMenuButton'

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex min-w-0 flex-1 flex-col', className)} {...props} />
))
SidebarInset.displayName = 'SidebarInset'

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, onClick, ...props }, ref) => {
  const context = React.useContext(SidebarContext)

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        'inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground',
        className
      )}
      onClick={(event) => {
        onClick?.(event)
        context?.toggle()
      }}
      {...props}
    />
  )
})
SidebarTrigger.displayName = 'SidebarTrigger'

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
}
