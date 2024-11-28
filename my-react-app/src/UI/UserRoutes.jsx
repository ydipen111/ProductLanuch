import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const UserRoutes = () => {
  const { user } = useSelector((state) => state.userSlice);
  const location = useLocation();


  return user ? <Navigate to="/" state={{ from: location }} replace /> : <Outlet />
}
