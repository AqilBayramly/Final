import React from 'react'
import "./SpecialTop.css"

function SpecialTop() {
  return (
    <div>
    <div className='special__gray_bg'>
        <div className='special__top'>
            <a href='#!'>
                <img className='special__top__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/cat-full-banner-1920x200.webp' alt='...'></img>
            </a>
        </div>
    </div>

          <div className='special__top__text'>
              <span className='about__us__top__text'>
                  <a href='#!'>
                      <i class="fa-solid fa-house"></i>&nbsp;&nbsp;
                  </a>
                  /&nbsp; Special Offers
              </span>
              <p className='about__us__line'></p>
          </div>

    </div>
  )
}

export default SpecialTop