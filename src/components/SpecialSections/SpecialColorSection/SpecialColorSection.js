import React from 'react'
import "./SpecialColorSection.css"

function SpecialColorSection() {
  return (
    <div>
      <div className='special__color__box'>
        <div className='special__color__top'>
          <h6>COLOR</h6>
          <i className="fa-solid fa-angle-up"></i>
        </div>
        <div className='color__boxes'>
          <div className='color__boxes1'>
            <div className='color__box color__box__blue'></div>
            <div className='color__box color__box__green'></div>
            <div className='color__box color__box__orange'></div>
            <div className='color__box color__box__pink'></div>
            <div className='color__box color__box__red'></div>
          </div>
          <div className='color__boxes2'>
            <div className='color__box color__box__black'></div>
            <div className='color__box color__box__brown'></div>
            <div className='color__box color__box__yellow'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialColorSection