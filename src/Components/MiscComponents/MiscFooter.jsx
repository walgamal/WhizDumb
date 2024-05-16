import React from 'react'
import '../../ComponentsCSS/MiscCSS/MiscFooter.css'
import { Route, useLocation, Link } from "react-router-dom";

function MiscFooter() {
  const location = useLocation();

  return (
    <div className='misc-footer-container'>
        <div className='misc-social-icons-container'>
          <img className='misc-insta-icon' src='/assets/insta-icon.svg' alt='insta-icon' />
          <img className='misc-twitter-icon' src='/assets/twitter-icon.svg' alt='twitter-icon' />
          <img className='misc-facebook-icon' src='/assets/facebook-icon.svg' alt='facebook-icon' />
        </div>
        <div className='misc-menu-btns-container'>
          { location.pathname === '/instructions' ? <p><a className='misc-menu-btn-active' href='/instructions'>How to Play</a></p> : <p><a className='misc-menu-btn' href='/instructions'>How to Play</a></p> }
          { location.pathname === '/about' ? <p><a className='misc-menu-btn-active' href='/about'>About</a></p> : <p><a className='misc-menu-btn' href='/about'>About</a></p> }
          { location.pathname === '/contact' ? <p><a className='misc-menu-btn-active' href='/contact'>Contact</a></p> : <p><a className='misc-menu-btn' href='/contact'>Contact</a></p> }
        </div>
        <div className='misc-copyright-container'>
          <p className='misc-copyright-text'>
            ©{new Date().getFullYear()} WhizDumb
          </p>
        </div>
    </div>
  )
}

export default MiscFooter