'use client'

import Link from 'next/link'
import Logo from './logo'
import { Button } from './ui/button'
import { ArrowRight, MenuIcon } from 'lucide-react'
import EarlyAccess from './dialogs/early-access'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from './ui/sheet'
import { HEADER_MENU } from '@/data/header-menu'
import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="flex flex-row py-4 px-8 shadow-lg w-full justify-between mb-24 absolute top-0 z-50 bg-brand-1">
      {/* Menu Sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">
            <MenuIcon />
            <span className="hidden md:block">Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full bg-brand-9 border-none p-0">
          {/* Header Section */}
          <SheetHeader className="p-8 pb-4">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-brand-1">
                <Logo isWhite={true} />
              </SheetTitle>
            </div>
          </SheetHeader>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 px-8 py-8">
            {HEADER_MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-inter text-brand-1 text-2xl font-medium py-4 hover:text-brand-7 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Footer Section */}
          <SheetFooter className="absolute bottom-8 left-8 right-8">
            {/* <Button variant="secondary" className="w-full" asChild>
              <Link href="https://app.trusynk.com">
                Go to App
                <ArrowRight />
              </Link>
            </Button> */}
            <EarlyAccess />
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* Logo */}
      <div className="md:block hidden">
        <Logo isWhite={false} />
        <span className="hidden sr-only">Trusynk</span>
      </div>

      {/* CTA */}
      <EarlyAccess />
    </header>
  )
}

export default Header
