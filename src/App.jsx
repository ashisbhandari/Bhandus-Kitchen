import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import {Route, Router, Routes } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Cart from './pages/cart/Cart.jsx'
import PlaceOrder from './pages/placeorder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'

const App = () => {

  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
