import React from 'react'
import TopSection from "../components/HomeSections/TopSection/TopSection"
import ShopByCategory from '../components/HomeSections/ShopByCategory/ShopByCategory'
import TopDeals from "../components/HomeSections/TopDeals/TopDeals"
import LatestProducts from "../components/HomeSections/LatestProducts/LatestProducts"
import FromBlog from "../components/HomeSections/FromBlog/FromBlog"
import ShopByBrand from '../components/HomeSections/ShopByBrand/ShopByBrand'




function Homepage() {
  return (
    <div>
      <TopSection/>
      <ShopByCategory/>
      <TopDeals/>
      <LatestProducts/>
      <FromBlog/>
      <ShopByBrand/>
    </div>
  )
}

export default Homepage