import React from 'react'
import "./ProductImageSection.css"

function ProductImageSection() {
  return (
    <div>
        <div className='product__images__box'>
            <div className='product__left__images'>
                <img className='product__left__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/16-132x166.webp' alt='...'></img>
                <img className='product__left__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/15-132x166.webp' alt='...'></img>
                <img className='product__left__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/13-132x166.webp' alt='...'></img>
                <img className='product__left__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/16-132x166.webp' alt='...'></img>
            </div>
            <img className='product__big__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/2-530x665.webp' alt='...'></img>
            <div className='product__images__box__heart'>
            <i class="fa-regular fa-heart"></i>
            </div>
        </div>
    </div>
  )
}

export default ProductImageSection