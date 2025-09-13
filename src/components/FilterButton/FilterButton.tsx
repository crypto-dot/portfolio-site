import React from 'react'
import { Button } from '../shadcn-ui/button'

export const FilterButton = ({ tag, selectedTag, setSelectedTag } : { tag: string, selectedTag: string | null, setSelectedTag: (tag: string | null) => void }) => {
  
    return (
    <Button
    key={tag}
    variant={selectedTag === tag || (selectedTag === null && tag.includes("All")) ? "default" : "outline"}
    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
    className={` text-sm ${
      selectedTag === tag || (selectedTag === null && tag.includes("All"))
        ? "bg-primary text-primary-foreground" 
        : "text-secondary"
    }`}
  >
    {tag}
  </Button>
  )
}