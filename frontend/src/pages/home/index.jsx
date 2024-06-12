import React from "react";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Refer from "./Refer";
import RoadMap from "./RoadMap";
import Leaderboard from "./Leaderboard";
import Ecosystem from "./Ecosystem";
import Tokenomics from "./Tokenomics";
import MeetTeamCard from "./MeetTeamCard";
import Partners from "./Partners";
import Media from "./Media";
import Faq from "./Faq";
import Button from "../../components/Button";
import Refer2 from "./Refer2";
import WhitePaper from "./whitepaper";
import Partners1 from "./Partners1";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      {/* <Welcome /> */}
      {/* <Refer />
      <Refer2 /> */}

      {/* <WhitePaper/> */}
      
      {/* <Leaderboard/> */}

      

      <p className='text-center w-[90%] lg:w-[80%] text-sm md:text-lg text-[#d0e4c6] md:px-[10%] m-auto mt-12 font-vcr'>Step into the forefront of the Web3 gaming revolution with DigiHorse, where we're redefining the landscape of profitability and entertainment. As web3 gaming experiences unprecedented growth, we're pioneering a new era where players can not only enjoy immersive gameplay but also profit from their passion for gaming through blockchain technology. </p>

      <p className='text-xl md:text-3xl font-bold my-8 text-center text-white mt-32 font-slant'>Seize the Opportunities</p>
        <div className='flex flex-col md:flex-row  md:justify-between px-8 lg:px-32   text-white '>

          <div className=' flex mt-8 '>
            <span className="material-symbols-rounded text-[3em] mr-8 hidden lg:block">
              monitoring
            </span>
            <div>
              <p className='text-3xl font-vcr'>Ai Powered NFT Wearables</p>
              <p className='w-[90%] lg:w-[80%] mt-3 font-vcr'>
              Dive into our vibrant marketplace and explore a wide range of AI-powered NFT wearables to customize your horses and enhance their performance. From sleek saddles to stylish bridles, these digital accessories not only add flair to your horses but also serve as valuable assets that can be bought, sold, and traded for profit. The AI integration ensures dynamic and intelligent design elements, making each wearable unique and enhancing your gaming experience.

              </p>
            </div>
          </div>

          <div className='flex mt-8 font-vcr'>
            <span className="material-symbols-rounded text-[3em] mr-8 hidden lg:block ">
              pie_chart
            </span>
            <div>
              <p className='text-3xl'>Renting Economy</p>
              <p className='w-[90%] lg:w-[80%] mt-3 '>Unlock the potential of the sharing economy by renting horses and hippodromes from other players. Whether you're looking for a speedy racer, a sturdy workhorse, or a lucrative rental venue, our platform facilitates seamless transactions between owners and renters. This allows you to maximize your earnings, receive advertising revenue, and expand your equine empire. Take advantage of our innovative marketplace to diversify your assets and increase your profits.</p>
            </div>
          </div>

          <div className=' flex mt-8 font-vcr'>
            <span className="material-symbols-rounded text-[3em] mr-8 hidden lg:block">
              account_balance_wallet
            </span>
            <div>
              <p className='text-3xl'>Thrilling Tournaments</p>
              <p className='w-[90%] lg:w-[80%] mt-3 '>Immerse yourself in the adrenaline-fueled excitement of multiplayer tournaments, where players compete for prestigious titles and lucrative rewards. From daily races to championship events, our dynamic tournament system offers endless opportunities to showcase your skills, claim victory, and reap the rewards of your success.
              </p>
            </div>
          </div>



        </div>



 <Refer />
      <Refer2 />

      
      
      <Leaderboard/>


        {/* sci-fi-huds */}
      <h3 className='text-center text-4xl md:text-[4em] mt-32 font-slant text-white'>Building a Thriving Ecosystem</h3>

         <p className='font-vcr text-center text-lg text-[#d0e4c6] z-10 relative md:w-[60%] m-auto px-6 leading-5 md:mt-6 hidden md:block'>
           At DigiHorse, we've created a comprehensive ecosystem that encompasses every aspect of the horse racing experience.
         </p>

    <Ecosystem/>



