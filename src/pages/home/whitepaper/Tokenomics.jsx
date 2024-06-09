import React from "react";

export default function Tokenomics() {
  return (
    <div className="bg-no-repeat bg-right" style={{backgroundImage:'url(/images/home/whitepaper/bg4.jpg)'}}>
      <div className="bg-black/70">

      
      <section className="w-[80%] mx-auto py-10 space-y-3">
        <div className="space-y-1">
          <h3 className="text-[42px] 2xl:text-[56px] font-slant text-center">
          <span className='text-[#18ff04]'>Tokenomics</span> and Distribution
          </h3>
          <p className="font-vcr">
            DigiHorse Empires operates on a carefully designed tokenomics model,
            ensuring a balanced distribution of tokens to support the growth and
            sustainability of the ecosystem. With a total token supply of
            1,125,000,000 DHRS, the allocation is as follows:
          </p>
        </div>

        <div className="relative h-[80vh] font-vcr">
        <p className="max-w-lg absolute top-0 left-0"><span className="text-[#15e303]"> Presale (40%) </span>: A significant portion of the
token supply, totaling 450,000,000 DHRS, is
allocated for the presale phase. This allows
early supporters and investors to acquire
tokens at a favorable rate, providing
crucial funding for the project's initial
development and expansion.</p>

<p className="max-w-lg absolute top-0 right-0"><span className="text-[#15e303]"> Treasury (10%) </span>: A reserve of 112,500,000
DHRS tokens, equivalent to 10% of the total
supply, is allocated to the treasury. These
tokens are earmarked for strategic
partnerships, development initiatives, and
future expansion plans, providing financial
stability and flexibility for the project.</p>


<p className="max-w-xs absolute top-[50%] left-0 transform  -translate-y-1/2"><span className="text-[#15e303]">Team (15%)</span>: To incentivize and
reward the dedicated team
behind DigiHorse Empires,
168,750,000 DHRS tokens,
representing 15% of the total
supply, are allocated for team
members. This ensures alignment
of interests and encourages
continued commitment to the
project's success.
</p>

<p className="max-w-xs absolute top-[50%] right-0  transform  -translate-y-1/2"><span className="text-[#15e303]"> Marketing (10%) </span>: Effective
marketing and outreach are
essential for driving adoption
and engagement within the
community.
Therefore, 112,500,000 DHRS
tokens, accounting for 10% of the
total supply, are allocated for
marketing efforts to promote
awareness and attract users to
the platform.
</p>


<p className="max-w-lg absolute bottom-0 left-0"><span className="text-[#15e303]"> Liquidity (15%)</span>: Ensuring sufficient liquidity
is crucial for a thriving ecosystem and
seamless trading experience. Therefore,
168,750,000 DHRS tokens, comprising 15% of the
total supply, are allocated to liquidity pools
to facilitate trading and price stability on
supported exchanges.
</p>

<p className="max-w-lg absolute bottom-0 right-0"><span className="text-[#15e303]"> Rewards (10%)</span>: To incentivize user
participation and engagement on the platform,
112,500,000 DHRS tokens, representing 10% of
the total supply, are allocated for rewards.
These tokens are distributed to users for
various activities such as racing, breeding,
and staking, enhancing user retention and
loyalty.
</p>

      <div className="h-[17rem] w-[17rem] rounded-full  absolute inset-0 m-auto flex justify-center items-center ">
      <img src="/images/home/logo.webp" class="max-w-[100px]  logoAnim2" alt="DigiHorse" />
      <div className="w-12 h-12 absolute left-7 top-0">
        <img src="/images/home/whitepaper/arrow.png" className="rotate-[175deg]" alt="" />
      </div>
      <div className="w-12 h-12 absolute right-7 top-0">
        <img src="/images/home/whitepaper/arrow.png" className="rotate-[-100deg]" alt="" />
      </div>
      <div className="w-12 h-12 absolute left-0">
        <img src="/images/home/whitepaper/arrow.png" className="rotate-[127deg]" alt="" />
      </div>
      <div className="w-12 h-12 absolute right-0">
        <img src="/images/home/whitepaper/arrow.png" className="rotate-[-51deg]" alt="" />
      </div>
      <div className="w-12 h-12 absolute left-7 bottom-0">
        <img src="/images/home/whitepaper/arrow.png" className="rotate-[80deg]" alt="" />
      </div>
      <div className="w-12 h-12 absolute right-7 bottom-0">
        <img src="/images/home/whitepaper/arrow.png"  alt="" />
      </div>
      </div>

        </div>
      </section>
      </div>
    </div>
  );
}
