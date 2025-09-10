"use client"

import { Cursor, useCursorState } from "motion-plus/react"
export const DefaultCursor = () => {
    const { zone } = useCursorState()

    return (

            <Cursor
            
                magnetic
                className="cursor"
                style={cursor}
                
            >
                {zone === "blog" ? (
                    <p style={caption}>Access all logs</p>
                ) : null}
            </Cursor>
    )
}

const caption: React.CSSProperties = {
    color: "white",
    fontSize: 12,
    fontWeight: 600,
    textAlign: "center",
}
const cursor: React.CSSProperties = {
    backdropFilter: "blur(0px) saturate(109%)",
    WebkitBackdropFilter: "blur(0px) saturate(109%)",
    backgroundColor: "rgba(231, 231, 231, 0.1)",
    borderRadius: 12,
    border: "1px solid rgba(255, 255, 255, 0.125)",
}