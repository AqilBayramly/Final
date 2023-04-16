import React from 'react'
import "./ShopByCategory.css"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


function ShopByCategory() {
  return (
    <div >
        <div className='gray__line'>
            <h4>Shop by category</h4>
        <div className='shop__category__swiper'>

            <>
      <Swiper
        slidesPerView={6}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
    
        modules={[]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='shop__category__images__swiper'>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/5-132x132.webp'></img>
            <p className='shop__category__text__swiper'>Windows</p>
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='shop__category__images__swiper'>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/1-132x132.webp'></img>
            <p className='shop__category__text__swiper'>Macs</p>
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='shop__category__images__swiper'>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/7-132x132.webp'></img>
            <p className='shop__category__text__swiper'>Desktops</p>
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='shop__category__images__swiper'>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/5-132x132.webp'></img>
            <p className='shop__category__text__swiper'>Monitors</p>
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='shop__category__images__swiper'>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/8-132x132.webp'></img>
            <p className='shop__category__text__swiper'>Printers</p>
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='shop__category__images__swiper'>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/9-132x132.webp'></img>
            <p className='shop__category__text__swiper'>Scanners</p>
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='shop__category__images__swiper'>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/6-132x132.webp'></img>
            <p className='shop__category__text__swiper'>Components</p>
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='shop__category__images__swiper'>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/7-132x132.webp'></img>
            <p className='shop__category__text__swiper'>Tablets</p>
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='shop__category__images__swiper'>
          <a href='#!'>
          <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/1-132x132.webp'></img>
            <p className='shop__category__text__swiper'>Cameras</p>
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='shop__category__images__swiper'>
          <a href='#!'>
          <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/8-132x132.webp'></img>
            <p className='shop__category__text__swiper'>MP3 Players</p>
          </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
        </div>


    </div>
    </div>
  )
}

export default ShopByCategory