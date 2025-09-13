import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/storeContext'

const Navbar = ({setShowLogin}) => {
    const [menu,setmenu]=useState("home");
    const {getTotalCartAmount}=useContext(StoreContext);

    
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="logo" className="logo"/></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setmenu ("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href='#exploremenu' onClick={()=>setmenu ("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href='#appdownload' onClick={()=>setmenu ("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setmenu ("contact-us")} className={menu==="contact-us"?"active":""}>Contact-us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="Search-icon" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="basket" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>SignIn</button>
        </div>
    </div>
  )
}

export default Navbar