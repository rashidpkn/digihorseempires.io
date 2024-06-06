import React from 'react'

const Media = () => {
    const cards = [
        {
            image: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80',
            title: 'UI/UX Review Check',
            description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.'
          },
        {
            image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'UI/UX Review Check',
            description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.'
        },
        {
            image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'UI/UX Review Check',
            description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.'
        },
        {
            image: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'UI/UX Review Check',
            description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.'
        },
    ];


    return (
        <div className="mx-5 md:mx-32">
            <h3 className='text-center text-4xl md:text-[4em] mt-16 text-slant md:mx-32 mx-0 container_team_target mb-24 text-white'>Featured in</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                {cards.map((card, index) => (
                    <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#53cc5e30] text-white">
                        <div className="m-2">
                            <img className="w-full rounded-lg" src={card.image} alt={card.title} />
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{card.title}</div>
                            <p className="text-base">{card.description}</p>
                        </div>
                        <div className="p-6 pt-0">
                            <button
                                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-primary text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button"
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Media