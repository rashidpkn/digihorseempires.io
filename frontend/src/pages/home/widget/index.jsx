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
    const [amount, setAmount] = useState(0)
    const [step, setStep] = useState(1)

    const [cryptoPayment, setCryptoPayment] = useState({})

    useEffect(() => {
      if(isConnected)  {
        setStep(2)
      }else{
setStep(1)
      }
    
    }, [isConnected])


    const payWithCrypto = async () =>{
      try {
        const {data} = await  api.post('/nowpayments',
        {
          price_amount:amount,
          price_currency:'usd',
          pay_currency:'eth',
          ipn_callback_url:'https://google.com',
          order_id:'321',
          order_description:'3521',
        })

        
        setCryptoPayment(data)
        console.log(data);

      } catch (error) {
        
      }
    }

    const options = {
      partner_id: '01HZRWA7RFXR3S5NBDW7VT4DY0',
      // origin: "https://widget.wert.io",
  address: "0xEd932DD39e02442D230cea9E8F05f85F2f5233FF",
  commodity: "USDT",
  network: "ethereum",
  commodity_amount: amount,
  // sc_address: "0x6af35a72b2490a44c0e88ae635b9b38516544db1",
  // sc_input_data: "0x3c168eab0000000000000000000000000e976df9bb3ac63f7802ca843c9d121ae2ef22ee0000000000000000000000000000000000000000000000000000000000000001",
  };
  
  const smartContractOptions= {
      address: '0xEd932DD39e02442D230cea9E8F05f85F2f5233FF',
      commodity: 'USDT',
      network: 'ethereum',
      commodity_amount: 1,
      sc_address: '0xEd932DD39e02442D230cea9E8F05f85F2f5233FF',
      sc_input_data: '0x3c168eab0000000000000000000000000e976df9bb3ac63f7802ca843c9d121ae2ef22ee0000000000000000000000000000000000000000000000000000000000000001',
      private_key: '0x27d8e6fb883920863b2a036eef858fcfa92eb73777fca013943317ab6bf0a44b',
  }

  const { open:openWertWidget,isWidgetOpen } = useWertWidget();
    
  const payWithCard = ()=>{
    openWertWidget({options})
    console.log(isWidgetOpen);
}



