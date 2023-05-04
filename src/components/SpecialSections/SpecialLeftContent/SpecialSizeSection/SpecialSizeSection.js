import React from 'react'
import "./SpecialSizeSection.css"

function SpecialSizeSection() {
  return (
    <div>
      <div className='special__size__content'>
        <div className='special__size__top'>
                <h6>SIZE</h6>
                <i className="fa-solid fa-angle-up"></i>
        </div>
        <div className='special__size__boxes'>
          <div className='special__size__box'>S</div>
          <div className='special__size__box'>M</div>
          <div className='special__size__box'>L</div>
          <div className='special__size__box'>XL</div>
          <div className='special__size__box'>XXL</div>
        </div>

      </div>
    </div>
  )
}

export default SpecialSizeSection