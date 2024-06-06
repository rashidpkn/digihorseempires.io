import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/main'
import HomePage from '../pages/home'

export default function Router()  {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<HomePage/>} />
            <Route path='' element="About" />
            <Route path='' element="Team" />
            <Route path='' element="Pre-Sale" />
            <Route path='' element="Roadmap" />
            <Route path='' element="WhitePaper" />
            <Route path='' element="How TO BUY" />
            <Route path='' element="Roadmap" />
            <Route path='' element="Roadmap" />
            <Route path='' element="Roadmap" />

        </Route>
    </Routes>
    </BrowserRouter>
  )
}
