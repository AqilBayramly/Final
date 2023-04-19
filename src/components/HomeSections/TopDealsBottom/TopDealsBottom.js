import React from 'react'
import "./TopDealsBottom.css"
import TopDealsNavbar from '../TopDealsNavbar/TopDealsNavbar'

function TopDealsBottom() {
  return (
    <div>
            <div className='top__deals__bottom__gray__line'>
        <div className='top__deals__bottom__content'>
            <div className='top__deals__bottom__navbar'>
                <a href='#!'>
            <div className='top__deals__bottom__nav'>
                    <span className='top__deals__bottom__nav__text'>New arrival</span>
            </div>
                </a>
                <a href='#!'>
            <div className='top__deals__bottom__nav'>
                    <span className='top__deals__bottom__nav__text'>Popular</span>
            </div>
                </a>
                <a href='#!'>
            <div className='top__deals__bottom__nav'>
                    <span className='top__deals__bottom__nav__text'>Best seller</span>
            </div>
                </a>
                <a href='#!'>
            <div className='top__deals__bottom__nav'>
                    <span className='top__deals__bottom__nav__text'>On Sale</span>
            </div>
                </a>
            </div>

        </div>
            <TopDealsNavbar></TopDealsNavbar>

    </div>
    </div>
  )
}

export default TopDealsBottom