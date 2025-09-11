import React from 'react'

export const WhiteAnchorButton = ({ text, link, children } : { 
  text: string, 
  link: string, 
  children?: React.ReactNode 
}) => {
  return (
    <a   
      href={link} 
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-9 px-4 py-2 has-[>svg]:px-3 bg-secondary text-secondary-foreground min-h-[2.5rem] hover:scale-105 active:scale-95"
    >
      {children}
      {text}
    </a>
  )
}