import React from 'react'
import { Swiper, SwiperSlide, } from "swiper/react";
import { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./LeftTopSection.css";
import { Pagination, Navigation } from "swiper";

function LeftTopSection() {
  return (
    <div>
      <div className='top_swiper'>
        <div className='left__photo'>
          <>
            <Swiper
              pagination={{
                type: "progressbar",
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
              loop={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <a href='#!'>
                <img alt='...' className='swiper__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/main-banner1-770x530.webp'></img>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href='#!'>
                <img alt='...' className='swiper__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/main-banner3-770x530.webp'></img>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href='#!'>
                <img alt='...' className='swiper__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/main-banner2-770x530.webp'></img>
                </a>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  )
}

export default LeftTopSection