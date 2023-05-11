import React from 'react'
import "./SearchMenuShow.css"

function SearchMenuShow(props) {
  const { setsearchMenuShow } = props;

  return (
    <div className='search__menu__show__display'>
        <div className='search__menu__show'>
            <div className='search__menu__show__header'>
                <h5>Quick Links</h5>
            <i onClick={() => setsearchMenuShow(false)} class="fa-solid fa-xmark cart__show__x"></i>
            </div>
            <div className='search__menu__show__content'>
                <a href='#!' className='search__menu__show__text'>
                <div className='menu__show__icon'>
                <i class="fa-solid fa-tags"></i>
                </div>
                    <span>Special</span>
                </a>

                <a href='#!' className='search__menu__show__text'>
                <div className='menu__show__icon'>
                <i class="fa-solid fa-address-card"></i>
                </div>
                    <span>Contact us</span>
                </a>

                <a href='#!' className='search__menu__show__text'>
                <div className='menu__show__icon'>
                <i class="fa-solid fa-heart"></i>
                </div>
                    <span> Wishlist</span>
                </a>

                <a href='#!' className='search__menu__show__text'>
                <div className='menu__show__icon'>
                <i class="fa-solid fa-scale-balanced"></i>
                </div>
                    <span>Compare</span>
                </a>

                <a href='#!' className='search__menu__show__text'>
                <div className='menu__show__icon'>
                <i class="fa-solid fa-user"></i>
                </div>
                    <span>My Account</span>
                </a>

                <a href='#!' className='search__menu__show__text'>
                <div className='menu__show__icon'>
                <i class="fa-solid fa-truck"></i>
                </div>
                    <span>Tracking</span>
                </a>

                <a href='#!' className='search__menu__show__text'>
                <div className='menu__show__icon'>
                <i class="fa-solid fa-newspaper"></i>
                </div>
                    <span>Blog</span>
                </a>

                <hr></hr>

            <div className='search__menu__links'>
                <a href='/'>Our App</a>
                <a href='/'>24 x 7 service</a>
                <div >
                    <img className='britain__flag' src='https://www.enchantedlearning.com/europe/britain/Flagbig.GIF'alt='britain'></img>
                    <a href='#!'>English</a>
                </div>
                <a href='/account'>My Account</a>
            </div>
            </div>
        </div>

    </div>
  )
}

export default SearchMenuShow