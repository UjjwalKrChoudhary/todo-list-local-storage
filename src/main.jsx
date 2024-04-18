import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Auth0Provider
    domain="dev-oo161agpsg5dab2v.us.auth0.com"
    clientId="rnwxOmXBb7AmuIX9X6fkZvvt53YU13lm"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <App /> 
  </Auth0Provider>


)
