import React, { useState } from 'react'


function Faq() {
    const [activeTab, setActiveTab] = useState(-1)
    return (
        <div className='w-[100vw] flex flex-col px-2 md:px-8 relative'>
            <div className={`absolute w-[100px] h-[100px] md:w-[300px] md:h-[300px] bg-primary blur-[60px] md:blur-[120px] opacity-30  left-[20%] md:left-[60%] -top-[40%] `} />
            {faqs.map((faq, key) => {
                return <div className='relative  md:w-[604px]  m-auto  text-white border md:border-none p-4 md:p-0 transition-all hover:text-primary hover:scale-x-[1.01]' key={"_faq_" + key}
                    onClick={() => setActiveTab(activeTab == key ? -1 : key)}
                >
                    <button >
                        <svg
                            className="absolute top-0  hidden md:block"
                            width="100%" height="75" viewBox="0 0 804 75" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M20.1919 0.5H803.5V74.5H0.5V18.2227L20.1919 0.5Z" fillOpacity="0.12" stroke="#4b5c52" />
                        </svg>
                        <p className='md:m-6 text-left'>{faq.title}</p>

                        <span className="material-symbols-rounded absolute right-4 md:right-8 top-[15px] md:top-[30px]">
                            {activeTab == key ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                        </span>
                    </button>
                    {/* content */}
                    <div className={`overflow-hidden transition-height duration-300 ease-in-out ${activeTab == key ? 'h-[300px] md:h-[200px]' : 'h-[0px]'}`}>
                        <h2 className='text-3xl my-4 text-white '>{faq.title}</h2>
                        <p className='mb-8 text-[#d0e4c6]'>
                            {faq.description}
                        </p>
                    </div>
                </div>
            })}

        </div>
    )
}

export default Faq


const faqs = [
    {
      title: "What is DigiHorse Empires? ",
      description:
        "DigiHorse Empires is a platform centered around blockchain-based racehorses, bringing together a large community of enthusiasts where you can purchase, breed, and race unique NFT horses.",
    },
    {
      title: "What function does the $DIGI token serve?",
      description:
        "The $DIGI token is the currency used for all transactions within the DigiHorse Empires virtual world.",
    },
    {
      title: "How can I acquire $DIGI tokens?",
      description:
        'Presently, $DIGI tokens are in the presale stage and are not yet accessible on conventional cryptocurrency exchanges or decentralized finance platforms like Uniswap. Caution is advised against potential scams misusing the DigiHorse Empires brand. For comprehensive instructions on purchasing $DIGI tokens, please refer to the "How to Buy" section on our official website.',
    },
    {
      title: "When and where will I receive my $DIGI tokens?",
      description:
        "Following the conclusion of the presale, you will be able to claim your $DIGI tokens on the official DigiHorse Empires website.",
    },
    {
      title:
        "When can I participate in virtual races on the DigiHorse Empires platform?",
      description:
        "Virtual races on the DigiHorse Empires platform are scheduled to commence in the fourth quarter of 2024, subsequent to the successful completion of the presale phase.",
    },
    {
      title: "How can I get involved in the DigiHorse Empires community?",
      description:
        "We encourage you to join our Discord server and follow our social media channels to stay updated on the latest news, announcements, and events. Engage with fellow community members, participate in discussions, and share your ideas and feedback to help shape the future of DigiHorse Empires.",
    },
    {
      title: "What are the launch details for DigiHorse Empires?",
      description:
        "Post-presale, DigiHorse Empires will be launched on various centralized and decentralized exchanges, including a minimum of two top-tier platforms. Stay informed about the launch date and trading platforms through our official announcements on social media channels.",
    },
  ];