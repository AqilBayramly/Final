import React from 'react'
import TopSection from '../components/HomeSections/TopSection/TopSection'
import ShopByCategory from '../components/HomeSections/ShopByCategory/ShopByCategory'
import TopDeals from '../components/HomeSections/TopDeals/TopDeals'

function Homepage() {
  return (
    <div>
      <TopSection></TopSection>
      <ShopByCategory></ShopByCategory>
      <TopDeals></TopDeals>
    </div>
  )
}

export default Homepage