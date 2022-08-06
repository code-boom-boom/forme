import React, { createContext, useContext, useState } from 'react'
import { fakeAuthProvider } from '../_mockDB/auth'

interface AuthContextType {
  user: any
  login: (user: string, callback: VoidFunction) => void
  logout: (callback: VoidFunction) => void
}

const AuthContext = createContext<AuthContextType>(null!)

const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null)

  const login = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.login(() => {
      setUser(newUser)
      callback()
    })
  }

  const logout = (callback: VoidFunction) => {
    return fakeAuthProvider.logout(() => {
      setUser(null)
      callback()
    })
  }

  const value = { user, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { useAuth, AuthProvider }