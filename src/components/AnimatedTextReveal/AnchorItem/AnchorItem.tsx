"use client"
import { motion } from 'motion/react';
import React, { useState } from 'react'
import { numberLabel } from '../Styles/styles';
import { item } from '../Styles/styles';
import { text } from '../Styles/styles';
import { AnchorItemProps } from '../AnimatedTextReveal.types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export const AnchorItem = ({ label, number, href }: AnchorItemProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const pathname = usePathname()
    const isActive = pathname === href
    const content = (
        <>
            <span style={numberLabel}>0{number}</span>
            {label}
        </>
    )

    return (
        <li>
        <Link href={href}>
        <motion.div
            style={{
                ...item,
                justifyContent: isHovered ? "flex-end" : "flex-start",
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <motion.span layout style={{...text, color: isActive ? "var(--primary)" : "var(--foreground)"}}>
                {content}
            </motion.span>
            <motion.span layout style={{...text, color: isActive ? "var(--primary)" : "var(--foreground)"}} aria-hidden>
                {content}
            </motion.span>
        </motion.div>
    </Link>
    </li>
    )
}

export default AnchorItem