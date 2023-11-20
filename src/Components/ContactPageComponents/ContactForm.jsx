import React from 'react'
import '../../ComponentsCSS/ContactPageCSS/ContactForm.css'
import ContactFormField from './ContactFormField'
import Button from '../MiscComponents/Button'

function ContactForm() {
  return (
   <div className='contact-form'>
        <h1 className='contact-form-title'>
            Send Us a Message
        </h1>
        <hr className='contact-form-divider'/>
        <br />
        <div className='contact-form-top-fields'>
            <ContactFormField label='Name' size='small' location='left'/>
            <ContactFormField label='Email' size='small' location='right'/>
        </div>
        <br />
        <div className='contact-form-bottom-field'>
            <ContactFormField label='Message' size='medium'/>
        </div>
        <Button text='Submit' className='contact-form-btn'/>
    </div>
  )
}

export default ContactForm