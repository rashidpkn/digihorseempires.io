import React, { useEffect, useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import MainLayout from '../layout/main'
import HomePage from '../pages/home'


import AOS from "aos";
import "aos/dist/aos.css";
import PrivacyPolicy from '../pages/Privacy Policy';
import HowToBuy from '../pages/How To Buy';
import HowToClaim from '../pages/How To Claim';
import UserApp from '../pages/dashboard/user/app';
import DashboardLayout from '../layout/dashboard';
// import Web3 from 'web3';



export default function Router()  {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    // const [signature, setSignature] = useState('');
    // const [account, setAccount] = useState('');
  
    // const signMessage = async () => {
    //   if (window.ethereum) {
    //     const web3 = new Web3(window.ethereum);
    //     try {
    //       await window.ethereum.enable();
    //       const accounts = await web3.eth.getAccounts();
    //       const account = accounts[0];
    //       setAccount(account);
  
    //       const message = "Hello, this is a message to sign";
    //       const signature = await web3.eth.personal.sign(web3.utils.utf8ToHex(message), account);
    //       setSignature(signature);
    //     } catch (error) {
    //       console.error("Error signing message: ", error);
    //     }
    //   } else {
    //     console.log("MetaMask is not installed");
    //   }
    // };

    // useEffect(() => {
      
    //   signMessage()
    // }, [])
    

  return (
    
    <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<HomePage/>} />
            <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
            <Route path='/how-to-buy' element={<HowToBuy/>} />
            <Route path='/how-to-claim' element={<HowToClaim/>} />
        </Route>

        <Route path='/dashboard' element={<DashboardLayout/>}>
          <Route path='user' element={<UserApp/>} />
        </Route>

    </Routes>

  )
}
