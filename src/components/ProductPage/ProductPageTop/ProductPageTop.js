import React from 'react'
import "./ProductPageTop.css"

function ProductPageTop() {
    return (
        <div>
            <div className='product__page__gray_bg'>
                <div className='product__page__top'>
                    <img className='product__page__top__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/cat-full-banner-1920x200.webp' alt='...'></img>
                </div>
            </div>

            <div className='product__page__top__text'>
                <span className='product__page__home__icon'>
                    <a href='#!'>
                        <i class="fa-solid fa-house"></i>&nbsp;&nbsp;
                    </a>
                    /
                </span>
                <span className='software__link'>  
                    <a href='#!'>
                   &nbsp;Software 
                    </a>
                    </span>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                <span>HTC Touch HD</span>
            </div>
        </div>
    )
}

export default ProductPageTop