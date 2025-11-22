import Link from 'next/link'
import { Button } from './ui/button'
import { SiInstagram, SiThreads, SiTiktok, SiWhatsapp, SiX } from '@icons-pack/react-simple-icons'
import { Mail } from 'lucide-react'
import { Linkedin } from 'iconoir-react'

const Socmed = () => {
  return (
    <div className="grid grid-cols-4 md:flex md:flex-row w-fit md:w-full justify-start items-start left-0">
      <Button asChild size="icon" variant="ghost" className="text-white text-xs">
        <Link href="mailto:support@trusynk.com" target="_blank" rel="noopener noreferrer">
          <Mail />
        </Link>
      </Button>
      <Button asChild size="icon" variant="ghost" className="text-white text-xs">
        <Link
          href="https://www.linkedin.com/company/trusynk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </Link>
      </Button>
      <Button asChild size="icon" variant="ghost" className="text-white text-xs">
        <Link href="https://www.instagram.com/trusynk/" target="_blank" rel="noopener noreferrer">
          <SiInstagram />
        </Link>
      </Button>
      <Button asChild size="icon" variant="ghost" className="text-white text-xs">
        <Link href="https://wa.me/628886175670/" target="_blank" rel="noopener noreferrer">
          <SiWhatsapp />
        </Link>
      </Button>
      <Button asChild size="icon" variant="ghost" className="text-white text-xs">
        <Link href="https://www.tiktok.com/@trusynk" target="_blank" rel="noopener noreferrer">
          <SiTiktok />
        </Link>
      </Button>
      <Button asChild size="icon" variant="ghost" className="text-white text-xs">
        <Link href="https://www.threads.com/@trusynk" target="_blank" rel="noopener noreferrer">
          <SiThreads />
        </Link>
      </Button>
      <Button asChild size="icon" variant="ghost" className="text-white text-xs">
        <Link href="https://x.com/trusynk" target="_blank" rel="noopener noreferrer">
          <SiX />
        </Link>
      </Button>
    </div>
  )
}

export default Socmed
