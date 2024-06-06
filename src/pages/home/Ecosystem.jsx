import React, { useRef } from 'react'
import Particles from './Particles'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

const ecosystem = [{
  title: "Bank",
  description: "Manage your finances with ease and security through our integrated banking system, which offers seamless transactions and robust security measures to safeguard your assets."
}, {
  title: "Stables",
  description: "Build and manage your own stables, where you can breed, train, and care for your NFT horses. Customize your facilities, hire staff, and optimize your operations to maximize efficiency and profitability."
}, {
  title: "Racecourse",
  description: "Experience the thrill of the racetrack with our state-of-the-art racecourse facilities. From classic tracks to futuristic arenas, our diverse range of racecourses offers something for every type of racer, ensuring a thrilling and immersive gameplay experience."
}, {
  title: "Training Grounds",
  description: "Hone your skills and improve your horses' performance at our dedicated training grounds. From agility drills to speed training, our training facilities provide the perfect environment to elevate your gameplay and achieve success on the racetrack."
}]


export default function Ecosystem() {

  const container = useRef()
  let mm = gsap.matchMedia();

  var pos = [300, -400, 450, -200]
  useGSAP(() => {
    if (container.current) {
      mm.add("(min-width: 640px)", () => {
        gsap.utils.toArray('#ecosystem .ecoGlare').forEach((element, key) => {
          gsap.from(element, {
            x: pos[key],
            y: key % 2 == 0 ? -pos[key] : pos[key],
            opacity: 0,
            scale: .1 * (Math.random() * 10),
            scrollTrigger: {
              trigger: `.ecoGlare${key}`,
              start: `${pos[key] / 2} center`,
              end: "end top",
              scrub: 2
              // markers: true,
            },
          });
        });
      })
    }

  }, { scope: container })

  return (
    <div className='px-4 lg:mx-32  my-16 md:flex md:gap-10 relative' ref={container} id="ecosystem">
      {ecosystem.map((item, key) => {
        return <div className={`container_ecosystem container_ecosystem${key} bg-gradient-to-b from-[#4b5c5230] to-[#4b5c5200] w-full rounded-2xl flex justify-center relative mt-16  ${key % 2 == 0 ? 'delay-anim' : ''}`} key={key}>
          <div className={`hidden md:block ecoGlare ecoGlare${key} w-[100px] h-[100px] bg-[#9ae89d] blur-[50px] opacity-40 animate-pulse absolute -translate-x-16 translate-y-8`} />
          <div className='mx-8 my-16'>
            <p className='text-3xl text-gold mb-8 text-white'>{item.title}</p>
            <p className='text-[#d0e4c6] tab:text-xl text-sm'>{item.description}</p>
          </div>
        </div>
      })}
      <svg width="100%" height="132" viewBox="0 0 1440 132" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute -bottom-[60px] -z-10 hidden md:block '>
        <path d="M0 26L30 34.5C60 43 120 60 180 60C240 60 300 43 360 34.5C420 26 480 26 540 28.8C600 32 660 37 720 45.8C780 54 840 66 900 82.7C960 100 1020 122 1080 113.8C1140 105 1200 66 1260 43C1320 20 1380 15 1440 31.7" stroke="url(#paint0_linear_0_1)" id="animated_path_1" />
        <path opacity="0.9" d="M0 9L30 28.8C60 49 120 88 180 99.7C240 111 300 94 360 74.2C420 54 480 32 540 40.2C600 49 660 88 720 108.2C780 128 840 128 900 105.3C960 83 1020 37 1080 23.2C1140 9 1200 26 1260 26C1320 26 1380 9 1440 0.5" stroke="url(#paint1_linear_0_1)" id="animated_path_2" />
        <defs>
          <linearGradient id="paint0_linear_0_1" x1="0" y1="68.7043" x2="1440" y2="68.7043" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.155" stopColor="#9ae89d90" />
            <stop offset="0.88" stopColor="#9ae89d90" />
            <stop offset="1" stopColor="#53cc5e" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear_0_1" x1="0" y1="61.603" x2="1440" y2="61.603" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.155" stopColor="#53cc5e" />
            <stop offset="0.88" stopColor="#53cc5e" />
            <stop offset="1" stopColor="#53cc5e" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>



      <Particles className={`hidden md:block bg-blend-multiply absolute -bottom-24 left-[10%] bg-transparent w-[200px] h-[300px]`} width={200} height={300} />

      <Particles className={`hidden md:block bg-blend-multiply absolute -bottom-12 right-[15%] bg-transparent w-[200px] h-[300px]`} width={200} height={300} />


    </div>
  )
}


