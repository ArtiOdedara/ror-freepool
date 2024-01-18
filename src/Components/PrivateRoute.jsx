import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { LoginContext } from './LoginProvider';

const PrivateRoute = () => {
  const {loginData, setLoginData} = useContext(LoginContext)

  return (
    <div>
      { loginData ? <Outlet /> : <Navigate to='/login'/> }
    </div>
  )
}

export default PrivateRoute