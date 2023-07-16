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
        {/* TODO: Hide buttons for phone/tablet */}
        <div className='menu-btns-container'>   
          <p><a className='menu-btn'>How to Play</a></p>
          <p><a className='menu-btn' href='/about' >About</a></p>
          <p><a className='menu-btn'>Contact</a></p>    
        </div>
        <div className='copyright-container'>
          <p className='copyright-text'>
            ©2023 WhizDumb
          </p>
        </div>
    </div>
  )
}

export default HomeFooter