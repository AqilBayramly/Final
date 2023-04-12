import React from 'react'
import "./TopSection.css";


function TopSection() {
  return (
    <div>

      <div className='top_swiper'>
      <div className='left__photo'>
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
    <a href='#!'>
    <img src="https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/main-banner1-770x530.webp" className="d-block w-100" alt="..."></img>
    </a>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
    <a href='#!'>
    <img src="https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/main-banner3-770x530.webp" className="d-block w-100" alt="..."></img>
    </a>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
    <a href='#!'>
    <img src="https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/main-banner2-770x530.webp" className="d-block w-100" alt="..."></img>
    </a>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>

      <div className='right__photo'>
        <a href='#!'>
        <img className='right__photo__top' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/side-banner1-370x250.webp'alt='...'></img>
        </a>
        <a href='#!'>
        <img className='right__photo__bottom' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/side-banner2-370x250.webp'alt='...'></img>
        </a>
      </div>
      </div>
      
      <div className='top__section__text'>
      <i className="fa-solid fa-truck"></i>
        <h4>Free Shipping Order Over $99</h4>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        <div className='offer__until__box'>
        <span className='offer__until__text'>Offer Until 3 Days only</span>
        </div>
      </div>

    </div>
    
  )
}

export default TopSection