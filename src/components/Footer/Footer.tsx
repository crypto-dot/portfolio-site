
import React from 'react'
import { Github } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'
import  FooterNavigation  from './FooterNavigation/Index';
import FooterYear  from './FooterYear/Index';

export const Footer = () => {
  return (
    <footer className="py-12">
    <div className="container mx-auto px-4 pt-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex md:mx-0 mx-auto">
          <p className="mt-auto text-muted-foreground place-items-center text-sm">
            Building the future, one commit at a time.
          </p>
        </div>
        
        <FooterNavigation />
        
        <div className="flex items-center flex-col md:items-end">
          <h3 className=" font-semibold mb-4 text-primary">EXTERNAL.LINKS</h3>
          <div className="flex space-x-4">
              <Link aria-label="GitHub" className="p-2" href="https://github.com/crypto-dot">
              <Github className="w-5 h-5" />
              </Link>
            <Link aria-label="LinkedIn" className="p-2" href="https://www.linkedin.com/in/carlos-arbizu-7a6701162/">
              <Linkedin className="w-5 h-5" />
              </Link>
          </div>
        </div>
      </div>
      
      <div className=" mt-8 pt-8 text-center w-fit mx-auto "  >
        <p className="text-muted-foreground  text-sm">
          <span className="text-primary">©</span> <FooterYear /> Arbizu.dev | ALL_RIGHTS_RESERVED
        </p>
      </div>
    </div>
  </footer>     
  )
}
