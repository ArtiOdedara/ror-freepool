import { GoogleLogin } from '@react-oauth/google';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './LoginProvider';

const Login = () => {
  const navigate = useNavigate()
  const {loginData, setLoginData} = useContext(LoginContext)

  const responseMessage = (response) => {
    localStorage.setItem('credentials', response.credential)
    setLoginData(response.credential)
    navigate('/')
  }
  const errorMessage = (error) => {
    console.log(error);
  }

  return (
    <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
  )
}

export default Login