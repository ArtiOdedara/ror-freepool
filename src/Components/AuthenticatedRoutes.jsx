import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { LoginContext } from './LoginProvider';

const AuthenticatedRoutes = () => {
  const {loginData, setLoginData} = useContext(LoginContext)

  return (
    <div>
      { !loginData ? <Outlet /> : <Navigate to='/'/> }
    </div>
    )
}

export default AuthenticatedRoutes