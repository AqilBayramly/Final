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
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          530:{
            slidesPerView:2,
          },
          780:{
            slidesPerView:3
          },
          1000:{
            slidesPerView:4
          },
          1250:{
            slidesPerView:5
          },
          1500:{
            slidesPerView:6
          },
          1700:{
            slidesPerView:7
          }
        }}
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
                <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/deal-banner-2400x518.webp' alt=''></img>
                <div className='end__of_season__sale__text'>
                <h3>End of season sale</h3>

                <div className='end__of_season__time'>
                <div className='season__time__text'>
                    <span className='season__time__text__number'>5</span>
                    <span className='season__time__text__hours'>Hours</span>
                </div>
                <span className='season__time__two__points'>:</span>
                <div className='season__time__text'>
                    <span className='season__time__text__number'>17</span>
                    <span className='season__time__text__hours'>Minutes</span>
                </div>
                <span className='season__time__two__points'>:</span>
                <div className='season__time__text'>
                    <span className='season__time__text__number'>43</span>
                    <span className='season__time__text__hours'>Seconds</span>
                </div>
                </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default ShopByBrand