import { Button } from '@material-tailwind/react'
import React from 'react'

export default function Headers() {
  return (
    <div className='bg-orange-400 py-5 w-screen '>
      <ul className='flex flex-row justify-between px-[10%]'>
        <li>Home page</li>

        <li className='flex space-x-4 items-center'>
          <Button> Login</Button>

          <div>Profile</div>
        </li>
      </ul>


    </div>
  )
}
