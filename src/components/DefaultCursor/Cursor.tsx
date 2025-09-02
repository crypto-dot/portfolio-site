import { Cursor } from "motion-plus/react"

export const DefaultCursor = () => {
    return (
            <Cursor
                style={cursor}
                variants={{ text: { backgroundColor: "lab(76.6045% -40.9406 -29.6231 / 0.37)",
                    width: 8,} }}
            />
    )
}

/**
 * ==============   Styles   ================
 */

const cursor: React.CSSProperties = {
/* From https://css.glass */
/* From https://css.glass */
background: "rgba(255, 255, 255, 0.04)",
borderRadius: 16,
boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
backdropFilter: "blur(1.3px)",
WebkitBackdropFilter: "blur(1.3px)",
border: "1px solid rgba(255, 255, 255, 0.3)",
}