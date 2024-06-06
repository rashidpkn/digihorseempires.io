import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'

const Partners = () => {


    const partners = [
        {
            logo: 'metamask',
            website: 'https://metamask.io',
        },
        {
            logo: 'coinbase',
            website: 'https://www.coinbase.com/',
        },
        // {
        //     logo: 'coingecko',
        //     website: 'https://www.coingecko.com/',
        // },
        {
            logo: 'crypto',
            website: 'https://crypto.com/',
        },
        // {
        //     logo: 'dextools',
        //     website: 'https://www.dextools.io/',
        // },
        {
            logo: 'exodus',
            website: 'https://www.exodus.com/',
        }, {
            logo: 'phantom',
            website: 'https://phantom.app/',
        },
        {
            logo: 'trezor',
            website: 'https://trezor.io/',
        },
        // {
        //     logo: 'uniswap',
        //     website: 'https://uniswap.org/',
        // },
        {
            logo: 'trust-wallet',
            website: 'https://trustwallet.com/',
        },
        {
            logo:'brave',
            website:'https://brave.com/en-in/wallet/'
        }
        // Add more partners as needed
    ];


    return (
        <div >
            <h3 className='text-center text-4xl md:text-[4em] mt-16 text-slant mx-32 md:mx-0 container_team_target text-white'>Compatible Wallets</h3>
            <div className="container mx-auto md:px-10 mt-24 relative">
                <div className={`absolute w-[50px] h-[50px] md:w-[700px] md:h-[300px] bg-[#53cc5e90] opacity-0  left-[0%] md:left-[50%] -bottom-[0%] border`} />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 partner-container">
                    {partners.map((partner, index) => {
                        return <div
                            key={index}
                            className={`partner relative flex  items-center justify-center bg-gradient-to-tl to-[#afafaf30] hover:to-[#53cc5e40] from-[#53cc5e00] backdrop-blur-3xl h-28 md:h-48 shadow-md p-8 rounded-[40px] cursor-pointer `}
                        >
                            <a href={partner.website} target='_blank'>
                                <img
                                    src={'./images/wallets/' + partner.logo + '.png'}
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

export default Partners