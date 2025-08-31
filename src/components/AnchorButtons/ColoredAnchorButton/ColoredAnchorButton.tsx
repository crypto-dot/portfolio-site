import React from 'react'
import { motion } from "framer-motion"
import { Play, ExternalLink } from 'lucide-react';
interface ColoredAnchorButtonProps {
  text: string;
  link: string;
  useArrowIcon? : boolean | undefined;
  useOutIcon?: boolean | undefined;
  children?: React.ReactNode;
}
export const ColoredAnchorButton = ({ text, link, useArrowIcon, useOutIcon, children } : ColoredAnchorButtonProps) => {
  // framer motion does not play nice with lucide icons so we need to check if we need to use an arrow icon, out icon, or none
  // const icon = useArrowIcon ? <Play className="w-4 h-4" /> : useOutIcon ? <ExternalLink className="w-4 h-4" /> : null;
  return (
    <motion.a   href={link} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 font-mono">
      {text}
    </motion.a>
  )
}