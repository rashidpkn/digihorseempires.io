
import { useWeb3Modal } from '@web3modal/wagmi/react'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'
import PreSale from './PreSale'

export default function Header()  {
  const { open } = useWeb3Modal()
  const {isConnected,address} = useAccount()
  const navigate = useNavigate()
  

  return (
    <header className='sticky top-0 z-50 '>
      <div className="bg-[#171717]">

        <div className="w-[90%] lg:w-[80%] mx-auto  py-4 flex  justify-between items-center text-white font-conthrax text-[8px] font-semibold ">
                <img src="/images/logo/logo.webp" width={150} height={39.59} alt="" />
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/'} className={'group-hover:text-white text-white/70' }>HOME</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <a href='/#path_team' className={'group-hover:text-white text-white/70'}>TEAM</a>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <a href={'/#path_roadmap'} className={'group-hover:text-white text-white/70'}>ROADMAP</a>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <a href='https://whitepaper.digihorseempires.io' className={'group-hover:text-white text-white/70'}>WHITEPAPER</a>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/how-to-buy'} className={'group-hover:text-white text-white/70'}>HOW TO BUY</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                  <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <NavLink to={'/how-to-claim'} className={'group-hover:text-white text-white/70'}>HOW TO CLAIM</NavLink>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>

                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <a href='https://github.com/solidproof/projects/blob/main/2024/DigiHorse%20Empires/SmartContract_Audit_Solidproof_DigiHorseEmpires.pdf' className={'group-hover:text-white text-white/70'}>AUDIT</a>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
                <div className="hidden lg:flex gap-1 flex-col items-center group">
                   <a href='/#path_faq' className={'group-hover:text-white text-white/70'}>FAQ</a>
                   <div className="w-2 h-[1px] bg-[#00FF4E] nav-link rounded-full hidden group-hover:block"></div>
                   <div className="w-2 h-[1px] block group-hover:hidden"></div>
                  </div>
              <div className="flex items-center gap-3">


                <button className=' relative group' onClick={() => {
                  if(!isConnected){open()}else{navigate('/dashboard/user')}
                }
                  }>
                  
                  <img src="/button/light-green-connect.png" className='group-hover:hidden w-full h-full absolute object-cover' alt="" />
                  
                  <img src="/button/green-connect.png" height={36} width={100} className='hidden group-hover:block w-full h-full absolute object-cover' alt="" />
                  <p className='py-3 px-7 relative z-10'>

                  {isConnected ? 
                  // address?.substring(0,5) + '...' + address?.substring(address.length-5,address.length) 
                  "LAUNCH APP"
                  :  'CONNECT'}
                  </p>                  
                  </button>

                  {isConnected && <button className=' relative group' onClick={() => {open()}}>
                  <img src="/button/light-green-connect.png" className='group-hover:hidden w-full h-full absolute object-cover' alt="" />
                  
                  <img src="/button/green-connect.png" height={36} width={100} className='hidden group-hover:block w-full h-full absolute object-cover' alt="" />
                  <p className='py-3 px-7 relative z-10'>{address?.substring(0,5) + '...' + address?.substring(address.length-5,address.length) }</p>
                  </button>}
              </div>
        </div>
      </div>
      <PreSale />
    </header>
  )
}
