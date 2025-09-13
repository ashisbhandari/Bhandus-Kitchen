import React from 'react'

import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footercontent">
                <div className="footercontent-left">
                    <div className="hi">
                        <img src={assets.logo} alt="logo of company" />
                        <p>Bhandu's Kitchen</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aperiam quisquam! Recusandae similique ullam commodi enim earum. Aliquid saepe aut deleniti minus? Itaque deleniti consectetur, aliquam dolorem esse ea cupiditate?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footercontent-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>
                <div className="footercontent-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+977 9824*******</li>
                        <li>bhanduskitchen@gmail.com</li>
                    </ul>

                </div>
            </div>

            <hr />
            <p className="footer-copyright">Copyricht 2025 Bhanduskitchen.com-All Right Reserved. </p>
        </div>
    )
}

export default Footer
