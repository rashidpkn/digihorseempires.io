import { useWeb3Modal } from '@web3modal/wagmi/react'
import React from 'react'
import { useAccount } from 'wagmi'

export default function Hero():React.ReactElement {
    const { open } = useWeb3Modal()
    const {isConnected,address} = useAccount()
  return (
    <section className='home-hero h-screen bg-cover bg-center text-white relative'>
            <div className="container mx-auto px-[1%]  flex justify-between pt-32">
                        <div className="">
                            <p className='font-conthrax font-semibold text-xl'>STEP IN TO</p>
                            <h1 className='font-slant text-7xl 2xl:text-8xl'>DIGIHORSE EMPIRES</h1>
                            <p className='font-conthrax font-semibold text-xl'>RIDING THE WAVE OF THE WEB3 GAMING REVOLUTION</p>
                        </div>
                        <div className="max-w-md w-full home-hero-widget p-5 space-y-5">
                            <p className='text-center font-vcr'>Buy now before Prices increase!</p>
                                    
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="w-full home-hero-widget-stage1 p-5 space-y-2">
                                            <div className="flex justify-between">
                                                <p className='text-xs font-conthrax'>STAGE 1</p>
                                                <p className='text-sm font-vcr'><span></span> Live</p>
                                            </div>
                                            <p className='text-center font-vcr text-3xl'>$0.0125</p>
                                        </div>
                                        <div className="w-full home-hero-widget-stage2 p-5 space-y-2">
                                        <div className="flex justify-between">
                                                <p className='text-xs font-conthrax'>STAGE 2</p>
                                                <p className='text-sm font-vcr'><span></span> 66.67%</p>
                                            </div>
                                            <p className='text-center font-vcr text-3xl'>$0.0075</p>
                                        </div>
                                        <div className="w-full col-span-2 home-hero-widget-stage2 p-5 flex justify-between items-center">
                                                    <div className="">
                                                    <p className='text-xs font-conthrax'>LISTING PRICE</p>
                                                    <p className='text-center font-vcr text-3xl'>$0.0075</p>
                                                    </div>
                                                    <p className='text-sm font-vcr'>566.67%</p>
                                        </div>


                                    </div>
                                    <div className="space-y-2">

                                    <div className="flex justify-between items-center px-5">
                                            <p className='font-conthrax text-xs'>PRE-SALE STAGE 1</p>
                                            <p className='font-vcr flex items-center gap-1'>
                                              <img src="/images/home/logo.webp" width={26} height={26} alt="" />
                                               1 DIGI = $0.0075
                                               </p>
                                    </div>
                                    <div className="w-full h-3 bg-[#000000B3] rounded-full">
                                        <div className="home-hero-widget-progressbar w-[40%] h-full"></div>
                                    </div>

                                    <div className="flex justify-between px-5 font-vcr text-xl">
                                            <p className=''>$212,175.00</p>
                                            <p>$450,000</p>
                                    </div>
                                    </div>

                            <button className='home-hero-widget-connect-wallet w-full py-4' onClick={()=>open()}>
                            {isConnected ? address?.substring(0,5) + '...' + address?.substring(address.length-5,address.length) :  'CONNECT WALLET'}
                                </button>


                            <p className='text-center font-vcr'>Don't have an account? <span className='text-[#00FF4E]'>Register</span></p>

                        </div>
            </div>

            <div className="scrolling-strip home-hero-marquee text-lg font-bold py-2 w-full absolute bottom-32">
                
    <div className="scroll-animation">    
      <span className="strip-item">PRE-SALE LIVE</span>
      <span className="strip-item">|</span>
      <span className="strip-item">PRE-SALE LIVE</span>
      <span className="strip-item">|</span>
      <span className="strip-item">PRE-SALE LIVE</span>
      <span className="strip-item">|</span>
      <span className="strip-item">PRE-SALE LIVE</span>
      <span className="strip-item">|</span>
      <span className="strip-item">PRE-SALE LIVE</span>
      <span className="strip-item">|</span>
      <span className="strip-item">PRE-SALE LIVE</span>
    </div>
    <div className="scroll-animation">    
    <span className="strip-item">PRE-SALE LIVE</span>
      <span className="strip-item">|</span>
      <span className="strip-item">PRE-SALE LIVE</span>
      <span className="strip-item">|</span>
      <span className="strip-item">PRE-SALE LIVE</span>
      <span className="strip-item">|</span>
      <span className="strip-item">PRE-SALE LIVE</span>
      <span className="strip-item">|</span>
      <span className="strip-item">PRE-SALE LIVE</span>
      <span className="strip-item">|</span>
      <span className="strip-item">PRE-SALE LIVE</span>
    </div>
    <div className="scroll-animation">    
    <span className="strip-item">PRE-SALE LIVE</span>
      <span className="strip-item">|</span>
      <span className="strip-item">PRE-SALE LIVE</span>
      <span className="strip-item">|</span>
      <span className="strip-item">PRE-SALE LIVE</span>
      <span className="strip-item">|</span>
      <span className="strip-item">PRE-SALE LIVE</span>
      <span className="strip-item">|</span>
      <span className="strip-item">PRE-SALE LIVE</span>
      <span className="strip-item">|</span>
      <span className="strip-item">PRE-SALE LIVE</span>
    </div>
    
  </div>

        </section>
  )
}
