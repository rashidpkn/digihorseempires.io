import React from 'react'
import Particles from '../Particles'

export default function Screen3() {
  return (
    <div className="py-10 relative">

    <section className="w-[90%] lg:w-[80%] mx-auto  space-y-20 flex flex-col justify-center lg:text-center">
    <div className="space-y-10">
    <h3 className="text-[42px] 2xl:text-[56px] font-slant">
    Creating <span className='text-[#18ff04]'> Value </span> for Players
    </h3>
    <p className="font-vcr text-lg ">
    While generating revenue is essential for the sustainability of our platform,
we are committed to creating value for our players and community members.
Revenue generated from various sources is reinvested into the platform to fund
ongoing development, improve user experience.
<br />
<br />We believe that by building a thriving ecosystem where players can engage,
compete, and prosper, we can create a sustainable business model that benefits
everyone involved. Together, we can shape the future of decentralized gaming
and redefine the way players interact with digital assets and virtual worlds.

        </p>
    
        </div>

    </section>
    {/* <img src="/images/home/whitepaper/bg3.webp" className="w-full  object-top object-cover" alt="" /> */}
    <Particles className={`hidden md:block bg-blend-multiply absolute -bottom-24 left-[10%] bg-transparent w-[200px] h-[300px]`} width={200} height={300} />

<Particles className={`hidden md:block bg-blend-multiply absolute -bottom-12 right-[15%] bg-transparent w-[200px] h-[300px]`} width={200} height={300} />
</div>
  )
}
