import Link from 'next/link'
import Logo from './logo'
import { P } from './typography'
import { Button } from './ui/button'
import { DownloadIcon } from 'lucide-react'
import { useId } from 'react'
import { FOOTER_MENU } from '@/data/footer-menu'
import { HEADER_MENU } from '@/data/header-menu'
import Socmed from './socmed'

const Footer = () => {
  const id = useId()

  return (
    <footer className="p-4 bg-brand-1 w-full h-full">
      <div className="flex flex-col p-8 bg-brand-9 rounded-md justify-between items-center h-full gap-4">
        <div className="w-full justify-between items-start flex flex-col md:flex-row">
          <div className="flex flex-col w-64 gap-2 overflow-hidden">
            <Logo isWhite />
            <P className="text-xs text-white">Trusynk — Beyond Networking.</P>
            <Socmed />
          </div>
          <div className="flex md:flex-row flex-col gap-8 md:gap-24">
            <div className="flex flex-col gap-2 justify-center items-start">
              <P className="text-brand-8">Menu</P>
              {HEADER_MENU.map((item) => (
                <Button key={`${id}-${item.label}`} size="link" asChild variant="link">
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
            </div>
            <div className="flex flex-col gap-2 justify-center items-start">
              <P className="text-brand-8">Support</P>
              {FOOTER_MENU.map((item) => (
                <Button key={`${id}-${item.label}`} size="link" asChild variant="link">
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full justify-between items-start md:items-center align-start gap-4 md:align-middle">
          <P className="text-xs text-gray-8">©2025 Trusynk. All rights reserved.</P>
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
