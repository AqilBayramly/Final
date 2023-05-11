import React from 'react'
import "./FooterTopSection.css"

function FooterTopSection() {
  return (
        <div className='footer__top'>
          <div className='footer__logo'>
            <img src='https://demo.pocotheme.com/1/image/catalog/maza/svg/footer-logo2.svg' alt='...'></img>
          </div>
          <div>
            <h3 className='newsletter'>Newsletter</h3>
          </div>
            <div className="footer__input">
              <input type="email" className='footer__search__input' placeholder="Email ID"></input>
              <i className="fa-regular fa-envelope footer__envelope"></i>
              <button className="footer__btn" type="button" id="button-addon2">Subscribe</button>
          </div>

          <div className='footer__pay'>
            <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/app3-136x40.webp' alt='...'></img>
            <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/app2-136x40.webp' alt='...'></img>
          </div>
        </div>
  )
}

export default FooterTopSection