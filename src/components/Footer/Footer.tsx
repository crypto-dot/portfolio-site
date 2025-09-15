"use client"
import React, { useEffect, useRef } from 'react'
import { Button } from '../shadcn-ui/button'
import { Github } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Footer = () => {
    const yearContainer = useRef<HTMLDivElement>(null);
    const year = new Date().getFullYear();
    const pathname = usePathname();
    useEffect(() => {
        if (yearContainer.current) {
            yearContainer.current.innerHTML = year.toString();
        }
    }, []);
  return (
    <footer className="py-12">
    <div className="container mx-auto px-4 pt-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex md:mx-0 mx-auto">
          <p className="mt-auto text-muted-foreground  text-sm">
            Building the future, one commit at a time.
          </p>
        </div>
        
        <div className="flex items-center flex-col">
          <h3 className=" font-semibold mb-4 text-primary">NAVIGATION.MAP</h3>
          <div className="space-y-2">
          <Link href="/home" className={`block hover:text-primary transition-colors  text-sm w-fit ${pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}>
              <span className="text-primary mr-2">&rarr;</span>HOME
            </Link>
            <Link  href="/projects" className={`block hover:text-primary transition-colors  text-sm w-fit ${pathname === '/projects' ? 'text-primary' : 'text-muted-foreground'}`}>
              <span className="text-primary mr-2">&rarr;</span>PROJECTS
            </Link>
            <Link href="/posts" className={`block hover:text-primary transition-colors  text-sm w-fit ${pathname === '/posts' ? 'text-primary' : 'text-muted-foreground'}`}>
              <span className="text-primary mr-2">&rarr;</span>POSTS
            </Link>
          </div>
        </div>
        
        <div className="flex items-center flex-col md:items-end">
          <h3 className=" font-semibold mb-4 text-primary">EXTERNAL.LINKS</h3>
          <div className="flex space-x-4">
              <Link aria-label="GitHub" className="p-2" href="https://github.com/crypto-dot">
              <Github className="w-5 h-5" />
              </Link>
            <Link aria-label="LinkedIn" className="p-2" href="https://www.linkedin.com/in/carlos-a-7a6701162//">
              <Linkedin className="w-5 h-5" />
              </Link>
          </div>
        </div>
      </div>
      
      <div className=" mt-8 pt-8 text-center w-fit mx-auto "  >
        <p className="text-muted-foreground  text-sm">
          <span className="text-primary">©</span> <span ref={yearContainer}></span> Arbizu.dev | ALL_RIGHTS_RESERVED
        </p>
      </div>
    </div>
  </footer>     
  )
}
