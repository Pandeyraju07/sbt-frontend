import type { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { AppHeader } from '@/components/layout/app-header'
import { AppSidebar } from '@/components/layout/app-sidebar'
import { CommandPalette } from '@/components/layout/command-palette'
import { MobileNav } from '@/components/layout/mobile-nav'
import { useUiStore } from '@/store/ui-store'
import type { NavigationConfig } from '@/types/navigation'

type AppShellProps = {
  navigation: NavigationConfig
  children?: ReactNode
}

export function AppShell({ navigation, children }: AppShellProps) {
  const sidebarCollapsed = useUiStore((state) => state.sidebarCollapsed)
  const mobileNavOpen = useUiStore((state) => state.mobileNavOpen)
  const setMobileNavOpen = useUiStore((state) => state.setMobileNavOpen)

  return (
    <div className="bg-background flex min-h-svh">
      <AppSidebar navigation={navigation} collapsed={sidebarCollapsed} />
      <MobileNav
        open={mobileNavOpen}
        onOpenChange={setMobileNavOpen}
        navigation={navigation}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <AppHeader
          title={navigation.title}
          onOpenMobileNav={() => setMobileNavOpen(true)}
        />
        <main className="min-h-0 flex-1">{children ?? <Outlet />}</main>
      </div>
      <CommandPalette />
    </div>
  )
}
