"use client"
import { Progress } from "@/components/shadcn-ui/progress"
import { useEffect, useState } from "react"

export const AnimatedProgressBar = ({maxProgress, initialProgress}: {maxProgress: number, initialProgress: number}) => {
  const [progress, setProgress] = useState(initialProgress)

  useEffect(() => {
    const timer = setTimeout(() => {
        setProgress(maxProgress)
        console.log('Setting progress to:', maxProgress) // Log the target value instead
    }, 100)
    return () => clearTimeout(timer)
  },[]) // Add maxProgress to dependency array

  return <Progress value={progress}  />
}
