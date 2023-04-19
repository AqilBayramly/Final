import React from 'react'
import "./TopDealsNavbar.css"
import ArrivalTimeSection from './ArrivalTimeSection/ArrivalTimeSection'
import ArrivalNewAndSaleBox from './ArrivalNewAndSaleBox/ArrivalNewAndSaleBox'
import ArrivalMenuBox from './ArrivalMenuBox/ArrivalMenuBox'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


import { Navigation } from "swiper";

function OnSaleNavTopDeals() {
  return (
    <div>
            <div>    <div className='new__arrival__swiper'>
    <>
  <Swiper spaceBetween={50} slidesPerView={4} navigation={true} modules={[Navigation]} className="mySwiper" >
    <SwiperSlide>
    <div className='new__arrival__box'>

<ArrivalNewAndSaleBox></ArrivalNewAndSaleBox>
<ArrivalMenuBox></ArrivalMenuBox>

<div className='arrival__pre__order'>Pre Order</div>
<a href='#!'>
<img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/13-285x318.webp' alt='...'></img>
<p className='top__deal__image__text'>Samsung Galaxy Tab 10.1</p>
</a>
<div className='star__and__price'>

<div>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
</div>
<span className='top__deals__new__price'>$199.99 </span>
</div>
</div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='new__arrival__box'>

<ArrivalNewAndSaleBox></ArrivalNewAndSaleBox>
<ArrivalTimeSection></ArrivalTimeSection>
<ArrivalMenuBox></ArrivalMenuBox>
<a href='#!'>
<img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/18-285x318.webp' alt='...'></img>
<p className='top__deal__image__text'>iPod Classic</p>
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
    <div className='new__arrival__box'>

<ArrivalNewAndSaleBox></ArrivalNewAndSaleBox>
<ArrivalTimeSection></ArrivalTimeSection>
<ArrivalMenuBox></ArrivalMenuBox>
<a href='#!'>
<img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/11-285x318.webp' alt='...'></img>
<p className='top__deal__image__text'>HP LP3065</p>
</a>
<div className='star__and__price'>

<div>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
</div>
<span className='top__deals__new__price'>$65.00 </span>
<span className='top__deals__old__price'> $110.00</span>
</div>
</div>
    </SwiperSlide>

    <SwiperSlide>
    <div className='new__arrival__box'>

<ArrivalNewAndSaleBox></ArrivalNewAndSaleBox>
<ArrivalMenuBox></ArrivalMenuBox>
<a href='#!'>
<img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/6-285x318.webp' alt='...'></img>
<p className='top__deal__image__text'>Sony VAIO</p>
</a>
<div className='star__and__price'>

<div>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
</div>
<span className='top__deals__new__price'>$1000.00 </span>
</div>
</div>
    </SwiperSlide>

    <SwiperSlide>
    <div className='new__arrival__box'>

<ArrivalNewAndSaleBox></ArrivalNewAndSaleBox>
<ArrivalMenuBox></ArrivalMenuBox>
<a href='#!'>
<img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/20-285x318.webp' alt='...'></img>
<p className='top__deal__image__text'>MacBook Pro</p>
</a>
<div className='star__and__price'>

<div>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
</div>
<span className='top__deals__new__price'>$2099.00 </span>
</div>
</div>
    </SwiperSlide>

    <SwiperSlide>
    <div className='new__arrival__box'>

<ArrivalNewAndSaleBox></ArrivalNewAndSaleBox>
<ArrivalMenuBox></ArrivalMenuBox>
<a href='#!'>
<img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/17-285x318.webp' alt='...'></img>
<p className='top__deal__image__text'>MacBook Air</p>
</a>
<div className='star__and__price'>

<div>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
</div>
<span className='top__deals__new__price'>$1299.00 </span>
</div>
</div>
    </SwiperSlide>

    <SwiperSlide>
    <div className='new__arrival__box'>

<ArrivalNewAndSaleBox></ArrivalNewAndSaleBox>
<ArrivalTimeSection></ArrivalTimeSection>
<ArrivalMenuBox></ArrivalMenuBox>
<a href='#!'>
<img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/9-285x318.webp' alt='...'></img>
<p className='top__deal__image__text'>MacBook</p>
</a>
<div className='star__and__price'>

<div>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
</div>
<span className='top__deals__new__price'>$300.00 </span>
<span className='top__deals__old__price'> $525.00</span>
</div>
</div>
    </SwiperSlide>

            <SwiperSlide>
    <div className='new__arrival__box'>

<ArrivalNewAndSaleBox></ArrivalNewAndSaleBox>
<ArrivalTimeSection></ArrivalTimeSection>
<ArrivalMenuBox></ArrivalMenuBox>
<a href='#!'>
<img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/16-285x318.webp' alt='...'></img>
<p className='top__deal__image__text'>Apple Cinema 30"</p>
</a>
<div className='star__and__price'>

<div>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
</div>
<span className='top__deals__new__price'>$89.00 </span>
<span className='top__deals__old__price'> $129.00</span>
</div>
</div>
    </SwiperSlide>

    <SwiperSlide>
    <div className='new__arrival__box'>

<ArrivalNewAndSaleBox></ArrivalNewAndSaleBox>
<ArrivalMenuBox></ArrivalMenuBox>
<a href='#!'>
<img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/3-285x318.webp' alt='...'></img>
<p className='top__deal__image__text'>iMAC</p>
</a>
<div className='star__and__price'>

<div>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
</div>
<span className='top__deals__new__price'>$180.00 </span>
</div>
</div>
    </SwiperSlide>

    <SwiperSlide>
    <div className='new__arrival__box'>

<ArrivalNewAndSaleBox></ArrivalNewAndSaleBox>
<ArrivalTimeSection></ArrivalTimeSection>
<ArrivalMenuBox></ArrivalMenuBox>
<a href='#!'>
<img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/2-285x318.webp' alt='...'></img>
<p className='top__deal__image__text'>Samsung SyncMaster 941BW</p>
</a>
<div className='star__and__price'>

<div>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
</div>
<span className='top__deals__new__price'>$85.00 </span>
<span className='top__deals__old__price'> $130.99</span>
</div>
</div>
    </SwiperSlide>

    <SwiperSlide>
    <div className='new__arrival__box'>

<ArrivalNewAndSaleBox></ArrivalNewAndSaleBox>
<ArrivalTimeSection></ArrivalTimeSection>
<ArrivalMenuBox></ArrivalMenuBox>
<a href='#!'>
<img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/4-285x318.webp' alt='...'></img>
<p className='top__deal__image__text'>Canon EOS 5D</p>
</a>
<div className='star__and__price'>

<div>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
</div>
<span className='top__deals__new__price'>$114.00 </span>
</div>
</div>
    </SwiperSlide>
  </Swiper>
</>
</div></div>
    </div>
  )
}

export default OnSaleNavTopDeals