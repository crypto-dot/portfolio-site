import React from 'react'

import { Globe } from '@/components/Globe/Index'

export const HeroAvatar = () => {
  return (

    <section className="relative hidden md:block">
    <div className="w-[500px] h-[500px] mx-auto overflow-visible">
      <div className="w-full h-full">
        <Globe className="w-full h-full" />
      </div>
    </div>
  </section>
  )
}