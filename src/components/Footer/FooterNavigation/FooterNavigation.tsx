"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export const FooterNavigation = () => {
    const pathname = usePathname()
  return (
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
  )
}
