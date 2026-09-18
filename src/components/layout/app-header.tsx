import { BellIcon, MenuIcon, PanelLeftIcon, SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useUiStore } from '@/store/ui-store'

type AppHeaderProps = {
  title: string
  onOpenMobileNav: () => void
}

export function AppHeader({ title, onOpenMobileNav }: AppHeaderProps) {
  const toggleSidebar = useUiStore((state) => state.toggleSidebar)
  const setCommandPaletteOpen = useUiStore((state) => state.setCommandPaletteOpen)

  return (
    <header className="border-border bg-card/90 sticky top-0 z-40 flex h-14 items-center gap-3 border-b px-3 backdrop-blur-md md:px-4">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onOpenMobileNav}
        aria-label="Open navigation"
      >
        <MenuIcon />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="hidden lg:inline-flex"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <PanelLeftIcon />
      </Button>

      <p className="text-label text-muted-foreground hidden sm:block">{title}</p>

      <button
        type="button"
        onClick={() => setCommandPaletteOpen(true)}
        className="border-input bg-background text-muted-foreground hover:bg-muted ml-auto flex h-9 max-w-md min-w-0 flex-1 items-center gap-2 rounded-lg border px-3 text-left text-sm transition-colors md:max-w-sm"
        aria-label="Open command search"
      >
        <SearchIcon className="size-4 shrink-0" />
        <span className="truncate">Search…</span>
        <kbd className="border-border bg-muted text-muted-foreground ml-auto hidden rounded border px-1.5 py-0.5 text-[10px] font-medium sm:inline">
          Ctrl K
        </kbd>
      </button>

      <Button type="button" variant="ghost" size="icon" aria-label="Notifications">
        <BellIcon />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label="Account menu"
          >
            <Avatar className="size-8">
              <AvatarFallback>SBT</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>Profile — Phase 2</DropdownMenuItem>
          <DropdownMenuItem disabled>Sign out — Phase 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
