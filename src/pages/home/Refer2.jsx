import React from "react";
import { useAccount } from "wagmi";

export default function Refer2() {
  const { isConnected, address } = useAccount();
  return (
    <section className="relative py-5 hidden lg:block">
      <img
        src="/images/home/hero-2.webp"
        className="absolute top-0 -right-10 w-[30%] "
        alt=""
      />
      .
      <div className="w-[75%] mx-auto py-5 relative z-10 ">
        <div className="flex gap-[75px] 2xl:gap-[106px] items-center">
          <h2 className="font-slant text-[42px] 2xl:text-[56px] leading-[1.3]">
            REFER FRIENDS <br />{" "}
            <span className="text-[60px] 2xl:text-[80px] text-[#00FF4E] ">
              EARN <span className="font-conthrax font-semibold">$</span>DIGI
            </span>
          </h2>
          <p className="max-w-[358.5px] 2xl:max-w-[478px] font-vcr text-[15px] 2xl:text-[20px] leading-6">
          Share your referral code with friends, family, and the crypto community. When someone uses your code, <span className="text-[#00FF4E]">they get 10% extra $DIGI coins!</span> Plus, you enter our monthly leaderboard for a chance to win fantastic prizes! Spread the word and maximize your earnings together.
          </p>
        </div>

        <div className="mt-14 2xl:mt-[100px] flex gap-20">
          <div className="max-w-[318px] 2xl:max-w-[425px] w-full">
            <div className="">
              <div className="flex gap-3">
                <img src="/images/home/spark.webp" alt="" />
                <p className="text-[22px] 2xl:text-[30px] font-conthrax">
                  STEP 1
                </p>
              </div>
              <p className="font-vcr text-[13px] 2xl:text-[18px] mt-3">
              Securely connect
              </p>
            </div>

            <button className="mt-[30px] 2xlmt-[40px] relative w-full h-[50px] group font-vcr">
              <img
                src="/button/light-white-connect.png"
                className="group-hover:hidden absolute top-0 w-full h-full"
                alt=""
              />
              <img
                src="/button/white-connect.png"
                className="hidden group-hover:block absolute top-0 w-full h-full"
                alt=""
              />
              <p className="text-[12px] 2xl:text-[16px] font-vcr font-semibold group-hover:text-black relative z-10">
                {" "}
                {isConnected
                  ? address?.substring(0, 5) +
                    "..." +
                    address?.substring(address.length - 5, address.length)
                  : "CONNECT WALLET"}
              </p>
            </button>
          </div>

          

          <div className="max-w-[318px] 2xl:max-w-[425px] w-full">
            <div className="">
              <div className="flex gap-3">
                <img src="/images/home/spark.webp" alt="" />
                <p className="text-[22px] 2xl:text-[30px] font-conthrax">
                  STEP 2
                </p>
              </div>
              <p className="font-vcr text-[13px] 2xl:text-[18px] mt-3">
              Share your  unique referral code.
              </p>
            </div>
            <div className="mt-[30px] 2xlmt-[40px] relative w-full h-[50px] group">
           
              <div className="flex gap-4">
              <p className="font-vcr text-[38px]">* * * *</p>
              <button
                className="font-vcr relative group text-xs "
                onClick={() => {}}
              >
                <img src="/button/share-light-white.png" className='group-hover:hidden absolute top-0 w-full h-full' alt="" />
                                <img src="/button/share-white.png" className='hidden group-hover:block absolute top-0 w-full h-full' alt="" />
                                <p className=" py-4 px-10  group-hover:text-black relative z-10 text-sm">

                SHARE
                                </p>
              </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid  grid-cols-6 mt-14 2xl:mt-[100px] gap-6 2xl:gap-10">
          <div className="py-[15px] 2xl:py-5 px-[18px] 2xl:px-6 flex flex-col items-center border w-full rounded  home-red-box">
            <img
              src="/images/home/red-logo.webp"
              className="w-[60px] 2xl:w-[80px]"
              alt=""
            />
            <p className="mt-[5px] 2xl:mt-[7.5px]  font-conthrax text-[9px] 2xl:text-xs">
              1ST PLACE{" "}
            </p>
            <p className="mt-[5px] 2xl:mt-[7.5px] font-vcr text-[20px] 2xl:text-[36px]">
              $500.00
            </p>
            <p className="mt-[5px] 2xl:mt-[7.5px] font-vcr text-[12px] 2xl:text-[16px]">
              <span></span> USDC
            </p>
          </div>
          <div className="py-[15px] 2xl:py-5 px-[18px] 2xl:px-6 flex flex-col items-center border w-full rounded home-blue-box">
            <img
              src="/images/home/red-logo.webp"
              className="w-[60px] 2xl:w-[80px]"
              alt=""
            />
            <p className="mt-[5px] 2xl:mt-[7.5px]  font-conthrax text-[9px] 2xl:text-xs">
              2ST PLACE{" "}
            </p>
            <p className="mt-[5px] 2xl:mt-[7.5px] font-vcr text-[20px] 2xl:text-[36px]">
              $500.00
            </p>
            <p className="mt-[5px] 2xl:mt-[7.5px] font-vcr text-[12px] 2xl:text-[16px]">
              <span></span> USDC
            </p>
          </div>
          <div className="py-[15px] 2xl:py-5 px-[18px] 2xl:px-6 flex flex-col items-center border w-full rounded home-gold-box">
            <img
              src="/images/home/red-logo.webp"
              className="w-[60px] 2xl:w-[80px]"
              alt=""
            />
            <p className="mt-[5px] 2xl:mt-[7.5px]  font-conthrax text-[9px] 2xl:text-xs">
              3ST PLACE{" "}
            </p>
            <p className="mt-[5px] 2xl:mt-[7.5px] font-vcr text-[20px] 2xl:text-[36px]">
              $500.00
            </p>
            <p className="mt-[5px] 2xl:mt-[7.5px] font-vcr text-[12px] 2xl:text-[16px]">
              <span></span> USDC
            </p>
          </div>

          <div className=" flex flex-col items-center col-span-3 border home-green-box">
            <img src="/images/home/green-logos.png" className="py-2" alt="" />
            <div className="py-[15px] 2xl:py-5 px-[18px] 2xl:px-6 mt-3 2xl:mt-4 flex justify-between items-end gap-16">
              <div className="">
                <p className="font-conthrax text-[9px] 2xl:text-xs">
                  PLACES 4-10
                </p>
                <p className="font-vcr text-[20px] 2xl:text-[36px]">$500.00</p>
                <p className="font-vcr text-[12px] 2xl:text-[16px]">
                  <span></span> USDC
                </p>
              </div>
              <p className="font-vcr text-[13px] 2xl:text-[18px]">
                *Win $500 worth of $DIGI coins each, based on $0.0500 listing
                price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
