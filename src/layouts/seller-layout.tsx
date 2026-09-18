import { AppShell } from '@/layouts/app-shell'
import { sellerNavigation } from '@/config/navigation'

export function SellerLayout() {
  return <AppShell navigation={sellerNavigation} />
}
