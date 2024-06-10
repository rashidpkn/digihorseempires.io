import { useWeb3Modal } from '@web3modal/wagmi/react'
import React, { useState } from 'react'
import { useAccount } from 'wagmi'
import Price from './Price'
import CurrenctPrice from './CurrenctPrice'
import ProgressBar from './ProgressBar'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function Widget() {
    const { open } = useWeb3Modal()
    const {isConnected,address} = useAccount()

    const [step, setStep] = useState(1)
    
  return (
    <div className="max-w-md   w-full relative p-5 bg-no-repeat bg-cover" style={{backgroundImage:'url(/images/home/widget/layer.png)'}}>
                        
                        {step === 1 && <div className="w-full text-center">
                        <p className='font-conthrax text-[#00FF4E] '  style={{textShadow:'0px 0px 30px 0px #00000033'}}>PRE-SALE LIVE</p>
                        <p className='text-xs mt-1'>Buy now before prices increase!</p>
                        </div>}

                        {step === 2 && <div className="w-full text-center">
                        <p className='font-conthrax text-[#00FF4E] '  style={{textShadow:'0px 0px 30px 0px #00000033'}}>Payment Method</p>
                        </div>}

                        {step === 3 && <div className="w-full text-center">
                        <p className='font-conthrax text-[#00FF4E] '  style={{textShadow:'0px 0px 30px 0px #00000033'}}>Buy Now</p>
                        <p className='text-xs mt-1'>You are one step away</p>
                        </div>}


                        <Price/>

                        <CurrenctPrice />

                       <ProgressBar/>

                            <button className=' w-full py-2 relative group '  onClick={()=>open()}>
                                <img src="/button/light-white-connect.png" className='group-hover:hidden absolute top-0 w-full h-full' alt="" />
                                <img src="/button/white-connect.png" className='hidden group-hover:block absolute top-0 w-full h-full' alt="" />
                                <p className='group-hover:text-black relative z-10 font-vcr'>

                            {isConnected ? address?.substring(0,5) + '...' + address?.substring(address.length-5,address.length) :  'Buy Now'}
                                </p>
                                </button>

                <div className="mt-5 flex justify-center items-center gap-3">
                        <Icon icon={'ri:shield-star-line'} className='text-3xl'/>
                            <p>Verified by Solid Proof</p>
                </div>

                    </div>
  )
}
