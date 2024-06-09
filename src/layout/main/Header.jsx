
import { useWeb3Modal } from '@web3modal/wagmi/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAccount } from 'wagmi'
import PreSale from './PreSale'

export default function Header()  {
  const { open } = useWeb3Modal()
  const {isConnected,address} = useAccount()
  

  return (
    <header className='sticky top-0 z-50 '>
      <div className="bg-[#171717]">

        <div className="w-[90%] lg:w-[80%] mx-auto  py-4 flex  justify-between items-center text-white font-conthrax text-[8px] font-semibold ">
                <img src="/images/logo/logo.webp" width={150} height={39.59} alt="" />
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={'group-hover:text-white text-white/70' }>ABOUT</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={'group-hover:text-white text-white/70'}>TEAM</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={'group-hover:text-white text-white/70'}>ROADMAP</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={'group-hover:text-white text-white/70'}>WHITEPAPER</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={'group-hover:text-white text-white/70'}>HOW TO BUY</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={'group-hover:text-white text-white/70'}>AUDIT</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={'group-hover:text-white text-white/70'}>FAQ</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
              

                <button className=' relative group' onClick={() => open()}>
                  {/* <img src="/images/nav-connect.png" className='group-hover:hidden w-full h-full absolute object-cover' alt="" /> */}
                  <img src="/button/light-green-connect.png" className='group-hover:hidden w-full h-full absolute object-cover' alt="" />
                  
                  <img src="/button/green-connect.png" height={36} width={100} className='hidden group-hover:block w-full h-full absolute object-cover' alt="" />
                  <p className='py-3 px-7 relative z-10'>

                  {isConnected ? address?.substring(0,5) + '...' + address?.substring(address.length-5,address.length) :  'CONNECT'}
                  </p>

                  
                  </button>
        </div>
      </div>
      <PreSale />
    </header>
  )
}
