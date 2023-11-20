import React from 'react'
import '../../ComponentsCSS/ContactPageCSS/ContactInfoCard.css'

function ContactInfoCard() {
  return (
    <div className='contact-info-card'>
        <h1 className='contact-info-card-title'>
            Contact
        </h1>
        <hr className='contact-info-card-divider'/>
        <p className='contact-info-card-p'>
            Let's Keep In Touch!
        </p>
        <p className='contact-info-card-p'>
            Email:
            <br />
            admin@WhizDumb.com
        </p>
        <p className='contact-info-card-p'>
            Phone
            <br />
            (555) 444-666
        </p>
    </div>
  )
}

export default ContactInfoCard