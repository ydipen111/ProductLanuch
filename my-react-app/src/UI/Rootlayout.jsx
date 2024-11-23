import React from 'react'
import { Headers } from './Headers'
import { Outlet } from 'react-router-dom'

export const Rootlayout = () => {
  return (
    <div className='bg-blue-400 px-5 py-5'>
      <Headers />
      <Outlet />
    </div>
  )
}
