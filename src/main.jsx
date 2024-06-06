import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './routes/index.jsx'
import { Web3ModalProvider } from './wallet-connect/index.jsx'
import { useGSAP } from '@gsap/react'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'
gsap.registerPlugin(useGSAP, ScrollTrigger);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Web3ModalProvider>
      <Router/>
    </Web3ModalProvider>
  </React.StrictMode>,
)
