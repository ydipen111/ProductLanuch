import React from 'react'
import { Rootlayout } from './UI/Rootlayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './UI/Home'
import LoginPage from './features/Admin/LoginPage'
import Signup from './features/Admin/Signup'
import { UserRoutes } from './UI/UserRoutes'


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
        element: <UserRoutes />,
        children: [


          {
            path: 'login-page',
            element: <LoginPage />
          },

          {
            path: 'signup-page',
            element: < Signup />
          },

        ]

      }
    ]
  }])
  return (<RouterProvider router={router} />
  )
}
