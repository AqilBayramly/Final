import React from 'react'
import "./TopHeader.css"

function TopHeader() {
  return (
        <div className='top__header__content'>
            <div className='top__header__text'>
                <span>Buy one get one free on first order</span>
            <div className='top__header__links'>
                <a href='/'>Our App</a>
                <a href='/'>24 x 7 service</a>
                <div >
                    <img className='britain__flag' src='https://www.enchantedlearning.com/europe/britain/Flagbig.GIF'alt='britain'></img>
                    <a href='#!'>English</a>
                </div>
                <a href='/account'>My Account</a>
            </div>
            <div className="compare__wishlist compare__top__header">
          <div>
            <a className='top__header__compare__link' href="/compare">
              <i className="fa-solid fa-scale-balanced"></i> Compare
            </a>
          </div>

          <div>
            <a className='top__header__compare__link' href="#!">
              <i className="fa-regular fa-heart"></i> WishList
            </a>
          </div>
        </div>
            </div>

        </div> 
  )
}

export default TopHeader