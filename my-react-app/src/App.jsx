import React from 'react'
import { Rootlayout } from './UI/Rootlayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './UI/Home'

export default function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Rootlayout />,
    children: [
      {
        index: true,
        element: <Home />

      }
    ]
  }])
  return (<RouterProvider router={router} />
  )
}
