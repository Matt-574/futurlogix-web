import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globals.css' // Esta línea es importante

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)