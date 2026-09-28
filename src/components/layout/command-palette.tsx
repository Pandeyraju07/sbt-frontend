import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { ROUTES } from '@/constants/routes'
import { useUiStore } from '@/store/ui-store'

export function CommandPalette() {
  const open = useUiStore((state) => state.commandPaletteOpen)
  const setOpen = useUiStore((state) => state.setCommandPaletteOpen)
  const navigate = useNavigate()

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen(!open)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, setOpen])

  const go = (path: string) => {
    setOpen(false)
    void navigate(path)
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search destinations…" />
      <CommandList>
        <CommandEmpty>No destination found.</CommandEmpty>
        <CommandGroup heading="Marketplace">
          <CommandItem onSelect={() => go(ROUTES.home)}>Marketplace Home</CommandItem>
          <CommandItem onSelect={() => go(ROUTES.categoryMobiles)}>Mobiles & Smartphones</CommandItem>
          <CommandItem onSelect={() => go(ROUTES.productIphone)}>iPhone 15 Showcase</CommandItem>
          <CommandItem onSelect={() => go(ROUTES.cart)}>Shopping Cart</CommandItem>
          <CommandItem onSelect={() => go(ROUTES.checkout)}>Checkout</CommandItem>
          <CommandItem onSelect={() => go(ROUTES.orderSuccess)}>Order Confirmation & Tracking</CommandItem>
        </CommandGroup>
        <CommandGroup heading="Seller Central">
          <CommandItem onSelect={() => go(ROUTES.sellerDashboard)}>Seller Dashboard</CommandItem>
          <CommandItem onSelect={() => go(ROUTES.sellerProducts)}>Seller Products Management</CommandItem>
        </CommandGroup>
        <CommandGroup heading="Admin Portal">
          <CommandItem onSelect={() => go(ROUTES.adminDashboard)}>Admin Dashboard</CommandItem>
          <CommandItem onSelect={() => go(ROUTES.adminProducts)}>Admin Products Management</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
