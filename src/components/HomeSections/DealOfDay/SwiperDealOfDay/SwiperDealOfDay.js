import React from 'react'
import "./SwiperDealOfDay.css"
import DealOfDayMenuBox from '../DealOfDayMenuBox/DealOfDayMenuBox'
import DealOfDayNewBox from '../DealOfDayNewBox/DealOfDayNewBox'
import DealOfDaySaleBox from '../DealOfDaySaleBox/DealOfDaySaleBox'
import DealOfDayTime from '../DealOfDayTime/DealOfDayTime'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function SwiperDealOfDay() {
  return (
    <div>
                        <div className='deal__of__day__middle'>
                  <h3>Deal of the day</h3>
                  <>
      <Swiper loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <DealOfDayMenuBox></DealOfDayMenuBox>
                  <DealOfDayNewBox></DealOfDayNewBox>
                  <DealOfDaySaleBox></DealOfDaySaleBox>
                <DealOfDayTime></DealOfDayTime>
            <div className='deal__of__day__swiper__photo'>
              <a href='#!'>
              <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/2-388x434.webp' alt='...'></img>
              <p className='deal__of__day__image__text'>Samsung Galaxy Tab 10.1</p>
              </a>
                </div>
                <div className='deal__of__day__star__and__price'>
              <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
              <span className='deal__of__day__new__price'>$110.00 </span>
              <span className='deal__of__day__old__price'> $220.00</span>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <DealOfDayMenuBox></DealOfDayMenuBox>
                  <DealOfDayNewBox></DealOfDayNewBox>
                  <DealOfDaySaleBox></DealOfDaySaleBox>
                <DealOfDayTime></DealOfDayTime>
            <div className='deal__of__day__swiper__photo'>
              <a href='#!'>
              <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/3-388x434.webp' alt='...'></img>
              <p className='deal__of__day__image__text'>MacBook</p>
              </a>
                </div>
                <div className='deal__of__day__star__and__price'>
              <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
              <span className='deal__of__day__new__price'>$300.00 </span>
              <span className='deal__of__day__old__price'> $500.00</span>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <DealOfDayMenuBox></DealOfDayMenuBox>
                  <DealOfDayNewBox></DealOfDayNewBox>
                  <DealOfDaySaleBox></DealOfDaySaleBox>
                <DealOfDayTime></DealOfDayTime>
            <div className='deal__of__day__swiper__photo'>
              <a href='#!'>
              <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/9-388x434.webp' alt='...'></img>
              <p className='deal__of__day__image__text'>Nikon D300</p>
              </a>
                </div>
                <div className='deal__of__day__star__and__price'>
              <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
              </div>
              <span className='deal__of__day__new__price'>$159.00 </span>
              <span className='deal__of__day__old__price'> $270.00</span>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <DealOfDayMenuBox></DealOfDayMenuBox>
                  <DealOfDayNewBox></DealOfDayNewBox>
                  <DealOfDaySaleBox></DealOfDaySaleBox>
                <DealOfDayTime></DealOfDayTime>
            <div className='deal__of__day__swiper__photo'>
              <a href='#!'>
              <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/18-388x434.webp' alt='...'></img>
              <p className='deal__of__day__image__text'>iPod Classic</p>
              </a>
                </div>
                <div className='deal__of__day__star__and__price'>
              <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
              <span className='deal__of__day__new__price'>$80.00 </span>
              <span className='deal__of__day__old__price'> $100.00</span>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <DealOfDayMenuBox></DealOfDayMenuBox>
                  <DealOfDayNewBox></DealOfDayNewBox>
                  <DealOfDaySaleBox></DealOfDaySaleBox>
                <DealOfDayTime></DealOfDayTime>
            <div className='deal__of__day__swiper__photo'>
              <a href='#!'>
              <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/7-388x434.webp' alt='...'></img>
              <p className='deal__of__day__image__text'>iPod Nano</p>
              </a>
                </div>
                <div className='deal__of__day__star__and__price'>
              <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
              <span className='deal__of__day__new__price'>$65.00 </span>
              <span className='deal__of__day__old__price'> $150.00</span>
            </div>
        </SwiperSlide>

                <SwiperSlide>
        <DealOfDayMenuBox></DealOfDayMenuBox>
                  <DealOfDayNewBox></DealOfDayNewBox>
                  <DealOfDaySaleBox></DealOfDaySaleBox>
                <DealOfDayTime></DealOfDayTime>
            <div className='deal__of__day__swiper__photo'>
              <a href='#!'>
              <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/16-388x434.webp' alt='...'></img>
              <p className='deal__of__day__image__text'>Apple Cinema 30"</p>
              </a>
                </div>
                <div className='deal__of__day__star__and__price'>
              <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
              </div>
              <span className='deal__of__day__new__price'>$110.00 </span>
              <span className='deal__of__day__old__price'> $220.00</span>
            </div>
        </SwiperSlide>

      </Swiper>
    </>

                </div>
    </div>
  )
}

export default SwiperDealOfDay