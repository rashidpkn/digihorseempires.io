import { useWeb3Modal } from "@web3modal/wagmi/react";
import React from "react";
import { useAccount } from "wagmi";

export default function Refer() {
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();

  return (
    <section className="text-white relative ">
      <img
        src="/images/home/hero-2.webp"
        className="lg:h-full absolute right-0  my-auto w-1/2 lg:w-auto  lg:min-w-[30%] object-top object-cover "
        alt=""
      />
      <div className="w-[75%] mx-auto py-20 space-y-20 relative z-10 scale-90">
        <div className="flex items-start flex-wrap gap-10 2xl:gap-20">
          <div className="font-slant text-4xl lg:text-[40px]  max-w-xs ">
            <h3>
              REFER FRIENDS{" "}
              <span className="text-7xl lg:text-[60px] text-[#00FF4E]">
                {" "}
                EARN DIGI{" "}
              </span>
            </h3>
          </div>
          <div className="max-w-lg 2xl:max-w-lg">
            <p className="font-vcr text-[15px] lg:text-[14px] max-w-[330px]">
              Share your referral code with friends and family. When someone
              uses your code,{" "}
              <span className="text-[#00FF4E]">
                {" "}
                they get 10% extra $DIGI coins!{" "}
              </span>{" "}
              Plus, you enter our monthly leaderboard for a chance to win
              fantastic prizes!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 2xl:gap-20 text-center lg:text-left">
          <div className="max-w-sm 2xl:max-w-lg w-full space-y-5">
            <p className="font-conthrax text-[20px] flex items-center justify-center lg:justify-start gap-3">
              <img
                src="/images/home/spark.webp"
                alt=""
                className="w-[50px] h-[27px]"
              />
              STEP 1
            </p>
            <p className="font-vcr text-[14px]">
              Securely connect your wallet.
            </p>

            <button
              className="font-conthrax home-hero-widget-connect-walle py-4 w-full relative group max-w-xs"
              onClick={() => open()}
            >
              <img src="/button/light-white-connect.png" className='group-hover:hidden absolute top-0 w-full h-full' alt="" />
                                <img src="/button/white-connect.png" className='hidden group-hover:block absolute top-0 w-full h-full' alt="" />
                                <p className="group-hover:text-black relative z-10 text-sm">

              {isConnected
                ? address?.substring(0, 5) +
                "..." +
                address?.substring(address.length - 5, address.length)
                : "CONNECT WALLET"}
                </p>
            </button>
          </div>
          <div className="max-w-sm 2xl:max-w-lg w-full space-y-5">
            <p className="font-conthrax text-[20px] flex items-center justify-center lg:justify-start gap-3">
              <img
                src="/images/home/spark.webp"
                alt=""
                className="w-[50px] h-[27px]"
              />
              Step 2
            </p>
            <p className="font-vcr text-[14px]">
              Share code with friends and family.
            </p>
            <div className="flex gap-5 items-center justify-center lg:justify-start">
              <p className="font-vcr text-[38px]">* * * *</p>
              <button
                className="font-conthrax relative group text-xs"
                onClick={() => {}}
              >
                <img src="/button/share-light-white.png" className='group-hover:hidden absolute top-0 w-full h-full' alt="" />
                                <img src="/button/share-white.png" className='hidden group-hover:block absolute top-0 w-full h-full' alt="" />
                                <p className=" py-4 px-8  group-hover:text-black relative z-10 text-sm">

                SHARE
                                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="grid  lg:grid-cols-6 gap-6 2xl:gap-10">
          <div className="px-5 py-2 flex flex-col justify-center items-center gap-1 home-red-box">
            <img
              src="/images/home/red-logo.webp"
              width={60}
              height={60}
              className="rounded-full"
              alt=""
            />
            <p className="font-conthrax text-[8px] font-semibold">1ST PLACE</p>
            <p className="font-vcr text-[22px]">$500.00</p>
            <p className="flex gap-1 items-center text-[8px]">
              <span className="inline-block h-[5px] w-[5px] rounded-full bg-white"></span>{" "}
              USDC
            </p>
          </div>
          <div className="px-5 py-2 flex flex-col justify-center items-center gap-1 home-blue-box">
            <img
              src="/images/home/blue-logo.webp"
              width={60}
              height={60}
              className="rounded-full"
              alt=""
            />
            <p className="font-conthrax text-[8px] font-semibold">2ST PLACE</p>
            <p className="font-vcr text-[22px]">$250.00</p>
            <p className="flex gap-1 items-center text-[8px]">
              <span className="inline-block h-[5px] w-[5px] rounded-full bg-white"></span>{" "}
              USDC
            </p>
          </div>
          <div className="px-5 py-2 flex flex-col justify-center items-center gap-1 home-gold-box">
            <img
              src="/images/home/yellow-logo.webp"
              width={60}
              height={60}
              className="rounded-full"
              alt=""
            />
            <p className="font-conthrax text-[8px] font-semibold">3RD PLACE</p>
            <p className="font-vcr text-[22px]">$100.00</p>
            <p className="flex gap-1 items-center text-[8px]">
              <span className="inline-block h-[5px] w-[5px] rounded-full bg-white"></span>{" "}
              USDC
            </p>
          </div>

          <div className="px-5 py-2 flex flex-col  gap-1 home-green-box lg:col-span-3 text-center lg:text-left">
            <img
              src="/images/home/green-logos.png"
              className="w-full  lg:object-cover object-scale-down"
              alt=""
            />
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-10 p-3">
              <div className="">
                <p className="font-conthrax text-[8px] font-semibold">
                  {" "}
                  PLACES 4-10
                </p>
                <p className="font-vcr text-[22px]">$500.00</p>
                <p className="flex gap-1 items-center text-[8px] justify-center lg:justify-start">
                  <span className="inline-block h-[5px] w-[5px] rounded-full bg-white"></span>{" "}
                  DIGI
                </p>
              </div>
              <p className="font-vcr text-[12px]">
                *Win $500 worth of $DIGI coins each, based on $0.0500 listing
                price.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10  justify-between items-center text-center lg:text-right">
          <p className="font-cothrax ">STAY CONNECTED</p>

          <p className="font-vcr text-[12px] max-w-md text-center">
            The more your code is used, the closer you get to winning! Stay
            tuned for monthly winner announcements on our socials.
          </p>

          <div className="flex gap-5 items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
