import { useWeb3Modal } from '@web3modal/wagmi/react'
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import Price from './Price'
import CurrenctPrice from './CurrenctPrice'
import ProgressBar from './ProgressBar'
import { Icon } from '@iconify/react/dist/iconify.js'
import { api } from '../../../utility/api'
import { useWertWidget } from '@wert-io/module-react-component';

export default function Widget() {
    const { open } = useWeb3Modal()
    const {isConnected,address} = useAccount()

    const [step, setStep] = useState(1)

    useEffect(() => {
      if(isConnected)  {
        setStep(2)
      }else{
setStep(1)
      }
    
    }, [isConnected])

    const [price_amount, setPrice_amount] = useState(0)

    const payWithCrypto = async () =>{
      try {
        const {data} = await  api.post('/nowpayments/invoice',
        {
          price_amount,
          price_currency:'usd',
          order_id:'321',
          order_description:'3521',
          success_url:'https://google.com',
          cancel_url:'https://google.com'
        })

        window.location.href = data
      } catch (error) {
        
      }
    }

    const options = {
      partner_id: '01HZRWA7RFXR3S5NBDW7VT4DY0',
      origin: "https://widget.wert.io",
  address: "0x0E976df9bb3ac63F7802ca843C9d121aE2Ef22ee",
  commodity: "ETH",
  network: "ethereum",
  commodity_amount: 0.1,
  sc_address: "0x6af35a72b2490a44c0e88ae635b9b38516544db1",
  sc_input_data: "0x3c168eab0000000000000000000000000e976df9bb3ac63f7802ca843c9d121ae2ef22ee0000000000000000000000000000000000000000000000000000000000000001",
  };
  
  const smartContractOptions= {
      address: '0x0E976df9bb3ac63F7802ca843C9d121aE2Ef22ee',
      commodity: 'ETH',
      network: 'ethereum',
      commodity_amount: 0.1,
      sc_address: '0x6af35a72b2490a44c0e88ae635b9b38516544db1',
      sc_input_data: '0x3c168eab0000000000000000000000000e976df9bb3ac63f7802ca843c9d121ae2ef22ee0000000000000000000000000000000000000000000000000000000000000001',
      private_key: '0x57466afb5491ee372b3b30d82ef7e7a0583c9e36aef0f02435bd164fe172b1d3',
  }

  const { open:openWertWidget,isWidgetOpen } = useWertWidget();
    
  const payWithCard = ()=>{
    openWertWidget({options})
    console.log(isWidgetOpen);
}
    
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

                            {step === 1 && <button className=' w-full py-2 relative group '  onClick={()=>open()}>
                                <img src="/button/light-white-connect.png" className='group-hover:hidden absolute top-0 w-full h-full' alt="" />
                                <img src="/button/white-connect.png" className='hidden group-hover:block absolute top-0 w-full h-full' alt="" />
                                <p className='group-hover:text-black relative z-10 font-vcr'>

                            {isConnected ? address?.substring(0,5) + '...' + address?.substring(address.length-5,address.length) :  'Buy Now'}
                                </p>
                                </button>}

                                {step===2 && <>
              <div className="flex justify-center">

                                <input type="number" className='  w-[80%]  border-b h-8 bg-transparent text-center outline-none ' placeholder='USD' value={price_amount} onChange={e=>setPrice_amount(+e.target.value)} />

              </div>

              <div className="flex justify-center gap-5 my-5">
                <button className='border px-5 py-2 rounded-full home-hero-widget-stage1' onClick={payWithCard}>Pay with Card</button>
                <button className='border px-5 py-2 rounded-full home-hero-widget-stage1' onClick={payWithCrypto}>Pay with Crypto</button>
              </div>
                                </>}

                <div className="mt-5 flex justify-center items-center gap-3">
                        <Icon icon={'ri:shield-star-line'} className='text-3xl'/>
                            <p>Verified by Solid Proof</p>
                </div>

                    </div>
  )
}
