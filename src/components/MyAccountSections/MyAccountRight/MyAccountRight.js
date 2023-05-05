import React from 'react'
import "./MyAccountRight.css"

function MyAccountRight() {
  return (
    <div>
        <div className='account__nav__boxes'>
            <a href='#!'>
                <div className='account__nav__box'>
                <i class="fa-solid fa-right-to-bracket"></i>
                <span>Login</span>
                </div>
            </a>
            <a href='/account/register'>
                <div className='account__nav__box'>
                <i class="fa-solid fa-user-plus"></i>
                <span> Register</span>
                </div>
            </a>
            <a href='/account/forgotten-password'>
                <div className='account__nav__box'>
                <i class="fa-solid fa-key"></i>
                <span> Forgotten Password</span>
                </div>
            </a>
            <a href='#!'>
                <div className='account__nav__box'>
                <i class="fa-solid fa-user"></i>
                <span> My Account</span>
                </div>
            </a>
            <a href='#!'>
                <div className='account__nav__box'>
                <i class="fa-solid fa-address-book"></i>
                <span> Address Book</span>
                </div>
            </a>
            <a href='#!'>
                <div className='account__nav__box'>
                <i class="fa-solid fa-heart"></i>
                <span> Wish List</span>
                </div>
            </a>
            <a href='#!'>
                <div className='account__nav__box'>
                <i class="fa-solid fa-bell"></i>
                <span> Notification</span>
                </div>
            </a>
            <a href='#!'>
                <div className='account__nav__box'>
                <i class="fa-solid fa-box-open"></i>
                <span> Order History</span>
                </div>
            </a>
            <a href='#!'>
                <div className='account__nav__box'>
                <i class="fa-solid fa-download"></i>
                <span> Downloads</span>
                </div>
            </a>
            <a href='#!'>
                <div className='account__nav__box'>
                <i class="fa-solid fa-credit-card"></i>
                <span> Recurring payments</span>
                </div>
            </a>
            <a href='#!'>
                <div className='account__nav__box'>
                <i class="fa-solid fa-medal"></i>
                <span> Reward Points</span>
                </div>
            </a>
            <a href='#!'>
                <div className='account__nav__box'>
                <i class="fa-solid fa-rotate-left"></i>
                <span>  Returns</span>
                </div>
            </a>
            <a href='#!'>
                <div className='account__nav__box'>
                <i class="fa-solid fa-right-left"></i>
                <span>  Transactions</span>
                </div>
            </a>
            <a href='#!'>
                <div className='account__nav__box'>
                <i class="fa-solid fa-envelope"></i>
                <span>  Newsletter</span>
                </div>
            </a>

        </div>
    </div>
  )
}

export default MyAccountRight