{/* About us */}
<div className="font-vcr">
          <div className='fadeup rounded-3xl md:rounded-[100px] bg-[#1a2b2499] mx-8 my-2 md:mx-24 md:mt-24 p-8  md:flex justify-between items-center relative'>
            <div className="absolute inset-0 m-auto h-[75%] w-[75%]  blur-3xl glow-build   bg-[#53cc5e22]" />
          
            <div className="relative w-[70%]">
              <div className='flex items-center'>
                <img src="https://staging.digihorseempires.io/images/landing/footPrint.png" className='h-[60px] md:h-[100px] mr-4' />
                <div className="">
                <h3 className="text-[42px] 2xl:text-[56px] font-slant text-center">
                Innovative <span className='text-[#18ff04]'>Play To Earn</span> Model
                  </h3>
                  
                  <p className='text-[2em]'>in Digital Gaming</p>
                </div>
              </div>
              <p className='text-[#d0e4c6] text-lg md:w-[90%] lg:w-[80%] my-8'>
                Digihorse Empires is redefining the gaming landscape with its groundbreaking play-to-earn model. Imagine turning your passion for horse racing into a lucrative venture where every race, trade, and investment in NFT horses translates into real-world earnings. Our platform rewards your skills and strategic decisions, allowing you to generate significant income just by playing the game.
                <br /> <br />
                Whether you're racing your top-performing horse, trading rare NFTs, or renting out your hippodromes for advertising revenue, every action in Digihorse Empires has the potential to boost your earnings. The integration with the Base Blockchain ensures secure, fast, and transparent transactions, making it easier than ever to profit from your gaming activities.
                </p>
            </div>

            <div className='w-[30%]'>
              <img src="/images/home/play and earn.png" className='w-full' />
            </div>
            <div className='hidden md:block w-[216px] h-[216px] bg-[#9ae89d] blur-[127px]  absolute opacity-60 top-[30%] left-[20%] -z-10' />
          </div>
        </div>

        {/* <p class="text-center w-[90%] lg:w-[80%] text-sm md:text-lg text-[#d0e4c6] md:px-[10%] m-auto mt-12 font-vcr">
        Whether you're racing your top-performing horse, trading rare NFTs, or renting out your hippodromes for advertising revenue, every action in Digihorse Empires has the potential to boost your earnings. The integration with the Base Blockchain ensures secure, fast, and transparent transactions, making it easier than ever to profit from your gaming activities.
        </p> */}






        <div className='font-vcr bg-no-repeat w-full h-[50vh] m-auto bg-auto bg-center  md:px-[12vw] pt-32 ' id="path_audit">
          <div className='hidden lg:block absolute -z-0 m-auto  left-[10vw] right-[10vw]'>
            <img src="https://staging.digihorseempires.io/images/landing/sci-banner.webp" className='w-full' />
          </div>
          <div className='relative z-0 sm:mx-8 sm:top-4 md:top-8 '>
            <h3 className='text-center text-[4em] md:text-[2em] lg:text-[4em]  text-gold relative font-slant'>DigiHorse</h3>
            <div className='sm:flex justify-between sm:mt-12 mx-12'>
              <div className='flex-1'>
                <p className='text-xl'>Contract Address</p>
                <a className='text-sm lg:text-xl text-center sm:text-left hover:text-primary' href='https://base.blockscout.com/address/0x99018271D692493e678A4816655Ac62324EeD67D'>0x99018271D692493e678A4816655Ac62324EeD67D</a>
              </div>


              <div className='flex flex-col lg:flex-row justify-center md:justify-end  gap-4 flex-1'>
                <button className="relative flex justify-center items-center group">
                <img src="/button/light-green-connect.png" className='group-hover:hidden w-full h-full absolute object-cover' alt="" />
                  
                  <img src="/button/green-connect.png" height={36} width={100} className='hidden group-hover:block w-full h-full absolute object-cover' alt="" />
                  <p className='py-3 px-10 relative z-10'>VIEW AUDIT</p>
                </button>
                {/* <Button
                  onClick={() => window.open('https://github.com/solidproof/projects/blob/main/2024/DigiHorse%20Empires/SmartContract_Audit_Solidproof_DigiHorseEmpires.pdf', '_blank')}
                  title="VIEW AUDIT"
                  className="md:px-1620 p-4 bg-gradient-to-r from-primary to-secondary text-textColor md:mt-0 mt-6 lg:px-16"
                  type="primary"
                /> */}
              </div>
            </div>
          </div>
        </div>

        <RoadMap/>

        <Tokenomics />



        <section className='' id="path_team">
          <MeetTeamCard />
        </section>

        <section className='md:mt-60' id="path_partners">
          <Partners />
        </section>

        <section className='md:mt-60' id="path_partners">
          <Partners1 />
        </section>

        {/* <section className='' id="path_media">
          <Media />
        </section> */}

        <div className='block font-vcr' id="path_faq">
          <h3 className='text-center text-[4em] font-slant text-white mt-16'>FAQS</h3>
          <h3 className='text-center text-4xl mb-12 font-slant'>Answers to Your Most Common Questions</h3>
          <Faq />
        </div>


        <div className='font-vcr rounded-[80px] bg-[#53cc5e10] mt-32 p-8 md:p-16 relative text-center md:w-[60vw] mx-6 md:ml-[20vw] overflow-hidden'>

<p className='text-center text-4xl  leading-[.8em] font-slant text-primary'>Join the Revolution</p>
<p className='text-white text-xl md:mx-16 m-8'>
Are you ready to ride the wave of the Web3 gaming revolution and unleash the full potential of your passion for horse racing? Join us at DigiHorse and become part of a global community of gamers, investors, and enthusiasts who are shaping the future of digital entertainment. Welcome to DigiHorse, where profit meets passion, and the possibilities are endless.
</p>
<div className='w-[116px] h-[116px] bg-[#9ae89dc7] blur-[100px]  absolute opacity-60 top-[30%] right-[40%] -z-10' />
{/* <a
  href="#path_purchase">
  <Button
    // onClick={'open'}
    title="JOIN NOW"
    className="p-4 bg-gradient-to-r from-primary to-secondary text-textColor w-44 m-auto hover:opacity-90 cursor-pointer"
    type="primary"
  />
</a> */}


<button className="relative flex justify-center items-center group mx-auto">
                <img src="/button/light-green-connect.png" className='group-hover:hidden w-full h-full absolute object-cover' alt="" />
                  
                  <img src="/button/green-connect.png" height={36} width={100} className='hidden group-hover:block w-full h-full absolute object-cover' alt="" />
                  <p className='py-3 px-10 relative z-10'>JOIN NOW</p>
                </button>

<div className='absolute  w-full h-full top-0 left-0 -z-10'>
  {/* <FireRandomParticles sparks={15} /> */}
</div>
</div>


    </main>
  );
}
