import React from 'react'
import Headers from './Headers'
import { Outlet } from 'react-router-dom'

export const Rootlayout = () => {
  return (
    <div className=''>
      <Headers />
      <Outlet />
    </div>
  )
}
