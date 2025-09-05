"use client"

import { Cursor, useCursorState } from "motion-plus/react"
export const DefaultCursor = () => {
    const { zone } = useCursorState()

    return (

            <Cursor
                magnetic
                className="cursor"
                variants={{
                    default: {
                        color: "white",
                        background: "white",
                        backgroundColor:
                            zone === "overlay" ? "#C5C6C6" : "#C5C6C6",
                    },
                    pointer: {
                        color: "white",
                        background: "white",
                        backgroundColor: zone === "overlay" ? "#C5C6C6" : "#C5C6C6",
                    },
                }}
                style={{
                    color: "white",
                    borderRadius: 10,
                    mixBlendMode:
                        zone === "overlay" ? "difference" : "multiply",
                }}
            />
    )
}

