import React from 'react'
import '../../ComponentsCSS/MiscCSS/MiscFooter.css'

function MiscFooter() {
  return (
    <div className='misc-footer-container'>
        <div className='misc-social-icons-container'>
          <img className='misc-insta-icon' src='/assets/insta-icon.svg' alt='insta-icon' />
          <img className='misc-twitter-icon' src='/assets/twitter-icon.svg' alt='twitter-icon' />
          <img className='misc-facebook-icon' src='/assets/facebook-icon.svg' alt='facebook-icon' />
        </div>
        {/* TODO: Hide buttons for phone/tablets */}
        <div className='misc-menu-btns-container'>   
          <p><a className='misc-menu-btn' href='/instructions'>How to Play</a></p>
          <p><a className='misc-menu-btn' href='/about' >About</a></p>
          <p><a className='misc-menu-btn' href='/contact'>Contact</a></p>    
        </div>
        <div className='misc-copyright-container'>
          <p className='misc-copyright-text'>
            ©2023 WhizDumb
          </p>
        </div>
    </div>
  )
}

export default MiscFooter