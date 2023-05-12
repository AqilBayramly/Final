import React from 'react'
import "./DealOfDay.css"
import SwiperDealOfDay from './SwiperDealOfDay/SwiperDealOfDay'


function DealOfDay() {
  return (
        <div className='deal__of__day__content'>
            <div className='deal__of__day__photos'>
                <a href='#!'>
              <div className='dod__left__right__photo'>
                <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/side-banner3-380x700.webp' alt='iMac'></img>
              </div>
                </a>
                <SwiperDealOfDay></SwiperDealOfDay>
                  <a href='#!'>
                <div className='dod__left__right__photo'>
                <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/side-banner4-380x700.webp' alt='...'></img>
                </div>
                  </a>
            </div>

        </div>
  )
}

export default DealOfDay