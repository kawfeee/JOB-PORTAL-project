import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'

const AppLayout = () => {
  return (
    <div>
        <div className='grid-background'></div>
        
        <main className='min-h-screen container mx-auto'>
          <Header/>
          <Outlet/>
        </main>
        <div className='p-10 text-center bg-gray-800 mt-50'>
          Made with ❤️ by kaif
        </div>
    </div>
  )
}

export default AppLayout