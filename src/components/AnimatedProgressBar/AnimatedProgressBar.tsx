"use client"
import { Progress } from "@/components/shadcn-ui/progress"
import { useEffect, useState } from "react"

export const AnimatedProgressBar = ({maxProgress, initialProgress}: {maxProgress: number, initialProgress: number}) => {
  const [progress, setProgress] = useState(initialProgress)

  useEffect(() => {
    const timer = setTimeout(() => {
        setProgress(maxProgress)
    }, 100)
    return () => clearTimeout(timer)
  },[])

  return <Progress value={progress}  />
}
