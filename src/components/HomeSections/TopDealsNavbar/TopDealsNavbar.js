import React from 'react'
import "./TopDealsNavbar.css"
import PopularNavTopDeals from './PopularNavTopDeals'

import ArrivalNavTopDeals from './ArrivalNavTopDeals'
import BestSellerNavTopDeals from './BestSellerNavTopDeals'
import OnSaleNavTopDeals from './OnSaleNavTopDeals'


function TopDealsNavbar() {
  return (
        <div>
    <ArrivalNavTopDeals></ArrivalNavTopDeals>
    {/* <PopularNavTopDeals></PopularNavTopDeals> */}
    {/* <BestSellerNavTopDeals></BestSellerNavTopDeals> */}
    {/* <OnSaleNavTopDeals></OnSaleNavTopDeals> */}
        </div>

  )
}

export default TopDealsNavbar