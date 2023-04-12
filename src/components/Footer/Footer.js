import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='black__line'>
      <div className='black__line__content'>
        <div className='footer__top'>
          <div className='footer__logo'>
            <img src='https://demo.pocotheme.com/1/image/catalog/maza/svg/footer-logo2.svg' alt='...'></img>
          </div>

          <div className='footer__search'>
            <h3 className='newsletter'>Newsletter</h3>
            <div class="footer__input">
              <i class="fa-regular fa-envelope"></i>
              <input type="email" className='footer__search__input' placeholder="Email ID"></input>
              <button class="footer__btn" type="button" id="button-addon2">Subscribe</button>
            </div>
          </div>

          <div className='footer__pay'>
            <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/app3-136x40.webp' alt='...'></img>
            <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/app2-136x40.webp' alt='...'></img>
          </div>
        </div>

        <div className='footer__alltext'>
        <div className='footer__about'>
          <h6>ABOUT US</h6>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
        </div>

        <div className='my__account'>
        <h6>MY ACCOUNT</h6>
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
        <h6>QUICK LINKS</h6>
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
        <h6>GET IN TOUCH</h6>
        <p><i class="fa-solid fa-location-dot"></i>692 London Road, London, NW36 7JA</p>
        <p><i class="fa-solid fa-clock"></i>9:00 AM - 7:00PM</p>
        <p><i class="fa-solid fa-phone-flip"></i>Call us: 123456789</p>
        <p><i class="fa-solid fa-envelope"></i>demo@demo.com</p>
        <p><i class="fa-solid fa-fax"></i>Fax: 124357</p>
        </div>

        </div>

      </div>
    </div>
  )
}

export default Footer