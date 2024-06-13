import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'
import Header from './Header'

export default function DashboardLayout() {

    const {isConnected,isConnecting} = useAccount()

const navigate = useNavigate()
    useEffect(() => {
      if(!isConnected){
            navigate('/')
      }

    }, [])

    
    if(!isConnected){
        return(
            <></>
        )
    }

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
