import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
    const [menu,setmenu]=useState("home")
    
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="logo" className="logo"/>
        <ul className="navbar-menu">
            <li onClick={()=>setmenu ("home")} className={menu==="home"?"active":""}>Home</li>
            <li onClick={()=>setmenu ("menu")} className={menu==="menu"?"active":""}>Menu</li>
            <li onClick={()=>setmenu ("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</li>
            <li onClick={()=>setmenu ("contact-us")} className={menu==="contact-us"?"active":""}>Contact-us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="Search-icon" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="basket" />
                <div className="dot"></div>
            </div>
            <button>SignIn</button>
        </div>
    </div>
  )
}

export default Navbar