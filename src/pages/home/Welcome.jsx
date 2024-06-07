import React from 'react'

export default function Welcome()  {
  return (
    <section className='w-[75%] mx-auto py-20 flex flex-col lg:flex-row items-center text-center lg:text-left gap-14 text-white'>
      
      <img src="/images/home/logo.webp" width={150} height={150} className='flex-shrink-0 rounded-full' alt="" />

      <div className="">
        <h2 className='font-conthrax text-[12px] lg:text-[20px]'>WELCOME TO THE DIGITAL EQUESTRIAN REALM.</h2>
        <p className='font-vcr text-[12px] lg:text-[14px] mt-3'>Step into the forefront of the digital gaming revolution with DigiHorse, where we’re redefining the landscape of profitability and entertainment. As digital gaming experiences unprecedented growth, we’re pioneering a new era where players can not only enjoy immersive gameplay but also profit from their passion for horse racing through blockchain technology.</p>
      </div>

</section>
  )
}
