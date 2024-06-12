import React from 'react'
import MetaMask from './MetaMask'
import Wert from './Wert'


const metaMask = [{
    title: <><span className='text-[1.5em]'> Step 1</span> <br /> Set Up Your Wallet</>,
    content: ["Giddy up, race enthusiasts! Start by setting up your digital wallet with MetaMask or Trust Wallet. Head over to MetaMask, download the extension, and add it to your browser. Follow the steps to create your wallet. Make sure to keep your private key secure – it’s as precious as the fastest racehorse in your stable!"]
  }, {
    title: <><span className='text-[1.5em]'> Step 2</span> <br /> Add Funds to Your Wallet</>,
    content: ["Got your MetaMask locked and loaded? Let's saddle up and get ready for the race! Send some Ethereum (ETH) or your preferred crypto from your crypto stash to your MetaMask wallet. Alternatively, you can purchase ETH, USDT, or BNB directly through MetaMask. These digital assets will fuel your journey to acquire your $DIGI tokens and get you on track to win big in Digihorse!"],
  }, {
    title: <><span className='text-[1.5em]'> Step 3</span> <br /> Snag Your Digihorse Tokens</>,
    content: ["Eager to get your hands on $DIGI Head over to our official website for an exclusive presale experience! $DIGI tokens are like prized racehorses, found only here. Take your pick from Ethereum, USDT, BNB, or many other popular cryptos – it's all about your preference. Grab those tokens and get ready to race ahead in Digihorse!"],
  }, {
    title: <><span className='text-[1.5em]'> Step 4</span> <br /> Claim Your $DIGI Tokens</>,
    content: ["The moment you've been waiting for is here! Once the presale ends, you can claim your $DIGI tokens instantly. Congratulations on joining the Digihorse community – where the excitement of the race never stops!"],
  },
  ]

  const wert = [{
    title: <><span className='text-[1.5em]'> Step 1 </span> <br /> Visit the Presale Page</>,
    content: ["Head over to our official presale page on the Digihorse website."]
  }, {
    title: <><span className='text-[1.5em]'> Step 2 </span> <br /> Select Payment by Card</>,
    content: ["Choose the option to pay by card. You'll be redirected to Wert.io, our trusted payment provider.",],
  }, {
    title: <><span className='text-[1.5em]'> Step 3 </span> <br /> Enter Your Purchase Details</>,
    content: ["Amount to Purchase: Enter the amount of $DIGI token you wish to buy.","Personal Information: Provide the necessary details such as your email address and wallet address where you want your Digi tokens to be sent."],
  }, {
    title: <><span className='text-[1.5em]'> Step 4 </span> <br /> Complete Payment</>,
    content: ["Card Information: Enter your card details securely on Wert.io.","Confirm Purchase: Review your purchase details and confirm the transaction."],
  },
  {
      title: <><span className='text-[1.5em]'> Step 5 </span> <br /> Claim Your $DIGI Tokens</>,
      content: ["Once your payment is processed, your $DIGI tokens will be sent to the provided wallet address upon the completion of our presale. You will receive a confirmation email with the transaction details."],
    },
    {
      title: <><span className='text-[1.5em]'> Step 6 </span> <br /> Join the Race!</>,
      content: ["With your $DIGI tokens in hand, you are now ready to join the exciting world of Digihorse Empires. Use your tokens to enjoy exclusive features, race your horses, and compete for rewards."],
    },
    {
      title: <><span className='text-[1.5em]'> Need H </span> <br />lp?</>,
      content: ["If you encounter any issues or have questions, visit our Help Center or join our community Telegram for assistance."],
    },
  ]

export default function HowToBuy() {
  return (
    <div className="bg-black text-[#d0e4c6] py-5">

    <main className=' '>
        <section className='container mx-auto px-[5%] py-10'>
                <h1 className='text-[42px] 2xl:text-[56px] font-slant text-center'>How To Buy</h1>
        </section>

        <section className='space-y-5 px-[5%]'>
        <h2 className='text-[2em] font-slant text-center'>1. How To Buy - Metamask/Web3 Wallet </h2>
            <div className="grid  gap-5 w-[60%] mx-auto">

        {metaMask.map((item, key) => {
            return <div className={`text-center container_ecosystem container_ecosystem${key} bg-gradient-to-b from-[#4b5c5230] to-[#4b5c5200] w-full rounded-2xl flex justify-center relative mt-16  ${key % 2 == 0 ? 'delay-anim' : ''}`} key={key}>
          <div className={`hidden md:block ecoGlare ecoGlare${key} w-[100px] h-[100px] bg-[#9ae89d] blur-[50px] opacity-40 animate-pulse absolute -translate-x-16 translate-y-8`} />
          <div className='mx-8 my-16'>
            <p className='text-3xl text-gold mb-8 text-white font-slant'>{item.title}</p>
            <div className="space-y-1">

            {item.content.map(e=><p className='text-[#d0e4c6] tab:text-xl text-sm font-vcr' key={e} >{e}</p>)}
            
            </div>
          </div>
        </div>
      })}
      </div>
        </section>


        <section className='space-y-5 px-[5%]'>
        <h2 className='text-[2em] font-slant text-center'>2. How to Buy $DIGI with a Card </h2>
        <p className='container mx-auto px-[5%] text-center font-vcr'>Welcome to the official guide on how to purchase $DIGI using a card during our presale event. This process is quick, secure, and powered by Wert.io. Follow these steps to join the race and invest in Digihorse Empires!</p>

            <div className="grid  gap-5 w-[60%] mx-auto">

        {wert.map((item, key) => {
            return <div className={`text-center container_ecosystem container_ecosystem${key} bg-gradient-to-b from-[#4b5c5230] to-[#4b5c5200] w-full rounded-2xl flex justify-center relative mt-16  ${key % 2 == 0 ? 'delay-anim' : ''}`} key={key}>
          <div className={`hidden md:block ecoGlare ecoGlare${key} w-[100px] h-[100px] bg-[#9ae89d] blur-[50px] opacity-40 animate-pulse absolute -translate-x-16 translate-y-8`} />
          <div className='mx-8 my-16'>
            <p className='text-3xl text-gold mb-8 text-white font-slant'>{item.title}</p>
            <div className="space-y-1">
            {item.content.map(e=><p className='text-[#d0e4c6] tab:text-xl text-sm font-vcr' key={e} >{e}</p>)}
            </div>
          </div>
        </div>
      })}
      </div>
        {/* <MetaMask/> */}
        </section>
{/* 
        <section className='space-y-5'>
            
        <h2 className='text-[2em] font-slant text-center'>1. How to Buy $DIGI with a Card </h2>
        <p className='container mx-auto px-[5%] text-center font-vcr'>Welcome to the official guide on how to purchase $DIGI using a card during our presale event. This process is quick, secure, and powered by Wert.io. Follow these steps to join the race and invest in Digihorse Empires!</p>
        <Wert/>
        </section> */}
        </main>
        </div>
  )
}
