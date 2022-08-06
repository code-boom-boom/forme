import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Dashboard from './pages/Dashboard'
import { AuthProvider } from './contexts/AuthContext'
import HomePage from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app" element={<DefaultLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
