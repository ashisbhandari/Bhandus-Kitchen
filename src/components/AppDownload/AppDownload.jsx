import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='appdownlaod' id='appdownload'>
      <p> For Better Exprience in Mobile Please Download <br /> Bhandu's Kitchen App</p>
      <div className="appdownload-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
