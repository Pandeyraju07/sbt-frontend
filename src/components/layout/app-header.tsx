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
import { OrgStoreContextSelector } from '@/components/layout/org-store-context-selector'
import { useUiStore } from '@/store/ui-store'

type AppHeaderProps = {
  title: string
  onOpenMobileNav: () => void
  showOrgSelector?: boolean
}

export function AppHeader({
  title,
  onOpenMobileNav,
  showOrgSelector = true,
}: AppHeaderProps) {
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
        <MenuIcon className="size-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="hidden lg:inline-flex"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <PanelLeftIcon className="size-4" />
      </Button>

      <span className="text-label text-muted-foreground hidden sm:inline-block font-semibold">
        {title}
      </span>

      {showOrgSelector && (
        <div className="hidden md:block">
          <OrgStoreContextSelector />
        </div>
      )}

      <button
        type="button"
        onClick={() => setCommandPaletteOpen(true)}
        className="border-input bg-background text-muted-foreground hover:bg-muted ml-auto flex h-9 max-w-md min-w-0 flex-1 items-center gap-2 rounded-lg border px-3 text-left text-sm transition-colors md:max-w-xs"
        aria-label="Open command search"
      >
        <SearchIcon className="size-4 shrink-0" />
        <span className="truncate">Search…</span>
        <kbd className="border-border bg-muted text-muted-foreground ml-auto hidden rounded border px-1.5 py-0.5 text-[10px] font-medium sm:inline">
          Ctrl K
        </kbd>
      </button>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Notifications"
        className="relative"
      >
        <BellIcon className="size-4" />
        <span className="bg-primary absolute top-2 right-2 size-2 rounded-full" />
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
            <Avatar className="size-8 border border-border">
              <AvatarFallback className="text-xs font-medium">SBT</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>
            <div className="flex flex-col">
              <span className="text-xs font-semibold">Operator Account</span>
              <span className="text-muted-foreground text-[11px] font-normal">
                phase1-demo@sellbuytrust.com
              </span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>Profile & Security — Phase 2</DropdownMenuItem>
          <DropdownMenuItem disabled>Organization Settings — Phase 2</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>Sign out — Phase 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
