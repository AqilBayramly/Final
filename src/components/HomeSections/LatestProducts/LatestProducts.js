import React from 'react'
import "./LatestProducts.css"
import TopDealsNewBox from '../TopDeals/TopDealsNewBox/TopDealsNewBox';
import TopDealsSaleBox from '../TopDeals/TopDealsSaleBox/TopDealsSaleBox';
import TopDealsTimeSection from '../TopDeals/TopDealsTimeSection/TopDealsTimeSection';
import MenuBox from '../TopDeals/MenuBox/MenuBox';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function LatestProducts() {
  return (
    <div>
        <div className='latest__products__contain'>
        <h3>Latest Products</h3>
        <div className='latest__products__swiper'>
        <>
      <Swiper
      slidesPerView={5}
      navigation={true}
      modules={[Navigation]}
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
        <div className='top__deals__box'>

<TopDealsNewBox></TopDealsNewBox>
<TopDealsSaleBox></TopDealsSaleBox>
<TopDealsTimeSection></TopDealsTimeSection>
<MenuBox></MenuBox>
<a href='#!'>
    <img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/2-222x248.webp' alt='...'></img>
<p className='top__deal__image__text'>HTC Touch HD</p>
</a>
<div className='star__and__price'>

<div>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
</div>
<span className='top__deals__new__price'>$80.00 </span>
<span className='top__deals__old__price'> $120.00</span>
</div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='top__deals__box'>

<TopDealsNewBox></TopDealsNewBox>
<TopDealsSaleBox></TopDealsSaleBox>
<TopDealsTimeSection></TopDealsTimeSection>
<MenuBox></MenuBox>
<a href='#!'>
    <img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/13-222x248.webp' alt='...'></img>
<p className='top__deal__image__text'>HTC Touch HD</p>
</a>
<div className='star__and__price'>

<div>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
</div>
<span className='top__deals__new__price'>$80.00 </span>
<span className='top__deals__old__price'> $120.00</span>
</div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='top__deals__box'>

<TopDealsNewBox></TopDealsNewBox>
<MenuBox></MenuBox>
<a href='#!'>
    <img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/18-222x248.webp' alt='...'></img>
<p className='top__deal__image__text'>HTC Touch HD</p>
</a>
<div className='star__and__price'>

<div>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
</div>
<span className='top__deals__new__price'>$80.00 </span>
</div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='top__deals__box'>

<TopDealsNewBox></TopDealsNewBox>
<TopDealsSaleBox></TopDealsSaleBox>
<TopDealsTimeSection></TopDealsTimeSection>
<MenuBox></MenuBox>
<a href='#!'>
    <img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/11-222x248.webp' alt='...'></img>
<p className='top__deal__image__text'>HTC Touch HD</p>
</a>
<div className='star__and__price'>

<div>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
</div>
<span className='top__deals__new__price'>$80.00 </span>
<span className='top__deals__old__price'> $120.00</span>
</div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='top__deals__box'>

<TopDealsNewBox></TopDealsNewBox>
<MenuBox></MenuBox>
<a href='#!'>
    <img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/6-222x248.webp' alt='...'></img>
<p className='top__deal__image__text'>HTC Touch HD</p>
</a>
<div className='star__and__price'>

<div>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
</div>
<span className='top__deals__new__price'>$80.00 </span>
</div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='top__deals__box'>

<TopDealsNewBox></TopDealsNewBox>
<TopDealsSaleBox></TopDealsSaleBox>
<TopDealsTimeSection></TopDealsTimeSection>
<MenuBox></MenuBox>
<a href='#!'>
    <img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/20-222x248.webp' alt='...'></img>
<p className='top__deal__image__text'>HTC Touch HD</p>
</a>
<div className='star__and__price'>

<div>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
</div>
<span className='top__deals__new__price'>$80.00 </span>
<span className='top__deals__old__price'> $120.00</span>
</div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='top__deals__box'>

<TopDealsNewBox></TopDealsNewBox>
<TopDealsSaleBox></TopDealsSaleBox>
<TopDealsTimeSection></TopDealsTimeSection>
<MenuBox></MenuBox>
<a href='#!'>
    <img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/17-222x248.webp' alt='...'></img>
<p className='top__deal__image__text'>HTC Touch HD</p>
</a>
<div className='star__and__price'>

<div>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
</div>
<span className='top__deals__new__price'>$80.00 </span>
<span className='top__deals__old__price'> $120.00</span>
</div>
</div>
        </SwiperSlide>

      </Swiper>
    </>
        </div>
        
        
        </div>
        </div>
  )
}

export default LatestProducts