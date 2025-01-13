import Nav from '@/components/Nav'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
     <div className='grid-background'></div>
     <main className='min-h-screen container mx-auto  bg-slate-600'>
      <Nav/>
      <Outlet />
     </main>
    </div>
  )
}

export default AppLayout
