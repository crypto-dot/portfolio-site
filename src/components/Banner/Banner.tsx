"use client"

import { Ticker } from "motion-plus/react"
import { motion } from "motion/react"
import Image from "next/image"
function Photo() {
    return (
        <motion.div className="photo">
            <Image className="scale-160"
                src={`/images/cautionTape.webp`}
                alt="caution tape"
                width={200}
                height={200}
            />
        </motion.div>
    )
}

export const Banner = () => {
    return (
        <> 
        <h1 className="text-2xl font-bold py-4 text-center"> SITE IS CURRENTLY UNDER CONSTRUCTION</h1>
            <Ticker
                items={[
                    <Photo key="1" />,
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
