import { AppShell } from '@/layouts/app-shell'
import { adminNavigation } from '@/config/navigation'

export function AdminLayout() {
  return <AppShell navigation={adminNavigation} />
}
