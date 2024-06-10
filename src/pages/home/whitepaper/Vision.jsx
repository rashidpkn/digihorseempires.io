import React from 'react'

export default function Vision() {
  return (
    <div
    className="bg-no-repeat bg-cover relative z-10"
    style={{ backgroundImage: "url(/images/home/whitepaper/bg1.png)" }}
  >
    <section className="w-[90%] lg:w-[80%] mx-auto py-8 space-y-5 lg:text-center  flex flex-col justify-center items-center ">
      <div className="space-y-3" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
        <h3 className="text-[42px] 2xl:text-[56px] font-slant text-center">Our  <span className='text-[#18ff04]'> Vision </span></h3>
        <p className="font-vcr  max-w-3xl bg-[#53cc5e10] p-3 rounded-xl relative">
        <div className="absolute inset-0 m-auto h-[75%] w-[75%]  blur-3xl glow-build   bg-[#53cc5e44]" />
          We envision a world where players can indulge their passion for
          horse racing while harnessing the power of DeFi to unlock new
          opportunities and rewards. DigiHorse Empires aims to revolutionize
          the gaming industry by providing a platform that combines
          cutting-edge technology with timeless elegance, fostering a
          community of enthusiasts and innovators.
        </p>
      </div>

      <div className="space-y-3" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
        <h3 className="text-[42px] 2xl:text-[56px] font-slant text-center">Our <span className='text-[#18ff04]'>Mission </span></h3>
        <p className="font-vcr  max-w-3xl bg-[#53cc5e10] p-3 rounded-xl relative">
        <div className="absolute inset-0 m-auto h-[75%] w-[75%]  blur-3xl glow-build   bg-[#53cc5e44]" />
          Our mission is to create an immersive and rewarding gaming
          experience that empowers players to unleash their competitive
          spirit, explore new horizons, and achieve their goals. Through
          innovation, transparency, and inclusivity, we strive to set new
          standards for excellence in the digital gaming space, offering a
          platform where everyone can thrive and succeed.
        </p>
      </div>
    </section>
  </div>
  )
}
