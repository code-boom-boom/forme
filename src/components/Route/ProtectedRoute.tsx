import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth()
  let location = useLocation()

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute