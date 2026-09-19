import * as React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'

export const Drawer = Sheet
export const DrawerTrigger = SheetTrigger
export const DrawerClose = SheetClose
export const DrawerHeader = SheetHeader
export const DrawerFooter = SheetFooter
export const DrawerTitle = SheetTitle
export const DrawerDescription = SheetDescription

export interface DrawerContentProps
  extends React.ComponentProps<typeof SheetContent> {
  position?: 'left' | 'right' | 'top' | 'bottom'
}

export function DrawerContent({
  position = 'right',
  side,
  ...props
}: DrawerContentProps) {
  return <SheetContent side={side ?? position} {...props} />
}
