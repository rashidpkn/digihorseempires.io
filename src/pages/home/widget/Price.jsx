import React from 'react'

export default function Price() {
  return (
    <div className="grid grid-cols-2 gap-3 mt-5">
                            <div className="">
                                <div className="w-8 h-[1px] rounded-full border-2 border-[#00FF4E] mx-auto" style={{boxShadow:'0px 0px 30px #00FF4E80'}} />
                                <div className="w-full p-3  home-hero-widget-stage1 mt-5">
                                    <div className="flex justify-between text-[9px] font-conthrax">
                                        <p>STAGING 1</p>
                                        <div className="flex items-center gap-1">
                                        <span className='bg-[#00FF4E] inline-block h-1 w-1 rounded-full pulse-widget'/>
                                        <p>Live</p>
                                        </div>

                                    </div>
                                    <p className='mt-3 text-center font-vcr text-[24px]'>$0.0125</p>
                                </div>

                                
                            </div>
                            <div className="">
                            <div className="w-8 h-[1px] border-2 border-transparent rounded-full mx-auto" />
                            <div className="w-full p-3  home-hero-widget-stage2 mt-5 border border-white/30">
                            <div className="flex justify-between text-[9px] font-conthrax">
                                        <p>STAGING 2</p>
                                        <div className="flex items-center gap-1">
                                        <span className='bg-[#00FF4E] inline-block h-1 w-1 rounded-full pulse-widget'/>
                                        <p>66.67 %</p>
                                        </div>

                                    </div>
                                    <p className='mt-3 text-center font-vcr text-[24px]'>$0.0185</p>
                            </div>
                            </div>

                            <div className="col-span-2 py-5 px-3 border-white border rounded flex justify-between items-center">
                                <div className="">
                                <p className='text-[9px] font-conthrax'>STAGING 1</p>
                                <p className='mt-3 text-center font-vcr text-[24px]'>$0.0185</p>
                                </div>
                                <p className='text-[9px] font-conthrax'>566.67 %</p>
                            </div>
                        </div>

  )
}
