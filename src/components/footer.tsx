import Link from 'next/link'
import Logo from './logo'
import { P } from './typography'
import { Button } from './ui/button'
import { DownloadIcon } from 'lucide-react'
import { useId } from 'react'
import { FOOTER_MENU } from '@/data/footer-menu'
import { HEADER_MENU } from '@/data/header-menu'

const Footer = () => {
  const id = useId()

  return (
    <footer className="p-4 bg-brand-1 w-full">
      <div className="flex flex-col p-8 h-96 bg-brand-9 rounded-md justify-between items-center">
        <div className="w-full justify-between items-start flex flex-col md:flex-row">
          <Logo isWhite />
          <div className="flex md:flex-row flex-col gap-24">
            <div className="flex flex-col gap-2 justify-center items-start">
              {HEADER_MENU.map((item) => (
                <Button size="link" asChild variant="link">
                  <Link key={`${id}-${item.label}`} href={item.href}>
                    {item.label}
                  </Link>
                </Button>
              ))}
            </div>
            <div className="flex flex-col gap-2 justify-center items-start">
              {FOOTER_MENU.map((item) => (
                <Button size="link" asChild variant="link">
                  <Link key={`${id}-${item.label}`} href={item.href}>
                    {item.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex md:flex-row w-full justify-between items-center align-middle">
          <span className="text-xs text-gray-8">©2025 Trusynk. All rights reserved.</span>
          <Link
            href="https://drive.google.com/drive/folders/1HRfluXVP85fSSaiHl5Cx_NHDzrpbrPuM?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="capitalize">
              Download Media Kit
              <DownloadIcon />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
