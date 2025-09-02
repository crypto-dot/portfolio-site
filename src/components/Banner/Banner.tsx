"use client"

import { Ticker } from "motion-plus/react"
import { motion } from "motion/react"

function Photo({ src }: { src: string; }) {
    return (
        <motion.img
            className="photo"
            src={`${src}`}
            alt={"Photo of a cyclist in Amsterdam"}
        />
    )
}

export const Banner = () => {
    return (
        <> 
        <h1 className="text-2xl font-bold py-4 text-center"> SITE IS CURRENTLY UNDER CONSTRUCTION</h1>
            <Ticker
                items={[
                    <Photo src="images/cautionTape.png" key="1" />,
                ]}
                className="ticker"
            />
            <Stylesheet />
        </>
    )
}

/**
 * ==============   Styles   ================
 */
function Stylesheet() {
    return (
        <style>
            {`

        #sandbox {
          align-items: center;
        }

        p code {
          color: var(--text);
        }

        .photo {
           height: 100px;
        }
      `}
        </style>
    )
}
