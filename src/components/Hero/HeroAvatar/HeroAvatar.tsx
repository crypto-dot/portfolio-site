import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/shadcn-ui/avatar'
import { Cpu, BugOff } from 'lucide-react'

export const HeroAvatar = () => {
  return (

    <section className="relative hidden md:block">
    <div className="w-80 h-80 mx-auto relative">
      <Avatar className="w-80 h-80">
        <AvatarImage alt="Carlos Arbizu" />
        <AvatarFallback className="text-6xl ">CA</AvatarFallback>
      </Avatar>
      
      {/* Floating Tech Icons */}
      <div className="absolute -top-4 -left-4 rounded-lg p-2 animate-bounce bg-slate-800" style={{ animationDelay: '1s' }}>
        <Cpu className="w-6 h-6 text-primary bg-slate-800" />
      </div>
      <div className="absolute -bottom-4 -right-4 bg-slate-800 rounded-lg p-2 animate-bounce" style={{ animationDelay: '2s' }}>
        <BugOff className="w-6 h-6 text-primary bg-slate-800" />
      </div>
    </div>
  </section>
  )
}