import React from 'react'
import MiscHeader from '../Components/MiscComponents/MiscHeader'
import MiscFooter from '../Components/MiscComponents/MiscFooter'
import ContactInfoCard from '../Components/ContactPageComponents/ContactInfoCard'
import ContactForm from '../Components/ContactPageComponents/ContactForm'

function Contact() {
  return (
    <> 
      <MiscHeader />
      <ContactInfoCard />
      <ContactForm />
      <MiscFooter/>
    </>
  )
}

export default Contact