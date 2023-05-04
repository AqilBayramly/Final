import React from 'react'
import ProductDescription from './ProductDescription/ProductDescription'
import ProductImageSection from './ProductImageSection/ProductImageSection'

function ProductPageLeftContent() {
  return (
    <div>
        <ProductImageSection/>
        <ProductDescription/>
    </div>
  )
}

export default ProductPageLeftContent