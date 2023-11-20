import React from 'react'
import '../../ComponentsCSS/ContactPageCSS/ContactFormField.css'

function ContactFormField(props) {
  return (
    <div className='contact-form-field-container'>
        <p className={`${props.location} contact-form-field-label`}>{props.label}</p>
        <input className={`${props.size} ${props.location} contact-form-field`} />
    </div>
  )
}

export default ContactFormField