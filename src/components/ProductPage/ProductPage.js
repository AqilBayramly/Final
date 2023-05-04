import React from 'react'
import "./ProductPage.css"
import ProductPageTop from './ProductPageTop/ProductPageTop'
import TopDealsBottom from "../HomeSections/TopDealsBottom/TopDealsBottom"
import ProductPageLeftContent from './ProductPageLeftContent/ProductPageLeftContent'
import ProductPageRightContent from './ProductPageRightContent/ProductPageRightContent'
import ProductRightBottom from './ProductPageRightContent/ProductRightBottom/ProductRightBottom'


function ProductPage() {
  return (
    <div>
        <ProductPageTop/>
        <div className='product__page__content'>
            <div className='product__page__left__content'>
        <ProductPageLeftContent/>
        
            </div>
            <div className='product__page__right__content'>
                <ProductPageRightContent/>
                <ProductRightBottom/>
            </div>
        </div>

        <TopDealsBottom/>
    </div>
  )
}

export default ProductPage