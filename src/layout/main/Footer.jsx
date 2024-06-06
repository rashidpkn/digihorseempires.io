import React from 'react'
import { Link } from 'react-router-dom';

const MENU = [
  // { title: "ABOUT", path: "path_about" },
  { title: "team", path: "path_team", isPage: false },
  // { title: "presale schedule", path: "presale", isPage: true },
  { title: "roadmap", path: "path_roadmap", isPage: false },
  { title: "whitepaper", path: "path_whitepaper", isPage: false },
  { title: "how to buy", path: "how-to-buy", isPage: true },
  { title: "audit", path: "path_audit", isPage: false },
  { title: "faqs", path: "faqs", isPage: true },
  // { title: "contact us", path: "path_contact", isPage: false },
];

const socialLinks = { youtube: 'https://www.youtube.com/@digihorse_empires', instagram: 'https://www.instagram.com/digihorse_empires/', meta: 'https://www.facebook.com/digihorseempires/', x: 'https://x.com/DigihorseE' }

export default function Footer()  {
  return (
    <footer className='bg-black pt-5'>
      <div id="path_contact" className='relative'>
            <div className='lg:flex justify-between md:mx-32'>


                <div className='text-[#C2C4C5] mx-6 '>
                    <p className='text-3xl my-4 md:mt-0 text-center lg:text-left'>Quick Links</p>
                    {MENU.map((page, key) => {
                        return <p key={"menu_footer_" + key} className='text-center md:text-left'>
                            <a
                                href={page.isPage ? '' : `#${page.path}`}
                                onClick={() => {
                                    if (page.path == 'path_whitepaper') {
                                        window.open("https://whitepaper.digihorseempires.io/", "_blank");
                                        return
                                    }
                                    setShowNav(false)
                                    if (page.isPage) nav('/' + page.path)
                                    else nav('/#' + page.path)
                                }
                                }
                                className={`hover:opacity-60  py-2  w-full text-sm text-white cursor-pointer capitalize`}
                                aria-current="page"
                            >
                                {page.title}
                            </a></p>
                    })}
                </div>



                <div className='text-[#C2C4C5] flex flex-col items-center flex-1  '>
                    <img
                        src="/images/home/logo.webp"
                        className="max-w-[150px] logoAnim"
                        alt="DigiHorse"
                    />
                    <h1 className="text-slant text-2xl text-white">DigiHorse Empires</h1>
                    <h3 className='text-sm text-[#d0e4c6] text-center md:text-xl '>Riding The Wave of The Web3 Gaming Revolution</h3>
                </div>


                <div className='text-[#C2C4C5]  mt-8 lg:mt-0'>
                    <p className='text-3xl font-semibold text-white lg:mb-8 text-center lg:text-left'>Connect with us</p>
                    <div className='flex gap-4 justify-center lg:justify-start'>
                        <img src='./images/icons/youtube.png' onClick={() => window.open(socialLinks.youtube, '_blank')} className='w-8 opacity-50 hover:opacity-100 transition-all duration-600' />
                        <img src='./images/icons/instagram.png' onClick={() => window.open(socialLinks.instagram, '_blank')} className='w-8 opacity-50 hover:opacity-100 transition-all duration-600' />
                        <img src='./images/icons/meta.png' onClick={() => window.open(socialLinks.meta, '_blank')} className='w-8 opacity-50 hover:opacity-100 transition-all duration-600' />
                        <img src='./images/icons/x.png' onClick={() => window.open(socialLinks.x, '_blank')} className='w-8 opacity-50 hover:opacity-100 transition-all duration-600' />
                    </div>

                </div>
            </div>

            <div className='md:flex justify-between md:mx-32 p-8 border-t border-[#ffffff40] mt-16 text-[#C2C4C5]'>
                <p>© 2024. All rights reserved</p>
                <p><Link to={'/terms'} className='mr-2'>Terms & Conditions</Link> <Link to={'/privacy'} className='mr-2'>Privacy Policy</Link>   <Link to={'/disclaimer'} className='mr-2'>Disclaimer</Link></p>
            </div>
        </div>
    </footer>
  )
}
