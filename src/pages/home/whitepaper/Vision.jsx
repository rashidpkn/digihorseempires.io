import React from 'react'

export default function Vision() {
  return (
    <div
    className="bg-no-repeat bg-cover"
    style={{ backgroundImage: "url(/images/home/whitepaper/bg1.png)" }}
  >
    <section className="w-[80%] mx-auto py-5 space-y-20 text-center min-h-screen flex flex-col justify-center items-center">
      <div className="space-y-10">
        <h3 className="text-[42px] 2xl:text-[56px] font-slant">Our Vision</h3>
        <p className="font-vcr text-lg max-w-4xl">
          We envision a world where players can indulge their passion for
          horse racing while harnessing the power of DeFi to unlock new
          opportunities and rewards. DigiHorse Empires aims to revolutionize
          the gaming industry by providing a platform that combines
          cutting-edge technology with timeless elegance, fostering a
          community of enthusiasts and innovators.
        </p>
      </div>

      <div className="space-y-10">
        <h3 className="text-[42px] 2xl:text-[56px] font-slant">Our Mission</h3>
        <p className="font-vcr text-lg max-w-4xl">
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
