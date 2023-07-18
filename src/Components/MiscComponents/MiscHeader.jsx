import React from 'react'
import '../../ComponentsCSS/MiscCSS/MiscHeader.css'

function MiscHeader() {
  return (
    <div className='misc-header-container'>
        <div className='misc-site-logo-container'>
          <img className='misc-site-logo' src='/assets/site-logo.svg' alt='site-logo' />
          <h1 className='misc-site-title'>WHIZDUMB</h1>
        </div>
    </div>
  )
}

export default MiscHeader