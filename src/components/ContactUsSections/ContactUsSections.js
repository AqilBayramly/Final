import React from 'react'
import "./ContactUsSections.css"
import ContactUsTop from './ContactUsTop/ContactUsTop'
import ContactUsForm from './ContactUsForm/ContactUsForm'

function ContactUsSections() {
  return (
    <div className='contact__us__contain'>
        <ContactUsTop></ContactUsTop>
        <ContactUsForm></ContactUsForm>
    </div>
  )
}

export default ContactUsSections