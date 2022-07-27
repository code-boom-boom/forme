import React, { createContext, useContext, useState } from 'react'

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

  }

  const logout = () => {

  }

  const value = { user, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}