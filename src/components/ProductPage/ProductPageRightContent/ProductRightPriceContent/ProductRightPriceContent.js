import React from 'react'
import "./ProductRightPriceContent.css"


function ProductRightPriceContent() {
    return (
        <div>

        <div className='product__price__discount'>
            <div className='product__price__zone'>
                <span className='product__page__new__price'>$80.00 </span>
                <span className='product__page__old__price'> $120.00</span>
                <span className='product__page__discount__percentage'> -33%</span>
                <span className='product__page__question__icon'><i class="fa-solid fa-question"></i></span>
            </div>

            <div className='discount__progress__zone'>
                <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "3px" }}>
                    <div className="progress-bar" style={{ width: "6%" }}></div>
                </div>
                <div className='percentage__claimed__and__time'>
                    <span className='percentage__claimed'>6% Claimed</span>
                    <span>Ends in: 973d 07:19:39</span>
                </div>
            </div>
        </div>

        <div className='add__product__box'>
        <div className='add__product__zone'>
            <div className='quantity__add__product'>
                <div className='decrease__btn'><i class="fa-solid fa-circle-minus"></i></div>
                <div className='quantity__box'>1</div>
                <div className='increase__btn'><i class="fa-solid fa-circle-plus"></i></div>
            </div>
            <button className='add__btn'>ADD TO CART</button>
            <button className='buy__now__btn'>BUY NOW</button>
        </div>
        <div className='product__page__balanced__compare'><i class="fa-solid fa-scale-balanced scale__balanced3"></i>COMPARE THIS PRODUCT</div>
        </div>

        </div>
    )
}

export default ProductRightPriceContent