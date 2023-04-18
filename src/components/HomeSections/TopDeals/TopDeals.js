import React from 'react'
import "./TopDeals.css"
import TopDealsTimeSection from './TopDealsTimeSection/TopDealsTimeSection'
import NewAndSaleBox from './NewAndSaleBox/NewAndSaleBox'
import MenuBox from './MenuBox/MenuBox'
import TopDealsBottom from './TopDealsBottom/TopDealsBottom'

function TopDeals() {
  return (
    <div>

        <div className='top__deals__content'>
        <h4 className='top__deals__text'>Top deals in this week</h4>

        <div className='top__deals__images'>
            <div className='top__deals__box'>

            <NewAndSaleBox></NewAndSaleBox>
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
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
            </div>
            <span className='top__deals__new__price'>$80.00 </span>
            <span className='top__deals__old__price'> $120.00</span>
            </div>
            </div>
            
            <div className='top__deals__box'>
            <NewAndSaleBox></NewAndSaleBox>
            <TopDealsTimeSection></TopDealsTimeSection>
            <MenuBox></MenuBox>

            <a href='#!'>
                <img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/3-222x248.webp' alt='...'></img>
            <p className='top__deal__image__text'>Nikon D300</p>
            </a>
            <div className='star__and__price'>
            <div>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
            </div>
            <span className='top__deals__new__price'>$159.00 </span>
            <span className='top__deals__old__price'> $270.00</span>
            </div>
            </div>

            <div className='top__deals__box'>
            <NewAndSaleBox></NewAndSaleBox>
            <TopDealsTimeSection></TopDealsTimeSection>
            <MenuBox></MenuBox>

            <a href='#!'>
                <img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/16-222x248.webp' alt='...'></img>
            <p className='top__deal__image__text'>iPod Touch</p>
            </a>
            <div className='star__and__price'>
            <div>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
            </div>
            <span className='top__deals__new__price'>$280.00 </span>
            <span className='top__deals__old__price'> $500.00</span>
            </div>
            </div>

            <div className='top__deals__box'>      
            <NewAndSaleBox></NewAndSaleBox>
            <TopDealsTimeSection></TopDealsTimeSection>
            <MenuBox></MenuBox>

            <a href='#!'>
                <img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/2-222x248.webp' alt='...'></img>
            <p className='top__deal__image__text'>iPod Nano</p>
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
            <span className='top__deals__old__price'> $150.00</span>
            </div>
            </div>

            <div className='top__deals__box'>
            <NewAndSaleBox></NewAndSaleBox>
            <TopDealsTimeSection></TopDealsTimeSection>
            <MenuBox></MenuBox>

            <a href='#!'>
                <img className='top__deal__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/product/7-222x248.webp' alt='...'></img>
            <p className='top__deal__image__text'>Apple Cinema 30"</p>
            </a>
            <div className='star__and__price'>
            <div>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
            </div>
            <span className='top__deals__new__price'>$110.00 </span>
            <span className='top__deals__old__price'> $220.00</span>
            </div>
            </div>
        </div>

        <div className='top__deals__bottom__images'>
            <a href='#!'>
            <img alt='...' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/cat-banner1-380x215.webp'></img>
            </a>
            <a href='#!'>
            <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/cat-banner2-380x215.webp' alt='...'></img>
            </a>
            <a href='#!'>
            <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/cat-banner3-380x215.webp' alt='...'></img>
            </a>

        </div>
        <TopDealsBottom></TopDealsBottom>
        </div>
    </div>
  )
}

export default TopDeals