import React from 'react'
import MiscHeader from '../Components/MiscComponents/MiscHeader'
import MiscFooter from '../Components/MiscComponents/MiscFooter'
import ContactCard from '../Components/ContactPageComponents/ContactCard'
import MessageFormCard from '../Components/ContactPageComponents/MessageFormCard'
import '../ComponentsCSS/ContactPageCSS/ContactPage.css' 

function Contact() {
  return (
    <>
      <MiscHeader />
      <div className='contact-page-card-container'>
        <ContactCard 
          title = 'Contact'
          text = { `Let's Keep In Touch!` }
          email = 'admin@WhizDumb.com'
          phone = '(555) 444-6666'
        />
        <MessageFormCard 
          title = 'Send Us a Message'
        />
      </div>
      <MiscFooter />
    </>
  )
}

export default Contact