import React from 'react'
import "./ShopByBrand.css"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

function ShopByBrand() {
  return (
    <div>
        <div className='shop__by__brand__content'>
            <h3>Shop by Brand</h3>

            <div className='shop__by__brand__swiper'>
            <>
      <Swiper
        slidesPerView={6}
        centeredSlides={false}
        spaceBetween={5}
        grabCursor={true}
    
        modules={[]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='shop__brand__images__swiper'>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/manufacturer/1-141x141.webp'></img>
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='shop__brand__images__swiper'>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/manufacturer/2-141x141.webp'></img>
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='shop__brand__images__swiper'>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/manufacturer/3-141x141.webp'></img>
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='shop__brand__images__swiper'>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/manufacturer/4-141x141.webp'></img>
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='shop__brand__images__swiper'>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/manufacturer/5-141x141.webp'></img>
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='shop__brand__images__swiper'>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/manufacturer/6-141x141.webp'></img>
          </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
    
            </div>
            <div className='end__of_season__sale__content'>
                <div className='end__of_season__sale__text'>
                <h3>End of season sale</h3>

                <div className='end__of_season__time'>
                <div>
                    <p>5</p>
                    <p>Hours</p>
                </div>
                <div>
                    <p>17</p>
                    <p>Minutes</p>
                </div>
                <div>
                    <p>43</p>
                    <p>Seconds</p>
                </div>
                </div>

                </div>
                <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/deal-banner-2400x518.webp' alt=''></img>
            </div>

        </div>
    </div>
  )
}

export default ShopByBrand