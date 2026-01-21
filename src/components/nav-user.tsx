import { cn } from '@/lib/utils'

type NavUser = {
  name: string
  email: string
  avatar?: string
}

type NavUserProps = {
  user: NavUser
  className?: string
}

export function NavUser({ user, className }: NavUserProps) {
  const initials = user.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className={cn('flex items-center gap-3 rounded-md px-2 py-2', className)}>
      {user.avatar ? (
        <img
          src={user.avatar}
          alt={user.name}
          className="size-8 rounded-full object-cover"
        />
      ) : (
        <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground">
          {initials}
        </div>
      )}
      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{user.name}</p>
        <p className="truncate text-xs text-muted-foreground">{user.email}</p>
      </div>
    </div>
  )
}
