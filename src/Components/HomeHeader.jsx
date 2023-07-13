import React from 'react'
import '../ComponentsCSS/HomeHeader.css'

function Header() {
  return (
    <div className='header-container'>
        <div className='site-logo-container'>
          <img className='site-logo' src='/assets/site-logo.svg'/>
          <h1 className='site-title'>WHIZDUMB</h1>
        </div>
        <div className='menu-container'>
          <h1 className='menu-title'>MENU</h1>
          <img className='hamburger-menu-icon' src='/assets/hamburger-menu-icon.svg'/>
        </div>
    </div>
  )
}

export default Header