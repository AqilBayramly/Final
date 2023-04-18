import React from 'react'
import "./FooterMiddleSection.css"

function FooterMiddleSection() {
  return (
    <div>
                <div className='footer__alltext'>
        <div className='footer__about'>
          <h6 className='footer__head'>ABOUT US</h6>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
        </div>

        <div className='my__account'>
        <h6 className='footer__head'>MY ACCOUNT</h6>
        <p>
        <a href='#!'>My order</a>
        </p>
        <p>
        <a href='#!'>Return</a>
        </p>
        <p>
        <a href='#!'>Support</a>
        </p>
        <p>
        <a href='#!'>Tracking</a>
        </p>
        <p>
        <a href='#!'>Wishlist</a>
        </p>
        </div>

        <div className='quick__links'>
        <h6 className='footer__head'>QUICK LINKS</h6>
        <p>
        <a href='#!'>About Us</a>
        </p>
        <p>
        <a href='#!'>Blog</a>
        </p>
        <p>
        <a href='#!'>Blog</a>
        </p>
        <p>
        <a href='#!'>Special</a>
        </p>
        <p>
        <a href='#!'>Testimonal</a>
        </p>
        </div>

        <div className='touch'>
        <h6 className='footer__head'>GET IN TOUCH</h6>
        <p><i class="fa-solid fa-location-dot"></i>692 London Road, London, NW36 7JA</p>
        <p><i class="fa-solid fa-clock"></i>9:00 AM - 7:00PM</p>
        <p><i class="fa-solid fa-phone-flip"></i>Call us: 123456789</p>
        <p><i class="fa-solid fa-envelope"></i>demo@demo.com</p>
        <p><i class="fa-solid fa-fax"></i>Fax: 124357</p>
        </div>

        </div>

    </div>
  )
}

export default FooterMiddleSection