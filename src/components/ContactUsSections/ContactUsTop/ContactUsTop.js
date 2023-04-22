import React from 'react'
import "./ContactUsTop.css"

function ContactUsTop() {
  return (
    <div className='contact__top__bg'>
        <div className='contact__top_boxes'>
            <div className='contact__top_box'>
                <div className='contact__top_box__content'>
            <i class="fa-solid fa-phone-volume contact__top_box__icon"></i>
            <h5>Contact Phone Number</h5>
            <p>PS: +12 3456 7890</p>
            <p>HO: +12 0987 6543</p>
                </div>
            </div>

            <div className='contact__top_box'>
                <div className='contact__top_box__content'>
                <i class="fa-regular fa-envelope contact__top_box__icon"></i>
                <h5>Our Email Address</h5>
            <p>MR: admin@demo.com</p>
            <p>HR: demo@demo.com</p>
                </div>
            </div>

            <div className='contact__top_box'>
                <div className='contact__top_box__content'>
                <i class="fa-solid fa-location-dot contact__top_box__icon"></i>
                <h5>Our Location</h5>
            <p>692 London Road, London, NW36 7JA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUsTop