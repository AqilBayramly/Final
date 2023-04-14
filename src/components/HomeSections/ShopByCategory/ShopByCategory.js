import React from 'react'
import "./ShopByCategory.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';


import "swiper/css";
import "swiper/css/pagination";


import { Pagination,Navigation } from "swiper";

function ShopByCategory() {
  return (
    <div >
        <div className='gray__line'>
            <h4>Shop by category</h4>
            <>
      <Swiper
        slidesPerView={6}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Navigation,Autoplay]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/5-132x132.webp'></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/5-132x132.webp'></img>
          </a>
        </SwiperSlide>        <SwiperSlide>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/5-132x132.webp'></img>
          </a>
        </SwiperSlide>        <SwiperSlide>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/5-132x132.webp'></img>
          </a>
        </SwiperSlide>        <SwiperSlide>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/5-132x132.webp'></img>
          </a>
        </SwiperSlide>        <SwiperSlide>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/5-132x132.webp'></img>
          </a>
        </SwiperSlide>        <SwiperSlide>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/5-132x132.webp'></img>
          </a>
        </SwiperSlide>        <SwiperSlide>
          <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/category/5-132x132.webp'></img>
          </a>
        </SwiperSlide>
      </Swiper>
    </>

        </div>


    </div>
  )
}

export default ShopByCategory