const changeAmount = (e) => {
  const newValue = e.target.value;
  if (/^\d*\.?\d*$/.test(newValue)) { // Regex to allow only numbers
    setAmount(+newValue);
  }
};

    
  return (
    <>
    <div className="max-w-[400px]  w-full relative p-5 bg-no-repeat bg-cover lg:-top-24 2xl:top-0" style={{backgroundImage:'url(/images/home/widget/layer.png)'}}>
                        
                         <div className="w-full text-center">
                        <p className='font-conthrax text-[#00FF4E] '  style={{textShadow:'0px 0px 30px 0px #00000033'}}>PRE-SALE LIVE</p>
                        <p className='text-xs mt-1'>Buy now before prices increase!</p>
                        </div>

                        {/* {step === 2 && <div className="w-full text-center">
                        <p className='font-conthrax text-[#00FF4E] '  style={{textShadow:'0px 0px 30px 0px #00000033'}}>Payment Method</p>
                        </div>}

                        {step === 3 && <div className="w-full text-center">
                        <p className='font-conthrax text-[#00FF4E] '  style={{textShadow:'0px 0px 30px 0px #00000033'}}>Buy Now</p>
                        <p className='text-xs mt-1'>You are one step away</p>
                        </div>} */}


                        <Price/>

                        <CurrenctPrice />

                       <ProgressBar/>

                        <div className="flex gap-1 flex-wrap font-vcr">
                          <div className="w-full flex justify-center">
                            <select name="" id="" className='outline-none h-10 w-44 bg-transparent mx-auto inset-0 bg-contain bg-no-repeat text-center' style={{backgroundImage:'url(/images/widget/button/box-layout.png)'}}>
                                  <option className='text-black' value="">Select Coin</option>
                                  <option className='text-black' value="">USDT</option>
                                  <option className='text-black' value="">BTC</option>
                                  <option className='text-black' value="">ETH</option>
                            </select>
                          </div>
                          <div className="flex justify-center items-center w-full gap-2 text-sm" >
                          <input value={!!amount ? amount : ''} onChange={changeAmount} className='outline-none h-7 w-44 bg-transparent mx-auto inset-0 bg-contain bg-no-repeat text-center' placeholder='Enter amount' style={{backgroundImage:'url(/images/widget/button/box-layout.png)'}} />
                          <p className='text-xl'>=</p>
                          <input  value={!!amount ? amount/0.0125+  ' $DIGI' : ''} className='outline-none h-7 w-44 bg-transparent mx-auto inset-0 bg-contain bg-no-repeat text-center' placeholder='Digi Value' style={{backgroundImage:'url(/images/widget/button/box-layout.png)'}} />      
                          </div>
                        </div>


                            {step === 1 && <button className=' w-full  h-8 relative group mt-3'  onClick={()=>open()}>
                                <img src="/images/widget/button/connect-wallet.png" className='absolute top-0 h-full mx-auto inset-x-0' alt="" />
                                </button>}

                                {step===2 && <>
              <div className="flex justify-center gap-2 my-2">
                <button className='' onClick={payWithCrypto}>
                  <img src="/images/widget/button/pay with crypto.png" className='h-8' alt="" />
                </button>
                <button className='' onClick={payWithCard}>
                  <img src="/images/widget/button/pay with card.png" className='h-8' alt="" />
                </button>
              </div>
                                </>}

                <div className="mt-3 flex justify-center items-center gap-3 font-vcr">
                        <Icon icon={'ri:shield-star-line'} className='text-3xl'/>
                            <p>Verified by Solid Proof</p>
                </div>

                    </div>

                    {Object.keys(cryptoPayment).length &&  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-[#00000099] outline-none focus:outline-none">
  <div className="relative text-black ">
    <div className="from-primary border-primary relative flex flex-col rounded-3xl border-[.1px] bg-gradient-to-br to-white to-30% shadow-lg outline-none bg-white">
      <div className="flex items-start justify-between rounded-t p-4">
        <h3 className="text-3xl font-semibold md:mx-8">Make your Payment</h3>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"><span className="material-symbols-rounded scale-110 transition-all hover:rotate-90" onClick={()=>setCryptoPayment(false)}>close</span></button>
      </div>
      <div className="mx-8 pb-8 text-black md:mx-0 md:px-16">
        <div className="items-center justify-between md:flex">
          <div>
            <div className="flex items-end">
              <div className="w-[60px] animate-pulse text-center">
                <span className="material-symbols-rounded">timer</span>
                <p>19:27</p>
              </div>
              <div className="md:ml-4">
                <p className="text-sm">Your Order no</p>
                <p className="text-sm">#{cryptoPayment.order_id}</p>
                <p className="text-sm">waiting for payment.</p>
              </div>
            </div>
            <div className="select-warning my-2 flex items-center rounded-lg font-semibold">
              <span className="material-symbols-rounded mx-4">warning</span>
              <p className="my-2 text-sm">Pay using</p>
              <img src="https://nowpayments.io/images/coins/eth.svg" className="mx-1 w-5" />
              <p className="my-2 text-sm">Ethereum chain only.</p>
            </div>
            <p className="text-sm">Amount</p>
            <p className="text-2xl font-bold">{cryptoPayment.pay_amount} <span className="rounded-lg border border-[#418556] bg-[#41855650] px-2 font-semibold">ETH</span></p>
            <p className="mt-2 text-sm">To this Address</p>
            <div className="mt-2 flex w-full items-center justify-between rounded-full bg-[#cccccc40] p-2"><input className="mr-2 w-full bg-transparent px-6 outline-none" value={cryptoPayment.pay_address}  /><span className="material-symbols-rounded text-primary cursor-pointer">content_copy</span></div>
          </div>
          <div className="mx-16">
            <div className="rounded-xl bg-white p-4">
              <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&&data=${cryptoPayment.pay_address}`} className="m-auto w-24 md:w-32" /></div>
            <p className="mt-2 text-center text-xs">Scan QR code</p>
          </div>
        </div>
        <div className="mb-5 mt-0 flex flex-col md:mt-4 md:flex-row md:gap-8">
          <div>
            <p className="text-sm">You Get</p>
            <p className="text-2xl">{amount/0.0125} $DIGI</p>
          </div>
          <div>
            <p className="">Purchase bonus</p>
            <p className="">0 $DIGI</p>
          </div>
        </div>
        <div className="justify-between md:flex">
          <p className="my-4 text-center text-sm text-orange-400">A processing fee may be charged by the payment gateway</p>
          <div className="bg-textColor from-primary to-secondary undefined flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r p-2 px-4 text-white">
            <button className="flex items-center text-center"><p className="undefined font-semibold">I Have paid</p></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>}
    </>
  )
}
