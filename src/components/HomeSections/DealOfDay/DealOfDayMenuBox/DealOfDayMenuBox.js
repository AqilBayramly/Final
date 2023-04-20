import React from 'react'
import "./DealOfDayMenuBox.css"

function DealOfDayMenuBox() {
  return (
    <div>
                <div className='dod__yellow__box'>
            <div className='menu__boxes'>
                <div className='box__menu'>
                    <a href='#!'>
                <i class="fa-solid fa-cart-shopping box__menu__icon"></i>
                    </a>
                </div>
                <div className='box__menu'>
                    <a href='#!'>
                <i class="fa-solid fa-heart box__menu__icon"></i>
                    </a>
                </div>
                <div className='box__menu'>
                    <a href='#!'>
                <i class="fa-solid fa-eye box__menu__icon"></i>
                    </a>
                </div>
                <div className='box__menu'>
                    <a href='#!'>
                <i class="fa-solid fa-scale-balanced box__menu__icon"></i>
                    </a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default DealOfDayMenuBox