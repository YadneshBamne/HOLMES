import Nav from '@/components/Nav'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='bg-[#FFE5CF]'>
     <div className='grid-background'></div>
     <main className='min-h-screen container mx-auto '>
      <Nav/>
      <Outlet />
     </main>
    </div>
  )
}

export default AppLayout
