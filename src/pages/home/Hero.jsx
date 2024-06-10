import { Icon } from '@iconify/react/dist/iconify.js'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import React from 'react'
import { useAccount } from 'wagmi'
import Widget from './widget'

export default function Hero()  {
    const { open } = useWeb3Modal()
    const {isConnected,address} = useAccount()
  return (
    <section className='home-hero min-h-screen bg-cover bg-[-200px] lg:bg-center text-white relative'>
                
            <div className="w-[90%] lg:w-[80%] mx-auto  flex flex-col lg:flex-row gap-24 lg:gap-0  justify-between pt-24">
                        <div className="text-center lg:text-left">
                            <p className='font-conthrax text-sm 2xl:text-xl'>WELCOME TO</p>
                            <h1 className='font-slant text-7xl 2xl:text-8xl'>DIGIHORSE EMPIRES</h1>
                            <p className='font-conthrax text-sm 2xl:text-xl'>RIDING THE WAVE OF THE WEB3 GAMING REVOLUTION</p>
                        </div>
                        {/* <div className="relative max-w-sm w-full shrink-0">

                        <div className="absolute w-3 h-[1px] nav-link top-3 mx-auto inset-x-0 z-10"></div>
                            <img src="/images/home/widget-box.svg" height={'100%'} className='absolute scale-110 object-cover w-full h-full ' alt="" />
                        <div className=" w-full home-hero-widget2 py-5 lg:p-8 space-y-5 relative">
                            <p className='text-center font-vcr text-sm'>Buy now before Prices increase!</p>
                                    
                                    <div className="grid grid-cols-2 gap-3">
                                        
                                        <div className="w-full col-span-full lg:col-span-1 home-hero-widget-stage1 p-3 space-y-1">
                                            <div className="flex justify-between items-center">
                                                <p className='text-[10px] font-conthrax'>STAGE 1</p>
                                                <p className='text-sm font-vcr flex items-center gap-1'><span className='bg-[#00FF4E] inline-block h-1 w-1 rounded-full pulse-widget'></span> Live</p>
                                            </div>
                                            <p className='text-center font-vcr text-xl'>$0.0125</p>
                                        </div>

                                        <div className="w-full col-span-full lg:col-span-1 home-hero-widget-stage2 p-3 space-y-1">
                                        <div className="flex justify-between items-center">
                                                <p className='text-[10px] font-conthrax'>STAGE 2</p>
                                                <p className='text-sm font-vcr flex items-center gap-1'><Icon icon={'tabler:triangle-filled'} className='trangle-widget h-[8px] w-[8px] text-[#00FF4E]' />  66.67%</p>
                                            </div>
                                            <p className='text-center font-vcr text-xl'>$0.0075</p>
                                        </div>
                                        
                                        <div className="w-full col-span-2 home-hero-widget-stage2 p-5 flex justify-between items-center">
                                                    <div className="">
                                                    <p className='text-[10px] font-conthrax'>LISTING PRICE</p>
                                                    <p className='text-center font-vcr text-xl'>$0.0075</p>
                                                    </div>
                                                    <p className='text-sm font-vcr flex items-center gap-2'>
                                                    <Icon icon={'tabler:triangle-filled'} className='trangle-widget h-[10px] w-[10px] text-[#00FF4E]' />
                                                        566.67%
                                                        </p>
                                        </div>


                                    </div>
                                    <div className="space-y-1">

                                    <div className="flex justify-between items-center px-2 text-[10px]">
                                            <p className='font-conthrax '>PRE-SALE STAGE 1</p>
                                            <p className='font-vcr flex items-center gap-1'>
                                              <img src="/images/home/logo.webp" width={26} height={26} alt="" />
                                               1 DIGI = $0.0075
                                               </p>
                                    </div>
                                    <div className="w-full h-3 bg-[#000000B3] rounded-full">
                                        <div className="home-hero-widget-progressbar w-[40%] h-full"></div>
                                    </div>

                                    <div className="flex justify-between  font-vcr px-2 text-[12px]">
                                            <p className=''>$212,175.00</p>
                                            <p className='flex items-center gap-2'>$450,000 <img className='w-[11px]' src="/images/icons/flag.png" alt="" /></p>
                                    </div>
                                    </div>

                            <button className=' w-full py-2 relative group '  onClick={()=>open()}>
                                <img src="/button/light-white-connect.png" className='group-hover:hidden absolute top-0 w-full h-full' alt="" />
                                <img src="/button/white-connect.png" className='hidden group-hover:block absolute top-0 w-full h-full' alt="" />
                                <p className='group-hover:text-black relative z-10 font-vcr'>

                            {isConnected ? address?.substring(0,5) + '...' + address?.substring(address.length-5,address.length) :  'CONNECT WALLET'}
                                </p>
                                </button>


                            <p className='text-center font-vcr text-sm'>Don't have an account? <span className='text-[#00FF4E]'>Register</span></p>

                        </div>
                        </div> */}


                    <Widget/>


            </div>

            

        </section>
  )
}
