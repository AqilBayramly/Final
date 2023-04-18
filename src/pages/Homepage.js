import React from 'react'
import TopSection from '../components/HomeSections/TopSection/TopSection'
import ShopByCategory from '../components/HomeSections/ShopByCategory/ShopByCategory'
import TopDeals from '../components/HomeSections/TopDeals/TopDeals'
import ShopByBrand from '../components/HomeSections/ShopByBrand/ShopByBrand'
import FromBlog from '../components/HomeSections/FromBlog/FromBlog'


function Homepage() {
  return (
    <div>
      <TopSection></TopSection>
      <ShopByCategory></ShopByCategory>
      <TopDeals></TopDeals>
      <FromBlog></FromBlog>
      <ShopByBrand></ShopByBrand>
    </div>
  )
}

export default Homepage