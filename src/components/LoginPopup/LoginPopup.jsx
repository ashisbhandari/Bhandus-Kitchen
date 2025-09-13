import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login")
    return (
        <div className='loginpopup'>
            <form className='loginpopup-container'>
                <div className="loginpopup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="loginpopup-input">
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your Name Here' required />}

                    <input type="email" placeholder='Your Email Here' required />
                    <input type="password" placeholder='password' />
                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="loginpopup-condition">
                    <input type="checkbox" required />
                    <p>I Accept the organization Terms and condition & privacy policy of an organization</p>
                </div>
                {currState === "Login" ? <p>Create a new account ? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
                    :

                    <p>Already hav an account ? <span onClick={()=>setCurrState("Login")}>Click Here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
