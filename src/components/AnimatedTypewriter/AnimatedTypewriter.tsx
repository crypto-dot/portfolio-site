"use client"

import { delay, wrap } from "motion"
import { Typewriter } from "motion-plus/react"
import { useState } from "react"
import { container, cursor, monospace } from "./Styles/Styles"
import { script } from "@/lib/util/script"
export const AnimatedTypewriter = () => {
    const [paragraphIndex, setParagraphIndex] = useState(0)

    const {
        text,
        endDelay = 2,
        backspace = "word",
        backspaceFactor = 1,
    } = script[paragraphIndex]

    return (
        <div style={container}>
            $ <Typewriter
                as="p"
                speed="fast"
                cursorStyle={cursor}
                textStyle={monospace}
                backspace={backspace}
                backspaceFactor={backspaceFactor}
                onComplete={() => {
                    delay(() => {
                        setParagraphIndex(
                            wrap(0, script.length, paragraphIndex + 1)
                        )
                    }, endDelay)
                }}
            >
                {text}
            </Typewriter>
        </div>
    )
}
