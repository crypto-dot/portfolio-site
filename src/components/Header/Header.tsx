"use client"

import React, { useState } from 'react'
import { ColoredAnchorButton } from '../AnchorButtons/ColoredAnchorButton/ColoredAnchorButton'
import { Terminal, Menu, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../shadcn-ui/dropdown-menu'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { href: '#home', number: '01.', label: 'HOME' },
    { href: '#projects', number: '02.', label: 'PROJECTS' },
    { href: '#blog', number: '03.', label: 'BLOG' },
  ]

  return (
    <header className="relative border-b border-cyan-500/20 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Terminal className="w-5 h-5 text-black" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>
            <div>
              <div className="font-mono text-base md:text-lg font-bold text-cyan-400">./carlosarbizu</div>
              <div className="text-xs text-gray-400">SYSTEM_ONLINE</div>
            </div>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile, visible on lg+ */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-mono hover:text-cyan-400 transition-colors relative group"
              >
                <span className="text-cyan-400 mr-1">{item.number}</span>{item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Dropdown Menu - Visible on mobile, hidden on md+ */}
          <div className="lg:hidden">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <button
                  className="p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  aria-label="Toggle navigation menu"
                >
                  {isOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-52 bg-slate-800/95 border-cyan-500/20 backdrop-blur-sm mt-2"
              >
                {navigationItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <a
                      href={item.href}
                      className="text-sm font-mono text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-cyan-400 mr-2">{item.number}</span>
                      {item.label}
                    </a>
                  </DropdownMenuItem>
                ))}
                <div className="border-t border-cyan-500/20 my-2" />
                <DropdownMenuItem asChild>
                  <div className="px-2 py-1.5">
                    <ColoredAnchorButton text='INITIALIZE_CONTACT' />
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Contact Button - Hidden on mobile, visible on lg+ */}
          <div className="hidden lg:block">
            <ColoredAnchorButton text='INITIALIZE_CONTACT' />
          </div>
        </nav>
      </div>
    </header>
  )
}