import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './routes/index.tsx'
import { Web3ModalProvider } from './wallet-connect/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Web3ModalProvider>
      <Router/>
    </Web3ModalProvider>
  </React.StrictMode>,
)
