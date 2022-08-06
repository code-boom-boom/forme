import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import AppHeader from '../components/Layout/Header'

import '../styles/layout.css'

const DefaultLayout: React.FC = () => {

  let auth = useAuth()
  let location = useLocation()

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return (
    <div className="app w-screen h-screen bg-gray-100">
      <div className="app-header-container">
        <AppHeader />
      </div>
      <div className="app-body-container">
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout