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
      <Sidebar/>
      
      <div className='lg:ml-60 ml-0 flex-grow bg-slate-100 min-h-screen'>
        {/*Header*/}
        <Navbar />
        <main className='p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 mt-16'>
            {children}
        </main>
        {/* Main*/}
      </div>
      {/*Main Body*/}
    </div>
  )
}

export default layout
