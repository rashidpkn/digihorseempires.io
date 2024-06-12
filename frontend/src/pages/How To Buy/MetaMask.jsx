import { useRef,  } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Particles from './Particles'


// gsap.to(window, { duration: 2, scrollTo: "#someID" });


const yourPath = [{
  title: "Step 1: Set Up Your Wallet",
  content: ["Giddy up, race enthusiasts! Start by setting up your digital wallet with MetaMask or Trust Wallet. Head over to MetaMask, download the extension, and add it to your browser. Follow the steps to create your wallet. Make sure to keep your private key secure – it’s as precious as the fastest racehorse in your stable!"]
}, {
  title: "Step 2: Add Funds to Your Wallet",
  content: ["Got your MetaMask locked and loaded? Let's saddle up and get ready for the race! Send some Ethereum (ETH) or your preferred crypto from your crypto stash to your MetaMask wallet. Alternatively, you can purchase ETH, USDT, or BNB directly through MetaMask. These digital assets will fuel your journey to acquire your $DIGI tokens and get you on track to win big in Digihorse!"],
}, {
  title: "Step 3: Snag Your Digihorse Tokens",
  content: ["Eager to get your hands on $DIGI Head over to our official website for an exclusive presale experience! $DIGI tokens are like prized racehorses, found only here. Take your pick from Ethereum, USDT, BNB, or many other popular cryptos – it's all about your preference. Grab those tokens and get ready to race ahead in Digihorse!"],
}, {
  title: "Step 4: Claim Your $DIGI Tokens",
  content: ["The moment you've been waiting for is here! Once the presale ends, you can claim your $DIGI tokens instantly. Congratulations on joining the Digihorse community – where the excitement of the race never stops!"],
},
]



function MetaMask() {


  const container = useRef()
  const q = gsap.utils.selector(container);
  let mm = gsap.matchMedia();


  useGSAP(() => {
    if (container.current) {
      gsap.utils.toArray('#path_roadmap .path_container').forEach((element, key) => {
        mm.add("(min-width: 640px)", () => {
          gsap.to(element, {
            x: key % 2 == 0 ? -100 : -50,
            opacity: 1,
            // rotate: '0deg',
            scrollTrigger: {
              trigger: q(".foot_anim" + key),
              start: "top bottom",
              // end: "top 100px",
              scrub: 2,
            }
            // });
          });
        })


        gsap.utils.toArray('#path_roadmap .foot_anim').forEach((element, key) => {
          gsap.fromTo(element, { opacity: 0 }, {
            // x: 400,
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: q(".foot_anim" + key),
              start: "top center",
              // toggleActions: "restart restart resume restart",
              end: "top 100px",
              scrub: 2,
              // markers: true,
            }
          });
        })


        gsap.utils.toArray('#path_roadmap .road_path_anim').forEach((element, key) => {
          gsap.to(element, {
            height: 290,
            scrollTrigger: {
              trigger: q(".road_path_anim" + key),
              start: "top 60%",
              end: "top top",
              scrub: .5,
            }
          });
        })
      });

      // }, [])
    }
  }, { scope: container })



  return (
    <div id="path_roadmap"  style={{backgroundImage:'url(/images/home/whitepaper/bg6.png)'}} className='bg-no-repeat bg-right-top '>
      <div className='bg-black/50'>

    
    <div className='flex flex-col justify-center items-center relative mx-8 pt-5'  ref={container}>
      {yourPath.map((card, key) => {
        return <div className="flex" key={"paths_" + key}>
          <div
            className={`hidden md:block md:w-[500px] ${key === yourPath.length - 1 && 'md:-mt-[20px]'}`}
            id=""
          >
            <img className={`m-auto foot_anim ${'foot_anim' + key} opacity-0 md:scale-[.7] w-[100px] h-[100px] ${key % 2 == 0 ? '-rotate-[225deg] -translate-x-3 -translate-y-2 ' : 'rotate-[225deg] -translate-x-4 '}`} src="https://staging.digihorseempires.io/images/landing/footPrint.png" />
            {/* <img className={`m-auto foot_anim ${'foot_anim' + key} opacity-0 md:scale-[.7] w-[100px] ${key % 2 == 0 ? ' translate-x-0 ' : ' translate-x-0'}`} src="./fire.gif" /> */}

            {/* <video controls={false} autoPlay={true} loop={true} muted={true} className={`hidden md:block bg-blend-multiply absolute left-[10%] bg-transparent w-full md:w-[400px] ${key % 2 == 0 ? '-rotate-[160deg] translate-x-24 ' : 'rotate-[225deg] translate-x-0'}`} >
              <source src="fire_alpha.webm" type="video/webm" />
            </video> */}

            <div className={`hidden md:block bg-blend-multiply absolute  bg-transparent w-[200px] ${key % 2 == 0 ? '-rotate-[200deg] translate-x-24 ' : 'rotate-[225deg] translate-x-0'}`} >
              <Particles
                className={`-bottom-12 -left-20 absolute bg-transparent w-[200px] h-[300px]`}
                width={200} height={300} />
            </div>


            <div className='h-[290px]'>
              <div className={`h-[0px] overflow-clip road_path_anim ${'road_path_anim' + key}`}>
                
                <svg
                  // className={`${key % 2 == 0 ? '' : '-scale-[1] -rotate-[30deg] translate-x-20 -translate-y-5'}`}
                  className={`${key % 2 == 0 ? '-scale-[1] translate-x-[250px] -rotate-12' : 'translate-x-[100px] -rotate-12'}`}
                  width="108" height="290" viewBox="0 0 108 290" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M107.258 1C41.5917 39.8333 -61.5416 151.9 51.2584 289.5"
                    stroke="#53cc5e" 
                    strokeDasharray="12 12"
                    strokeWidth={3}
                    strokeLinejoin='round'
                  // className={`road_path_anim ${'road_path_anim' + key} opacity-0 ${key % 2 == 0 ? 'path_to_bottom_anim' : 'path_to_top_anim'}`}
                  // className={`${key % 2 == 0 ? 'path_to_bottom_anim' : 'path_to_top_anim'}`}
                  />
                </svg>
              </div>
            </div>
          </div>


          <div className={`path_container ${'path_container' + key} bg-gradient-to-r from-[#40464120] from-60% md:w-[50vw] rounded-[50px] m-2 md:my-8  p-8  md:translate-x-[200px] md:-translate-y-[50px]  md:opacity-0 rotate-0 `}>
            <div className={` w-[200px] h-[200px] bg-[#9ae89d] blur-[50px] opacity-30  absolute bottom-0 translate-x-12 -translate-y-8 -z-10`} />

            {/* for mobile only */}
            <img className={`md:hidden w-[40px]`} src="https://staging.digihorseempires.io/images/landing/footPrint.png" />
            {/* title */}
            <p className='text-[2em]  text-[#18ff04] my-4 leading-[1em] font-slant'>{card.title}</p>
            {/* contents */}
            {/* <p className='text-[#b8adc2] text-xl'>{card.content}</p> */}
            <ul className=''>
              {card.content.map((content, index)=>(
                <li key={index} className='text-[#d0e4c6] text-sm md:text-lg list-disc mt-2 font-vcr'>{content}</li>
              ))}
            </ul>
          </div>
        </div>
      })}
    </div>
    </div>
    </div>
  )
}

export default MetaMask