import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const teams = [{
    name: "The Stablemaster",
    url: "./images/deHorse/11.jpg",
    description: "A seasoned blockchain developer with a passion for gaming and decentralized finance. The Stablemaster oversees the technical development of Digihorse Empires, ensuring seamless integration of DeFi mechanics and gaming elements.With a background in smart contract development and gaming protocols, they strive to create an immersive and secure gaming experience for users while maintaining anonymity to focus on delivering top- notch gameplay mechanics."
}, {
    name: "The Race Strategist",
    url: "./images/deHorse/22.jpg",
    // description: "A horse racing enthusiast and DeFi aficionado, the Race Strategist brings a unique blend of expertise in equestrian sports and financial markets to Digihorse Empires. Leveraging their deep understanding of race dynamics and betting strategies, they design innovative gameplay features and betting mechanisms that drive excitement and engagement among players. Remaining anonymous allows them to operate discreetly, focusing on refining race strategies and optimizing user experience without distractions."
    description: "A horse racing enthusiast and DeFi aficionado, the Race Strategist brings a unique blend of expertise in equestrian sports and financial markets to Digihorse Empires. Leveraging their deep understanding of race dynamics and betting strategies, they design innovative gameplay features and betting mechanisms that drive excitement and engagement among players."
}, {
    name: "The Community Wrangler",
    url: "./images/deHorse/44.jpg",
    // description: "A skilled communicator and community builder, the Community Wrangler specializes in fostering a vibrant and supportive community around Digihorse Empires. Through strategic community engagement initiatives and social media outreach, they cultivate a loyal following of players and enthusiasts. Operating anonymously enables them to connect with the community authentically, building trust and rapport while amplifying the project's visibility and adoption."
    description: "A skilled communicator and community builder, the Community Wrangler specializes in fostering a vibrant and supportive community around Digihorse Empires. Through strategic community engagement initiatives and social media outreach, they cultivate a loyal following of players and enthusiasts."
}, {
    name: "The Security Guardian",
    url: "./images/deHorse/33.jpg",
    // description: "A cybersecurity expert with a passion for protecting digital assets and ensuring platform integrity. The Security Guardian is dedicated to fortifying Digihorse Empires' infrastructure against potential threats and vulnerabilities. Conducting thorough security audits and implementing robust risk mitigation strategies, they prioritize the safety and privacy of user funds and gaming data. By operating anonymously, they can focus on maintaining the highest standards of security without drawing unwanted attention from malicious actors."
    description: "A cybersecurity expert with a passion for protecting digital assets and ensuring platform integrity. The Security Guardian is dedicated to fortifying Digihorse Empires' infrastructure against potential threats and vulnerabilities. Conducting thorough security audits and implementing robust risk mitigation strategies, they prioritize the safety and privacy of user funds and gaming data.  They can focus on maintaining the highest standards of security without drawing unwanted attention from malicious actors."
}, {
    name: "The Mane Marketer",
    url: "./images/deHorse/55.jpg",
    description: "With a keen eye for branding and a flair for promotion, the Mane Marketer is the driving force behind Digihorse Empires' outreach and engagement efforts. Leveraging innovative marketing strategies and creative campaigns, they gallop ahead to ensure the project stands out in the crowded digital landscape. With a passion for storytelling and a commitment to excellence, the Mane Marketer cultivates a strong brand identity and fosters meaningful connections with players and enthusiasts alike."
},]



export default function MeetTeamCard() {


    const container = useRef()
    let mm = gsap.matchMedia();

    useGSAP(() => {
        if (container.current) {
            mm.add("(min-width: 640px)", () => {
                gsap.fromTo('.team_card', { translateY: 300, opacity: 0 }, {
                    translateY: 0,
                    opacity: 1,
                    stagger: .6,
                    // duration: 1,
                    // ease: "power1.inOut",
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".container_team_target",
                        start: "top 80%",
                        end: "top center",
                        toggleActions: "restart pause resume pause",
                        scrub: 2,
                        // markers: true,
                    }
                });
            })
        }

    }, { scope: container })

    return (
        <div ref={container} className='font-vcr'>
            <h3 className='text-center text-4xl md:text-[4em]  font-slant mx-0 md:mx-20 pt-8 container_team_target text-white'>Meet Our Legendary Team</h3>
            <p className='text-center text-lg text-[#d0e4c6] z-10 relative md:w-[60%] m-auto px-6 mt-4'>
                Welcome to DigiHorse, where innovation meets mythology in an epic tale of digital adventure. Our team is unlike any other, comprised of legendary horses whose names echo through the annals of history and myth. As guardians of innovation and pioneers of the blockchain industry, these mythical steeds lead the charge towards a future where digital assets and NFTs reign supreme. Join us on a journey through the ages as we introduce you to the legendary team behind DigiHorse.
            </p>

            <div className="flex flex-col md:flex-row flex-wrap gap-4 my-4  md:gap-10 md:mx-16  mt-16 px-8 md:px-0 place-content-center place-items-center">
                {teams.map((team, key) => {
                    return <div key={"MeetTeam_" + key} className={`team_card min-w-[200px] md:w-[300px] rounded-2xl shadow-2xl group cursor-pointer flex items-end relative 
                min-h-[400px] bg-no-repeat bg-cover overflow-hidden transition-all  bg-[#190f1b] hover:bg-[100%] `}
                        style={{
                            // backgroundImage: `url('./images/landing/team_pegasus.jpg')`,
                            backgroundImage: `url('${team.url}')`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className='bg-gradient-to-tr from-[#1a2b24]  to-secondary  w-full h-full absolute block opacity-0 group-hover:opacity-100 transition-all duration-150' />
                        <div className='relative z-10 w-full p-3 group-hover:bg-transparent transition-all  duration-700 hover:h-full' >
                            <p className='text-4xl mb-4 text-gold text-left group-hover:text-center min-h-16 drop-shadow-lg font-slant'>
                                <i className='w-[90%] lg:w-[80%] h-20 bg-[#00000090] absolute -z-10 blur-xl group-hover:opacity-0 font-slant' />
                                {team.name}
                            </p>
                            <p className='h-0 group-hover:h-auto opacity-0 group-hover:opacity-100  text-white text-sm'>{team.description} </p>
                        </div>
                    </div>
                })}
            </div>
        </div>

    )
}
