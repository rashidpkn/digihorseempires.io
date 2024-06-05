
import { useWeb3Modal } from '@web3modal/wagmi/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAccount } from 'wagmi'

export default function Header():React.ReactElement {
  const { open } = useWeb3Modal()
  const {isConnected,address} = useAccount()
  

  return (
    <header className='bg-[#171717] sticky top-0 z-50'>
        <div className="container mx-auto px-[1%] py-4 flex gap-5 justify-between items-center text-white font-conthrax text-xs">
                <img src="/images/logo/logo.png" width={200} alt="" />
                <NavLink to={'/'}>ABOUT</NavLink>
                <NavLink to={'/'}>TEAM</NavLink>
                <NavLink to={'/'}>PRE-SALE</NavLink>
                <NavLink to={'/'}>ROADMAP</NavLink>
                <NavLink to={'/'}>WHITEPAPER</NavLink>
                <NavLink to={'/'}>HOW TO BUY</NavLink>
                <NavLink to={'/'}>AUDIT</NavLink>
                <NavLink to={'/'}>FAQ</NavLink>
                <NavLink to={'/'}>Contact</NavLink>

                <button className='connect-btn py-3 px-7' onClick={() => open()}>
                  {isConnected ? address?.substring(0,5) + '...' + address?.substring(address.length-5,address.length) :  'CONNECT'}
                  
                  </button>
        </div>
    </header>
  )
}
