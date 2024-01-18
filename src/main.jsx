import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'
import { LoginProvider } from './Components/LoginProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={import.meta.env.CLIENT_ID}>
      <React.StrictMode>
        <LoginProvider>
          <App />
        </LoginProvider>
      </React.StrictMode>
    </GoogleOAuthProvider>
  </BrowserRouter>
)
