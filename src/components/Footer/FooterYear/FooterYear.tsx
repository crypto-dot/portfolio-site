// purely to avoid the year from being hardcoded in the footer and hydration errors
"use client"
import React from 'react'

export const FooterYear = () => {
    const year = new Date().getFullYear();

  return (
    <span>{year}</span>
  )
}
