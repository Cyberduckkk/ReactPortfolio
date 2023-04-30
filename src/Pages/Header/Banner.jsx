import React from 'react';
import './banner.css';
import bannerimg from '../../../src/Saly-10.svg'
function Header() {
  return (
    <div className='banner-section' id='banner-main'>
      <div className="banner-main">
    <div className="banner-content">
      <h1>Hello, I'm  <span className='highlight-text text-primary2'>Sarvind Up,</span> <br />Profesional Web Designer</h1>
      <img src={bannerimg} className='banner-img'/>
    </div>
      </div>
  </div>
  )
}

export default Header
