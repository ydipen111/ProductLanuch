import React from 'react'
import { Rootlayout } from './UI/Rootlayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './UI/Home'
import { Login } from './features/Admin/Login'
import { Signup } from './features/Admin/Signup'

export default function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Rootlayout />,
    children: [
      {
        index: true,
        element: <Home />
      },

      {
        path: 'login-page',
        element: <Login />
      },

      {
        path: 'signup-page',
        element: <Signup />
      }
    ]
  }])
  return (<RouterProvider router={router} />
  )
}
