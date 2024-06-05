import React from 'react'

export default function Welcome():React.ReactElement {
  return (
    <section className='container mx-auto px-[1%] py-20 flex gap-20 text-white'>
      
      <img src="/images/home/logo.webp" width={200} height={200} className='flex-shrink-0 rounded-full' alt="" />

      <div className="space-y-3">
        <h2 className='font-conthrax text-[30px]'>WELCOME TO THE DIGITAL EQUESTRIAN REALM.</h2>
        <p className='font-vcr text-[20px]'>Step into the forefront of the digital gaming revolution with DigiHorse, where we’re redefining the landscape of profitability and entertainment. As digital gaming experiences unprecedented growth, we’re pioneering a new era where players can not only enjoy immersive gameplay but also profit from their passion for horse racing through blockchain technology.</p>
      </div>

</section>
  )
}
