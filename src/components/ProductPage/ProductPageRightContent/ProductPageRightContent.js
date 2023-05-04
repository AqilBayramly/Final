import React from 'react'
import "./ProductPageRightContent.css"
import ProductRightTop from './ProductRightTop/ProductRightTop'
import ProductRightPriceContent from './ProductRightPriceContent/ProductRightPriceContent'
import ProductRightBottom from './ProductRightBottom/ProductRightBottom'

function ProductPageRightContent() {
  return (
    <div className='product__right__all_content'>
        <ProductRightTop/>
        <ProductRightPriceContent/>
        {/* <ProductRightBottom/> */}
    </div>
  )
}

export default ProductPageRightContent