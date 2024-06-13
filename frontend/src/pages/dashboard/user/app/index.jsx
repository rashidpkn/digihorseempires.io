import React from 'react'

export default function UserApp() {
  return (
    <div id="root">
  <div className="bg-white text-black">
    <div className="fixed top-0 z-50 w-screen">
      <nav className="dark:bg-gray-[#292929] mx-auto backdrop-blur-lg">
        <div className="hd:backdrop-blur-md mx-auto flex flex-col justify-between rounded-b-3xl md:flex-row">
          <div className="hd:mr-24 m-2 flex max-h-[60px] w-[250px] items-center justify-center hover:cursor-pointer">
            <img src="https://staging.digihorseempires.io/logo.png" className="res w-16" alt="DigiHorse ReFi Logo" />
            <h1 className="font-slant text-2xl">DigiHorse Empires</h1>
          </div>
          <div className="flex">
            <button data-collapse-toggle="navbar-default" type="button" className="focus:ring-primary absolute right-6 top-6 items-center rounded-lg p-2 pb-1 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-1 md:hidden" aria-controls="navbar-default" aria-expanded="false"><span className="material-symbols-rounded">menu</span></button>
          </div>
          <div className="relative block hidden w-full rounded-2xl px-4 backdrop-blur-md md:flex md:w-auto md:flex-1 lg:px-14" id="navbar-default">
            <ul className="mt-4 flex flex-col font-medium md:mr-8 md:mt-0 md:flex-row md:items-center md:space-x-8 md:p-0">
              <div className="hd:py-0 text-primary border-primary hover:text-primary ml-4 flex cursor-pointer items-center py-4 transition-all md:border-b">
                <span className="material-symbols-rounded mr-2 text-2xl sm:hidden lg:block">grid_view</span>
                <p className="font-normal">Dashboard</p>
              </div>
              <div className="hd:py-0 hover:text-primary ml-4 flex cursor-pointer items-center py-4 text-[#444] transition-all">
                <span className="material-symbols-rounded mr-2 text-2xl sm:hidden lg:block">sync_alt</span>
                <p className="font-normal">Transactions</p>
              </div>
            </ul>
            <ul className="flex flex-1 flex-col justify-end p-4 pt-0 font-medium md:mt-0 md:flex-row md:items-center md:p-0">
              <li className="hd:mt-0 flex items-center justify-between rounded-full">
                <div className="flex items-center rounded-full bg-white pr-2">
                  <img src="https://staging.digihorseempires.io/logo.png" className="w-12 grayscale" />
                  <div className="undefined relative">
                    <button className="flex w-[150px] items-center justify-between">
                      <p className="mr-2">0xe3...C2d3</p>
                      <span className="material-symbols-rounded">expand_more</span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1 className="w-full rounded-t-lg border-b border-gray-300 bg-white p-3 text-lg font-bold md:px-16">Dashboard</h1>
    </div>
    <main className="hd:pt-32 min-h-screen bg-[#f7f7ff] pb-12 pt-32 md:pt-44">
      <div className="min-h-screen px-4 md:px-16">
        <div className="hd:mt-12 mb-8 mt-10 gap-x-4 md:mt-0 md:flex">
          <div className="app-shadow hd:flex-row relative flex flex-1 flex-col items-center rounded-xl border-l-4 bg-white p-6 px-10 lg:items-start" style={{borderColor:" rgb(13, 202, 240)"}}>
            <img src="https://staging.digihorseempires.io/images/dashboard/supply_icon.png" className="mb-2 h-14 lg:mr-8" />
            <div>
              <p className="text-center text-base lg:text-left">Total Tokens</p>
              <p className="text-center text-xl font-semibold lg:text-left" style={{borderColor:" rgb(13, 202, 240)"}}>0 $DIGI</p>
            </div>
          </div>
          <div className="app-shadow hd:flex-row relative flex flex-1 flex-col items-center rounded-xl border-l-4 bg-white p-6 px-10 lg:items-start" style={{borderColor:"rgb(247, 39, 152)"}}>
            <img src="https://staging.digihorseempires.io/images/dashboard/purchased_icon.png" className="mb-2 h-14 lg:mr-8" />
            <div>
              <p className="text-center text-base lg:text-left">Purchased Tokens</p>
              <p className="text-center text-xl font-semibold lg:text-left" style={{borderColor:"rgb(247, 39, 152)"}}>0 $DIGI</p>
            </div>
          </div>
          <div className="app-shadow hd:flex-row relative flex flex-1 flex-col items-center rounded-xl border-l-4 bg-white p-6 px-10 lg:items-start" style={{borderColor:"rgb(245, 125, 31)"}}>
            <img src="https://staging.digihorseempires.io/images/dashboard/referral_icon.png" className="mb-2 h-14 lg:mr-8" />
            <div>
              <p className="text-center text-base lg:text-left">Referral Tokens</p>
              <p className="text-center text-xl font-semibold lg:text-left" style={{borderColor:"rgb(245, 125, 31)"}}>0 $DIGI</p>
            </div>
          </div>
          <div className="app-shadow hd:flex-row relative flex flex-1 flex-col items-center rounded-xl border-l-4 bg-white p-6 px-10 lg:items-start"  style={{borderColor:"rgb(21, 202, 32)"}}>
            <img src="https://staging.digihorseempires.io/images/dashboard/bonus_icon.png" className="mb-2 h-14 lg:mr-8" />
            <div>
              <p className="text-center text-base lg:text-left">Bonus Tokens</p>
              <p className="text-center text-xl font-semibold lg:text-left" style={{borderColor:"rgb(21, 202, 32)"}}>0 $DIGI</p>
            </div>
          </div>
        </div>
        <div className="gap-4 lg:flex">
          <div className="app-shadow text-textColor relative flex-1 rounded-lg bg-white">
            <h3 className="border-b py-4 pl-4 text-xl font-semibold md:pl-12">PURCHASE TOKEN</h3>
            <div className="p-4 md:p-12">
              <p className="mb-2">Enter the amount in USD to purchase tokens</p>
              <input placeholder="0.00" type="number" className="w-full rounded-lg bg-[#cccccc40] p-3 text-lg font-bold text-black outline-none placeholder:text-[#00000090] opacity-100" value=""  />
              <div className="relative mt-4">
                <p>Choose crypto token</p>
                <button className="placeholder:text-primary my-2 flex w-full items-center justify-between rounded-lg bg-[#cccccc20] p-3 text-lg text-black outline-none">
                  <p className="mr-2">Select Currency</p>
                  <span className="material-symbols-rounded">expand_more</span>
                </button>
              </div>
              <div className="mb-5 mt-0 flex flex-col md:mt-4 md:flex-row md:gap-8">
                <div>
                  <p className="">You get ≈</p>
                  <p className="text-4xl">0 $DIGI</p>
                </div>
                <div>
                  <p className="">Purchase bonus</p>
                  <p className="">0 $DIGI</p>
                </div>
              </div>
              <div className="justify-between gap-x-4 md:flex">
                <div className="bg-textColor from-primary to-secondary mb-4 flex w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r p-2 p-4 px-4 text-white opacity-30 md:mb-0">
                  <button className="flex items-center text-center"><p className="undefined font-semibold">Pay with Crypto</p></button>
                </div>
                <div className="bg-textColor from-primary to-secondary from-primary to-secondary text-textColor flex w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r bg-gradient-to-r p-2 p-4 px-4 pr-2 text-white opacity-30">
                  <button className="flex items-center text-center"><p className="undefined font-semibold">Pay with Web3 Wallet</p></button>
                </div>
              </div>
              <div className="bg-primary absolute left-0 top-0 -z-10 h-[216px] w-[216px] opacity-60 blur-[127px]"></div>
            </div>
          </div>
          <div>
            <div className="app-shadow text-primary relative my-4 mt-4 flex items-center justify-between rounded-lg bg-white p-8 py-4 lg:mt-0">
              <div>
                <p className="">Balance</p>
                <p className="from-primary bg-gradient-to-br to-gray-400 bg-clip-text text-4xl font-bold text-transparent">0 $DIGI</p>
              </div>
              <div>
                <p className="">Current fiat value</p>
                <p className="font-bold">0 USD</p>
              </div>
            </div>
            <div className="app-shadow hover:shadow-primary hoverBorder group relative mb-4 cursor-pointer overflow-hidden rounded-lg bg-white transition-all delay-75">
              <h3 className="border-b py-4 pl-4 text-xl md:pl-8">My Withdrawal Address</h3>
              <div className="p-4 md:p-8 md:pt-2">
                <p className="text-textLight_d text-sm">Update your base chain wallet address to receive your $DIGI tokens.</p>
                <div className="flex justify-between"><p className="my-2">Receiving Wallet :</p></div>
                <p className="mb-2 text-sm md:text-lg">0xe3171e8f2690318dcc1db664259fdb9a6485c2d3</p>
                <div className="bg-textColor from-primary to-secondary undefined flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r p-2 px-4 text-white">
                  <button className="flex items-center text-center"><p className="undefined font-semibold">Update Address</p></button>
                </div>
              </div>
            </div>
            <div className="app-shadow hover:shadow-primary group relative cursor-pointer overflow-hidden rounded-lg bg-white transition-all delay-75">
              <h3 className="border-b py-4 pl-4 text-xl md:pl-8">Refer a Friend</h3>
              <div className="p-4 md:p-8 md:pt-2">
                <p className="text-textLight_d text-sm">Refer a friend and earn DIGI tokens</p>
                <div className="mt-2 flex w-full items-center justify-between rounded-lg bg-[#cccccc40] p-2 text-white"><input placeholder="https://staging.digihorseempires.io/?ref=DIGICBA588" className="mr-2 w-full bg-transparent px-6 placeholder-gray-800 outline-none opacity-50" value=""  /><span className="material-symbols-rounded text-primary">content_copy</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <div className='fixed z-[9999] inset-4 pointer-events-none'></div>
</div>

  )
}
