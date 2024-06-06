
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
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={''}>ABOUT</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={''}>TEAM</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={''}>PRE-SALE</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={''}>ROADMAP</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={''}>WHITEPAPER</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={''}>HOW TO BUY</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={''}>AUDIT</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={''}>FAQ</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={''}>Contact</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>

                <button className='connect-btn py-3 px-7' onClick={() => open()}>
                  {isConnected ? address?.substring(0,5) + '...' + address?.substring(address.length-5,address.length) :  'CONNECT'}
                  
                  </button>
        </div>
      </div>
      <PreSale />
    </header>
  )
}
