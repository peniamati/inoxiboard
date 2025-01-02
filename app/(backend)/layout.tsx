import Navbar from '@/components/backend/Navbar';
import Sidebar from '@/components/backend/Sidebar';
import React from 'react'

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='flex'>
      {/*Sidebar*/}
      <Sidebar></Sidebar>
      
      <div className='w-full'>
        {/*Header*/}
        <Navbar />
        <main className='ml-60 p-8 bg-slate-950 text-slate-50 min-h-screen mt-16'>
            {children}
        </main>
        {/* Main*/}
      </div>
      {/*Main Body*/}
    </div>
  )
}

export default layout
