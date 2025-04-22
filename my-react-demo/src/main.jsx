import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App0422製作購物表單/App0422-1.jsx'
//import './index.css'
//import './style.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
