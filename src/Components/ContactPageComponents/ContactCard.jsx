import React from 'react'
import '../../ComponentsCSS/ContactPageCSS/ContactCard.css'

function ContactCard(props) {
  return (
    <>
      <div className="contact-card-hero">
          <div className='contact-card'>
              <h1 className='contact-card-title'>
                  {props.title}
              </h1>
              <hr className='contact-card-hr'/>
              <p className='contact-card-p'>
                  {props.text}
                  <br />
                  <br />
                  Email:
                  <br />
                  {props.email}
                  <br />
                  <br />
                  Phone:
                  <br />
                  {props.phone}
              </p>
          </div>
      </div>
    </>
  )
}

export default ContactCard