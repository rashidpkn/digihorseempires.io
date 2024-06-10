import { useRef,  } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Particles from './Particles'


// gsap.to(window, { duration: 2, scrollTo: "#someID" });


const yourPath = [{
  title: "Concept Development (Q1 2023)",
  content: ["Research and ideation: Conduct market research to identify opportunities and gaps in the blockchain gaming industry. Define the concept for DigiHorse Empires, focusing on combining horse racing with blockchain technology and NFTs.",
 "Team formation: Assemble a skilled team of developers, designers, marketers, and legal advisors with expertise in blockchain, gaming, and equestrian sports. "]
}, {
  title: "Platform Development (Q2-Q4 2024)",
  content: ["Technical development: Build the core infrastructure of the DigiHorse Empires platform, including smart contracts, NFT marketplace, racing mechanics, and user interfaces.",
  "Testing and optimization: Conduct extensive testing to ensure the platform is secure, scalable, and user-friendly. Gather feedback from beta testers and make necessary improvements.",
 "Integration of additional features: Expand the platform with features such as NFT wearables, renting economy, and interactive tournaments to enhance user engagement and profitability.",
],
}, {
  title: "Launch and Early Adoption (Q2-Q4 2024)",
  content: ["Pre-sale and token launch: Conduct a pre-sale to generate initial funding for the project and distribute the native token ($DIGI). Release NFTs to pre-sale investors during the early adoption phase. Launch the DigiHorse Empires platform to the public, allowing users to start racing NFT horses.",
  "Marketing and community building: Implement a comprehensive marketing strategy to raise awareness about DigiHorse Empires and attract early adopters. Engage with the community through social media, forums, and events to foster a strong user base."
],
}, {
  title: "Expansion and Partnerships (Q4 2024)",
  content: ["Platform expansion: Continue to enhance the DigiHorse Empires platform with new features, updates, and improvements based on user feedback and market trends. Explore opportunities to integrate with other blockchain projects and gaming platforms to expand the reach and functionality of DigiHorse Empires.",
  "Strategic partnerships: Form strategic partnerships with industry stakeholders, equestrian organizations, gaming companies, and influencers to increase visibility, credibility, and user adoption. Collaborate on joint initiatives, events, and marketing campaigns to drive growth and engagement."
],
},
 {
  title: "Mass Adoption and Global Expansion (2025)",
  content: ["Mass adoption: Scale the DigiHorse Empires platform to attract mainstream users and achieve widespread adoption worldwide. Continue to innovate and evolve the platform to remain competitive in the rapidly evolving blockchain gaming landscape.",
  "Global expansion: Expand into new markets and regions, leveraging localized marketing strategies and partnerships to penetrate international markets. Customize the platform to cater to the preferences and needs of diverse user demographics, cultures, and languages."
],}
]



function RoadMap() {


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
    <div style={{backgroundImage:'url(/images/home/whitepaper/bg6.png)'}} className='bg-no-repeat bg-right-top '>
      <div className='bg-black/50'>

    
    <div className='flex flex-col justify-center items-center relative mx-8 pt-5' id="path_roadmap" ref={container}>
      <h3 className='text-center text-4xl md:text-[4em] mt-32 font-slant -translate-y-20 text-white'>Your Path to Profit</h3>

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
            <p className='text-[2em]  text-white my-4 leading-[1em] font-slant'>{card.title}</p>
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

export default RoadMap