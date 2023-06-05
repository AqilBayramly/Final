import React from 'react'
import "./ContactUsForm.css"

function ContactUsForm() {
  return (
    <div>
    <div className='contact__form__contain'>
        <form>
            <div className='contact__form'>
            <h2>Contact Us</h2>
            <div className='contact__form__inputs'>
                <input className='form__input' type='text'placeholder='Your full name'required></input>
                <input className='form__input' type='email'placeholder='Email Address'required></input>
                <input className='form__input' type='text'placeholder='Subject'required></input>
                <textarea className='form__textarea' id="" cols="30" rows="5" placeholder="Enquiry" required></textarea>
                <button className='contact__fornm__btn'>Send Enquiry</button>
            </div>
            </div>
        </form>
        <div>
          <img className='contact__form__photo' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/store_image-570x570.webp' alt='...'></img>
        </div>
    </div>

    <div className='contact__form__map'>
      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.2675387005124!2d-0.3546248840492094!3d51.47160332114053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760ce008dc57f7%3A0x3639d84a59973c8a!2s692%20London%20Rd%2C%20Hounslow%20TW3%201PG%2C%20UK!5e0!3m2!1sen!2sin!4v1661600087015!5m2!1sen!2sin' title='...'></iframe>
    </div>
    </div>
  )
}

export default ContactUsForm