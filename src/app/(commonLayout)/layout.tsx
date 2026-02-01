import { Navbar } from '@/components/navbar1'
import React from 'react'

export default function CommonLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}
