import Link from 'next/link'
import React from 'react'
import { Banner } from '@/components/Banner/Banner'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <Banner />  
        <h1 className="text-2xl font-bold">404 - This page is currently under construction</h1>
        <Link href="/" className="text-blue-500">Go back to the home page</Link>
    </div>
  )
}

export default NotFound