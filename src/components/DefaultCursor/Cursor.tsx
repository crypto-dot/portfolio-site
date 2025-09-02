"use client"

import { Cursor, useCursorState, useMagneticPull } from "motion-plus/react"
import { motion } from "motion/react"
import { useRef } from "react"

export const DefaultCursor = () => {
    const ref = useRef<HTMLButtonElement>(null)
    const pull = useMagneticPull(ref, 0.2)

    // Handle the color change when hovering over the Examples site popups
    const { zone } = useCursorState()

    return (

            <Cursor
                magnetic
                className="cursor"
                variants={{
                    default: {
                        backgroundColor:
                            zone === "overlay" ? "#eee" : "#7e7e7e",
                    },
                    pointer: {
                        backgroundColor: zone === "overlay" ? "#fff" : "#ddd",
                    },
                }}
                style={{
                    borderRadius: 10,
                    mixBlendMode:
                        zone === "overlay" ? "difference" : "multiply",
                }}
            />
    )
}

