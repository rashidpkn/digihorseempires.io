import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'

const Partners1 = () => {


    const partners = [
        {
            logo: '1',
            website: 'https://metamask.io',
        },
        {
            logo: '2',
            website: 'https://metamask.io',
        },
        {
            logo: '3',
            website: 'https://metamask.io',
        },
        {
            logo: '4',
            website: 'https://metamask.io',
        },
        {
            logo: '5',
            website: 'https://metamask.io',
        },
        {
            logo: '6',
            website: 'https://metamask.io',
        },
        {
            logo: '7',
            website: 'https://metamask.io',
        },
        {
            logo: '8',
            website: 'https://metamask.io',
        },
        {
            logo: '9',
            website: 'https://metamask.io',
        },
        {
            logo: '10',
            website: 'https://metamask.io',
        },
        
        
    ];


    return (
        <div className='font-vcr'>
            <h3 className='text-center text-4xl md:text-[4em] mt-16 font-slant mx-32 md:mx-0 container_team_target text-white'>Featured in</h3>
            <div className="container mx-auto md:px-10 mt-24 relative">
                <div className={`absolute w-[50px] h-[50px] md:w-[700px] md:h-[300px] bg-[#53cc5e90] opacity-0  left-[0%] md:left-[50%] -bottom-[0%] border`} />
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 partner-container">
                    {partners.map((partner, index) => {
                        return <div
                            key={index}
                            className={`partner relative flex  items-center justify-center bg-gradient-to-tl to-[#afafaf30] hover:to-[#53cc5e40] from-[#53cc5e00] backdrop-blur-3xl h-28 md:h-48 shadow-md p-8 rounded-[40px] cursor-pointer `}
                        >
                            <a href={partner.website} target='_blank'>
                                <img
                                    src={`/images/featured/${partner.logo}.png`}
                                    alt={partner?.name}
                                    className={` ${partner?.name ? 'w-8 md:w-16 mr-2' : 'w-52'} rounded-lg`}
                                />
                            </a>
                        </div>
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Partners1