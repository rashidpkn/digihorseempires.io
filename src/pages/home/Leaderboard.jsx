import React from 'react'

export default function Leaderboard() {
  return (
    <section className='w-full home-leaderboard-bg bg-no-repeat bg-cover text-white'>        
            <div className="w-[90%] lg:w-[70%] mx-auto px-[1%] min-h-screen  h-full flex justify-center items-center">
                    <div className="home-leaderboard-table  bg-cover bg-no-repeat  space-y-5 w-full px-5">

                        

                        <h3 className="text-[42px] 2xl:text-[56px] font-slant text-center">
                        
                        Top <span className='text-[#18ff04]'> EARNERS
                             </span></h3>
                            <div className="overflow-x-auto">

                        <table className='w-full '>
                            <thead className='w-full'>
                                <tr className='font-conthrax font-semibold  w-full h-24 text-[16px]'>
                                    <th align='left' className='pl-3'>Rank</th>
                                    <th align='left' >Wallet</th>
                                    <th align='left'>Referrals</th>
                                </tr>
                            </thead>
                            <tbody className='font-vcr text-[20px]'>
                                {[1,2,3,4,5,6,7,8,9,10].map(e=>{
                                    return(
                                        <tr key={e} className=' hover:bg-white/20 duration-200 cursor-pointer'>
                                    <td width={100} className='flex gap-5 items-center pl-3 h-14'>
                                        {e===1 && <img src="/images/home/red-logo.webp"  width={40} alt="" />}
                                        {e===2 && <img src="/images/home/blue-logo.webp"  width={40} alt="" />}
                                        {e===3 && <img src="/images/home/yellow-logo.webp"  width={40} alt="" />}
                                        {e >=4 && <img src="/images/home/logo.webp"  width={40} alt="" />}
                                        
                                        <p className='text-sm'>{e}</p>
                                         
                                         </td>
                                    <td className='min-w-[600px] text-[14px]'>0XEWRTEYHD4565RETB945JB9R5K4GB945GK495EKRT909</td>
                                    <td className='text-[16px]'>265</td>
                                </tr>

                                    )
                                })}
                                
                            </tbody>
                        </table>
</div>

                    </div>

            </div>
    </section>
  )
}
