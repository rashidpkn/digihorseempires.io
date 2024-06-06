import React from 'react'

export default function Leaderboard() {
  return (
    <section className='w-full home-leaderboard-bg bg-no-repeat bg-cover text-white'>        
            <div className="container mx-auto px-[1%] min-h-screen  h-full flex justify-center items-center">
                    <div className="home-leaderboard-table  bg-cover bg-no-repeat p-10 space-y-5 w-full ">

                        <h2 className='font-slant text-[54px] '>Top EARNERS</h2>
                            <div className="overflow-x-auto">

                        <table className='w-full '>
                            <thead className='w-full'>
                                <tr className='font-conthrax font-semibold  w-full h-24'>
                                    <th align='left'>Rank</th>
                                    <th align='left' >Wallet</th>
                                    <th align='left'>Referrals</th>
                                </tr>
                            </thead>
                            <tbody className='font-vcr text-[20px]'>
                                {[1,2,3,4,5,6,7,8,9,10].map(e=>{
                                    return(
                                        <tr key={e} className='h-14'>
                                    <td width={200}>{e}</td>
                                    <td className='min-w-[600px]'>0XEWRTEYHD4565RETB945JB9R5K4GB945GK495EKRT909</td>
                                    <td className='text-[30px]'>265</td>
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
