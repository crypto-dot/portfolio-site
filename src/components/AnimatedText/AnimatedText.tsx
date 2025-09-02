"use client"

import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

// might need to change this in the future to avoid multiple stylesheets in one 
// page, not a big deal for now
export const AnimatedText = ({ children, duration = 2, bounce = 0 } : { children: React.ReactNode, duration?: number, bounce?: number }) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            // Hide the container until the fonts are loaded
            containerRef.current.style.visibility = "visible"

            const { words } = splitText(
                containerRef.current.querySelector(".animated-text")!
            )

            // Animate the words in the h1
            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: "spring",
                    duration: duration,
                    bounce: bounce,
                    delay: stagger(0.05),
                }
            )
        })
    }, [])

    return (
        <div className="animated-container" ref={containerRef}>
            {children}
            <Stylesheet />
        </div>
    )
}

function Stylesheet() {
    return (
        <style>{`
            .animated-container {
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
    )
}
