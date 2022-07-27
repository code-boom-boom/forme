import React from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from '../components/Layout/Header'

import '../styles/layout.css'

const DefaultLayout: React.FC = () => {
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