"use client"
import { motion } from 'motion/react';
import React, { useState } from 'react'
import { numberLabel } from '../Styles/styles';
import { item } from '../Styles/styles';
import { text } from '../Styles/styles';
import { AnchorItemProps } from '../AnimatedTextReveal.types';

export const AnchorItem = ({ label, number, href }: AnchorItemProps) => {
    const [isHovered, setIsHovered] = useState(false)

    const content = (
        <>
            <span style={numberLabel}>0{number}</span>
            {label}
        </>
    )

    return (

        <motion.a
            href={href}
            style={{
                ...item,
                justifyContent: isHovered ? "flex-end" : "flex-start",
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <motion.span layout style={text}>
                {content}
            </motion.span>
            <motion.span layout style={text} aria-hidden>
                {content}
            </motion.span>
        </motion.a>
    
    )
}

export default AnchorItem