import React from 'react'
import "./ProductRightTop.css"





function ProductRightTop() {
  return (
    <div>
      <h3>HTC Touch HD</h3>
      <div className='star__with__text'>
        <div>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
        <div className='product__rating__number'>3/5</div>
        <div className='product__review'>3 reviews</div>
        <div className='product__code'>
          <span>Product Code:</span>
          <p>Product 1</p>
          </div>
      </div>

      <hr></hr>

      <div className='product__info__zone'>

      <div>
        <div className='product__info__text'>
          <p className='product__info__text__brand'>Brand:</p>
          <a href='#!'>HTC</a>
        </div>
        <div className='product__info__text'>
          <p className='product__info__text__brand'>Viewed:</p>
          <p>23040</p>
        </div>
        <div className='product__info__text'>
          <p className='product__info__text__brand'>Reward Points:</p>
          <p> 400</p>
        </div>
        <div className='product__info__text'>
          <p className='product__info__text__brand'>Availability:</p>
          <div className='stock__box'> In Stock</div>
        </div>
      </div>

      <a href='#!'>
        <img className='product__logo' src='https://demo.pocotheme.com/1/image/cache/catalog/demo/manufacturer/htc-70x70.webp' alt='...'></img>
      </a>
      </div>
      <hr></hr>



    </div>
  )
}

export default ProductRightTop