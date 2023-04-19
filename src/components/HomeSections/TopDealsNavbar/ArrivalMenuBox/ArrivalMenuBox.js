import React from 'react'
import "./ArrivalMenuBox.css"

function ArrivalMenuBox() {
  return (
    <div>
                <div className='arrival__yellow__box'>
            <div className='arrival__menu__boxes'>
                <div className='arrival__box__menu'>
                    <a href='#!'>
                <i class="fa-solid fa-cart-shopping arrival__menu__icon"></i>
                    </a>
                </div>
                <div className='arrival__box__menu'>
                    <a href='#!'>
                <i class="fa-solid fa-heart arrival__menu__icon"></i>
                    </a>
                </div>
                <div className='arrival__box__menu'>
                    <a href='#!'>
                <i class="fa-solid fa-eye arrival__menu__icon"></i>
                    </a>
                </div>
                <div className='arrival__box__menu'>
                    <a href='#!'>
                <i class="fa-solid fa-scale-balanced arrival__menu__icon"></i>
                    </a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ArrivalMenuBox