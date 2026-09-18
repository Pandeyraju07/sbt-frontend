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
        <CommandGroup heading="Foundation">
          <CommandItem onSelect={() => go(ROUTES.home)}>Home</CommandItem>
          <CommandItem onSelect={() => go(ROUTES.login)}>Login</CommandItem>
          <CommandItem onSelect={() => go(ROUTES.register)}>Register</CommandItem>
          <CommandItem onSelect={() => go(ROUTES.seller.root)}>Seller shell</CommandItem>
          <CommandItem onSelect={() => go(ROUTES.admin.root)}>Admin shell</CommandItem>
          <CommandItem onSelect={() => go(ROUTES.buyer.root)}>Buyer shell</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
