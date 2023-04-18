import React from 'react'
import "./MenuBox.css"

function MenuBox() {
  return (
    <div>
        <div className='yellow__box'>
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

export default MenuBox