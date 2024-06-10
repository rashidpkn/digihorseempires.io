import React from 'react'
import Particles from './Particles'
export default function Welcome()  {
  return (
    <div className=" relative">

    <section className='w-[75%] mx-auto my-20 flex flex-col lg:flex-row items-center text-center lg:text-left gap-14 text-white relative '>
      
      <img data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300"
       src="/images/home/logo.webp" width={150} height={150} className='flex-shrink-0 rounded-full' alt="" />

      <div className=""
      data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300"
      >
        <h2 className='font-conthrax text-[12px] lg:text-[20px]'>WELCOME TO THE DIGITAL EQUESTRIAN REALM.</h2>
        <p className='font-vcr text-[12px] lg:text-[14px] mt-3'>Step into the forefront of the digital gaming revolution with DigiHorse, where we’re redefining the landscape of profitability and entertainment. As digital gaming experiences unprecedented growth, we’re pioneering a new era where players can not only enjoy immersive gameplay but also profit from their passion for horse racing through blockchain technology.</p>
      </div>



</section>
      <Particles className={`hidden md:block bg-blend-multiply absolute -bottom-12 left-[0%] bg-transparent w-[200px] h-[300px] z-10`} width={200} height={300} />
          <Particles className={`hidden md:block bg-blend-multiply absolute -bottom-12 right-[0%] bg-transparent w-[200px] h-[300px] z-10`} width={200} height={300} />
    </div>
  )
}
