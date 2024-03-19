import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthGoogleProvider } from './contexts/authGoogle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthGoogleProvider>
      <BrowserRouter>
     <App />
     </BrowserRouter>
      </AuthGoogleProvider>
 
    
     
  </React.StrictMode>,
)
