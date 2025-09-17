"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Terminal, Menu, X, Home, Code, FileText } from 'lucide-react'
import { TextRevealListItems } from '../AnimatedTextReveal/AnimatedTextReveal'
import { AnchorItemProps } from '../AnimatedTextReveal/AnimatedTextReveal.types'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const navigationItems : AnchorItemProps[] = [
    { href: '/', number: 1, label: 'HOME' },
    { href: '/projects', number: 2, label: 'PROJECTS' },
    { href: '/posts', number: 3, label: 'POSTS' },
  ]

  const navigationIcons = {
    'HOME': <Home className="w-4 h-4" />,
    'PROJECTS': <Code className="w-4 h-4" />,
    'POSTS': <FileText className="w-4 h-4" />
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <header className="bg-gray-400/20 backdrop-blur-[4px] sticky z-50  max-w-[500px] rounded-[30px] ml-auto mr-auto top-5 w-[calc(100%-theme(spacing.16))]">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-center">
          
          {/* Desktop Navigation - Hidden on mobile, visible on lg+ */}
          <div className="hidden lg:flex items-center space-x-8">
              <TextRevealListItems items={navigationItems} flexDirection="row" isAnchor={true} />
          </div>

          {/* Mobile Dropdown Menu - Visible on mobile, hidden on lg+ */}
          <div className="lg:hidden relative" ref={dropdownRef}>
            {/* Mobile Menu Button */}
            <motion.button
              className="p-2 transition-colors rounded-lg hover:bg-primary/10"
              aria-label="Toggle navigation menu"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  className="absolute left-[-109px] top-full mt-4 w-64 bg-secondary rounded-xl overflow-hidden z-50"
                >
                  <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                    className="px-4 py-3 border-b border-gray-400/20"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Terminal className="w-4 h-4 text-primary" />
                      <span className="text-sm  text-secondary-foreground">NAVIGATION</span>
                    </div>
                    

                  </motion.div>

                  <div className="py-4">
                    <div className="flex gap-2 flex-col">
                      {navigationItems.map((item, index) => (
                        <motion.div
                          key={`quick-${item.href}`}
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ 
                            delay: 0.2 + (index * 0.1), 
                            duration: 0.4,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                          }}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ 
                            scale: 0.95,
                            transition: { duration: 0.1 }
                          }}
                        >
                          <Link
                            href={item.href}
                            className="flex items-center gap-2 px-3 py-2 text-xs text-secondary-foreground transition-all duration-300 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className={`${pathname === item.href ? 'text-primary' : 'text-secondary-foreground'}`}>
                            {navigationIcons[item.label as keyof typeof navigationIcons]} </span>{item.label}
      
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="px-4 py-3 border-t border-slate-700/50 bg-slate-800/30"
                  >
                    <div className="text-xs  text-gray-500 text-center">
                      Press ESC to close
                    </div>
                  </motion.div> */}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </header>
  )
}