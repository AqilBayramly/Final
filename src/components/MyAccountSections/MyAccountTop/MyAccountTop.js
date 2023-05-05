import React from 'react'
import "./MyAccountTop.css"

function MyAccountTop() {
  return (
    <div>
                    <div className='account_top__text'>
                <span className='account__page__home__icon'>
                    <a href='/'>
                        <i class="fa-solid fa-house"></i>&nbsp;&nbsp;
                    </a>
                    /
                </span>
                <span className='account__link'>  
                    <a href='#!'>
                   &nbsp;Account  
                    </a>
                    </span>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                <span>Login</span>
            <hr></hr>
            </div>
    </div>
  )
}

export default MyAccountTop