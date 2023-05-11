import React from 'react'
import "./RightTopSection.css";


function RightTopSection() {
  return (
        <div className='right__photo'>
          <a href='#!'>
            <img className='right__photo__top' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/side-banner1-370x250.webp' alt='...'></img>
          </a>
          <a href='#!'>
            <div className='right__photo__bottom'>
              <img src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/Banner/side-banner2-370x250.webp' alt='...'></img>
            </div>
          </a>
        </div>
  )
}

export default RightTopSection