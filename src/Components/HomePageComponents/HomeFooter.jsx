import React from 'react'
import '../../ComponentsCSS/HomePageCSS/HomeFooter.css'

function HomeFooter() {
  return (
    <div className='footer-container'>
        <div className='social-icons-container'>
          <img className='insta-icon' src='/assets/insta-icon.svg' alt='insta-icon' />
          <img className='twitter-icon' src='/assets/twitter-icon.svg' alt='twitter-icon' />
          <img className='facebook-icon' src='/assets/facebook-icon.svg' alt='facebook-icon' />
        </div>
        <div className='menu-btns-container'>   
          <p><a className='menu-btn' href='/instructions'>How to Play</a></p>
          <p><a className='menu-btn' href='/about' >About</a></p>
          <p><a className='menu-btn' href='/contact'>Contact</a></p>    
        </div>
        <div className='copyright-container'>
          <p className='copyright-text'>
            ©{new Date().getFullYear()} WhizDumb
          </p>
        </div>
    </div>
  )
}

export default HomeFooter