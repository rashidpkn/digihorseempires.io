import { useWeb3Modal } from '@web3modal/wagmi/react'
import React from 'react'
import { useAccount } from 'wagmi'

export default function Refer()  {
  const { open } = useWeb3Modal()
    const {isConnected,address} = useAccount()

  return (
    <section className="text-white relative">
      <img src="/images/home/hero-2.webp" className='lg:h-full absolute right-0 w-1/2 my-auto  lg:min-w-[30%] object-top object-cover ' alt="" />
        <div className="container mx-auto px-[1%] py-20 space-y-20 relative z-10">
          <div className="flex items-start flex-wrap gap-10 2xl:gap-20">
          <div className="font-slant text-4xl lg:text-[54px]  max-w-sm 2xl:max-w-lg">
              <h3>
                REFER FRIENDS{" "}
                <span className="text-7xl lg:text-[80px] text-[#00FF4E]"> EARN DIGI </span>
              </h3>
            </div>
            <div className="max-w-lg 2xl:max-w-lg">
              <p className="font-vcr text-[15px] lg:text-[20px]">
                Share your referral code with friends and family. When someone
                uses your code,{" "}
                <span className="text-[#00FF4E]">
                  {" "}
                  they get 10% extra $DIGI coins!{" "}
                </span>{" "}
                Plus, you enter our monthly leaderboard for a chance to win
                fantastic prizes!
              </p>
            </div>
            
          </div>

          <div className="flex flex-wrap gap-10 2xl:gap-20 text-center lg:text-left">
          
            <div className="max-w-sm 2xl:max-w-lg w-full space-y-5">
              <p className="font-conthrax text-[30px] flex items-center justify-center lg:justify-start gap-3">
                <img src="/images/home/spark.webp" alt=""  className='w-[50px] h-[27px]'/>
                 STEP 1</p>
              <p className="font-vcr text-[18px]">Securely connect your wallet.</p>
              
              <button className="font-conthrax home-hero-widget-connect-walle py-4 w-full relative" onClick={()=>open()}>
              <img src="/images/home/connect.png" className='absolute top-0 w-full h-full' alt="" />
              {isConnected ? address?.substring(0,5) + '...' + address?.substring(address.length-5,address.length) :  'CONNECT WALLET'}
              </button>
              
            </div>
            <div className="max-w-sm 2xl:max-w-lg w-full space-y-5">
              <p className="font-conthrax text-[30px] flex items-center justify-center lg:justify-start gap-3">
                <img src="/images/home/spark.webp" alt=""  className='w-[50px] h-[27px]'/>
                 Step 2</p>
              <p className="font-vcr text-[18px]">Share code with friends and family.</p>
              <div className="flex gap-5 items-center justify-center lg:justify-start">
                <p className="font-vcr text-[38px]">* * * *</p>
                <button className="font-conthrax home-hero-widget-connect-wallet py-4 px-8" onClick={()=>{
                  
                }}>SHARE</button>
              </div>
            </div>
          </div>


        <div className="grid  lg:grid-cols-6 gap-6 2xl:gap-10">
          <div className="p-5 flex flex-col justify-center items-center gap-1 home-red-box">
            <img src="/images/home/red-logo.webp" width={80} height={80} className="rounded-full" alt="" />
            <p className="font-conthrax text-[12px] font-semibold">1ST PLACE</p>
            <p className="font-vcr text-[36px]">$500.00</p>
            <p className="flex gap-1 items-center"><span className="inline-block h-[5px] w-[5px] rounded-full bg-white"></span> USDC</p>
          </div>
          <div className="p-5 flex flex-col justify-center items-center gap-1 home-blue-box">
            <img src="/images/home/blue-logo.webp" width={80} height={80} className="rounded-full" alt="" />
            <p className="font-conthrax text-[12px] font-semibold">2ST PLACE</p>
            <p className="font-vcr text-[36px]">$250.00</p>
            <p className="flex gap-1 items-center"><span className="inline-block h-[5px] w-[5px] rounded-full bg-white"></span> USDC</p>
          </div>
          <div className="p-5 flex flex-col justify-center items-center gap-1 home-gold-box">
            <img src="/images/home/yellow-logo.webp" width={80} height={80} className="rounded-full" alt="" />
            <p className="font-conthrax text-[12px] font-semibold">3RD PLACE</p>
            <p className="font-vcr text-[36px]">$100.00</p>
            <p className="flex gap-1 items-center"><span className="inline-block h-[5px] w-[5px] rounded-full bg-white"></span> USDC</p>
          </div>
          <div className="p-5 flex flex-col justify-center items-center gap-1 home-green-box col-span-3"></div>
        </div>


              <div className="flex flex-col lg:flex-row gap-10 justify-between items-center text-center lg:text-right">
                <p className='font-cothrax '>STAY CONNECTED</p>
                <p className='font-vcr text-[20px] max-w-3xl'>The more your code is used, the closer you get to winning! Stay tuned for monthly winner announcements on our socials.</p>
                <div className="flex gap-5 items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
              </div>


        </div>
      </section>
  )
}
