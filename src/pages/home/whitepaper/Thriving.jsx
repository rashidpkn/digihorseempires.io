import React from 'react'

export default function Thriving() {
  return (
    <div
        className="bg-no-repeat bg-contain bg-right"
        // style={{ backgroundImage: "url(/images/home/whitepaper/bg2.webp)" }}
      >
        <section className="min-h-screen w-[80%] mx-auto py-10 space-y-20">
          <div className="space-y-10">
            <h3 className="text-[4em] font-slant text-center">
              Building a Thriving Ecosystem
            </h3>
            <p className="font-vcr text-lg max-w-4xl">
              In DigiHorse Empires, we've developed a sustainable business model
              that ensures the longevity and prosperity of our platform while
              providing value to our players and stakeholders. Our revenue
              streams are diverse and designed to support ongoing development,
              innovation, and growth, while also rewarding players for their
              participation and contributions
            </p>
          </div>

            <div className="bg-[#53cc5e30] w-full p-5 rounded-md">
                <h3 className="text-[2em] font-slant">Key Features</h3>
                <div className="grid grid-cols-2 gap-16 font-vcr mt-16">
                    <p>Race Entry Fees:
Players pay entry fees to participate in
races, contributing to the prize pool and
generating revenue for the platform.
These fees are essential for organizing
events, maintaining racing
infrastructure, and supporting prize
distributions.
</p>
                    <p>Transaction Fees:
Every transaction conducted on the
platform incurs a small fee, which goes
towards covering operational costs,
maintaining blockchain infrastructure,
and ensuring the security and integrity
of the platform. These fees are essential
for facilitating smooth and secure
transactions for players.
</p>
                    <p>NFT Sales:
The sale of NFT horses and related assets
generates revenue for the platform, with
a percentage of each sale contributing to
platform maintenance, development, and
expansion. This revenue stream
incentivizes the creation and trading of
high-quality NFTs within the ecosystem.
</p>
                    <p>Breeding Fees:
Breeding NFT horses involves a fee that
players pay to access breeding services
and utilize advanced genetic algorithms.
This revenue stream incentivizes breeding
activities and contributes to the
sustainability of the breeding ecosystem.
</p>
                    <p></p>
                    <p>Ad Placements:
In-game advertising opportunities, such
as ad placements on race tracks and
within the game environment, provide
additional revenue streams for the
platform. Advertisers pay for exposure to
the engaged and active player base, while
players benefit from a richer and more
immersive gaming experience.
</p>
                </div>
                
            </div>

        </section>
      </div>
  )
}
