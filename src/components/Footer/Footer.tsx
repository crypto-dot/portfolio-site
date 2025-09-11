"use client"
import React, { useEffect, useRef } from 'react'
import { Button } from '../shadcn-ui/button'
import { Github } from 'lucide-react'
import { ExternalLink } from 'lucide-react'

export const Footer = () => {
    const yearContainer = useRef<HTMLDivElement>(null);
    const year = new Date().getFullYear();

    useEffect(() => {
        if (yearContainer.current) {
            yearContainer.current.innerHTML = year.toString();
        }
    }, []);
  return (
    <footer className="py-12">
    <div className="container mx-auto px-4 pt-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex mx-auto">
          <p className="mt-auto text-gray-300  text-sm">
            Building the future, one commit at a time.
          </p>
        </div>
        
        <div className="flex items-center flex-col">
          <h3 className=" font-semibold mb-4 text-primary">NAVIGATION.MAP</h3>
          <div className="space-y-2">
            <a href="/projects" className="block text-gray-300 hover:text-primary transition-colors  text-sm w-fit">
              <span className="text-primary mr-2">&rarr;</span>PROJECTS
            </a>
            <a href="/blog" className="block text-gray-300 hover:text-primary transition-colors  text-sm w-fit">
              <span className="text-primary mr-2">&rarr;</span>BLOG
            </a>
            <a href="/contact" className="block text-gray-300 hover:text-primary transition-colors  text-sm w-fit">
              <span className="text-primary mr-2">&rarr;</span>CONTACT
            </a>
          </div>
        </div>
        
        <div className="flex items-center flex-col md:items-end">
          <h3 className=" font-semibold mb-4 text-primary">EXTERNAL.LINKS</h3>
          <div className="flex space-x-4">
            <Button size="sm" variant="ghost" className="text-gray-300 hover:text-primary hover:bg-cyan-500/10 p-2">
              <Github className="w-5 h-5" />
            </Button>
            <Button size="sm" variant="ghost" className="text-gray-300 hover:text-primary hover:bg-cyan-500/10 p-2">
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className=" mt-8 pt-8 text-center w-fit mx-auto "  >
        <p className="text-gray-400  text-sm">
          <span className="text-primary">©</span> <span ref={yearContainer}></span> Arbizu.dev | ALL_RIGHTS_RESERVED
        </p>
      </div>
    </div>
  </footer>     
  )
}
