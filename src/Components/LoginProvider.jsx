import React, { createContext, useState } from 'react'

export const LoginContext = createContext()

export function LoginProvider({ children }) {
  const loginCredential = localStorage.getItem('credentials')
  const [loginData, setLoginData] = useState(loginCredential || '')

  return (
    <LoginContext.Provider value={{loginData, setLoginData}}>
      {children}
    </LoginContext.Provider>
  )
}