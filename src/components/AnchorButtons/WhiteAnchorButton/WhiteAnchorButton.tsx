import React from 'react'
import { motion } from "motion/react"
const WhiteAnchorButton = ({ text, link } : {text: string, link: string}) => {
  return (
    <motion.a  whileHover={{ scale: 1.15 }}
  whileTap={{ scale: 0.95 }}  href={link} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-9 px-4 py-2 has-[>svg]:px-3 bg-white/20 hover:bg-white/30 font-mono">
      {text}
    </motion.a>
  )
}

export default WhiteAnchorButton