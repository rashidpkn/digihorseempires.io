
import { useWeb3Modal } from '@web3modal/wagmi/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAccount } from 'wagmi'
import PreSale from './PreSale'

export default function Header()  {
  const { open } = useWeb3Modal()
  const {isConnected,address} = useAccount()
  

  return (
    <header className=' sticky top-0 z-50 '>
      <div className="bg-[#171717]">

        <div className="container mx-auto px-[5%] 2xl:px-[1px]  py-4 flex gap-5 justify-between items-center text-white font-conthrax text-[9px]">
                <img src="/images/logo/logo.webp" width={200} height={39.59} alt="" />
                <NavLink to={'/'} className={'hidden lg:block'}>ABOUT</NavLink>
                <NavLink to={'/'} className={'hidden lg:block'}>TEAM</NavLink>
                <NavLink to={'/'} className={'hidden lg:block'}>PRE-SALE</NavLink>
                <NavLink to={'/'} className={'hidden lg:block'}>ROADMAP</NavLink>
                <NavLink to={'/'} className={'hidden lg:block'}>WHITEPAPER</NavLink>
                <NavLink to={'/'} className={'hidden lg:block'}>HOW TO BUY</NavLink>
                <NavLink to={'/'} className={'hidden lg:block'}>AUDIT</NavLink>
                <NavLink to={'/'} className={'hidden lg:block'}>FAQ</NavLink>
                <NavLink to={'/'} className={'hidden lg:block'}>Contact</NavLink>

                <button className='connect-btn py-3 px-7' onClick={() => open()}>
                  {isConnected ? address?.substring(0,5) + '...' + address?.substring(address.length-5,address.length) :  'CONNECT'}
                  
                  </button>
        </div>
      </div>
      <PreSale />
    </header>
  )
}
