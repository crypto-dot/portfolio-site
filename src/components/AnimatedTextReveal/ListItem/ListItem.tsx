"use client"
import { motion } from "motion/react";
import { text } from "../Styles/styles";
import { item } from "../Styles/styles";
import { useState } from "react";
import { numberLabel } from "../Styles/styles";
import { ListItemProps } from "../AnimatedTextReveal.types";
export const ListItem = ({ label, number }: ListItemProps) => {
    const [isHovered, setIsHovered] = useState(false)

    const content = (
        <>
            <span style={numberLabel}>0{number}</span>
            {label}
        </>
    )

    return (

        <motion.li
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
        </motion.li>
    
    )
}