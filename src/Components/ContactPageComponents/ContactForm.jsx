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
        <div className='contact-form-top-fields'>
            <ContactFormField label='Name' size='small' location='left' multiline={false}/>
            <ContactFormField label='Email' size='small' location='right' multiline={false}/>
        </div>
        <br />
        <div className='contact-form-bottom-field'>
            <ContactFormField label='Message' size='medium' multiline={true}/>
        </div>
        <Button text='Submit' className='contact-form-btn'/>
    </div>
  )
}

export default ContactForm