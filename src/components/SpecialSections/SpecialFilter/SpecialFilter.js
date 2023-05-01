import React from 'react'
import "./SpecialFilter.css"

function SpecialFilter() {
  return (
    <div>
        <div className='filter__box'>
            <div className='filter__top'>
                <h4>Filter</h4>
                <i className="fa-solid fa-circle-chevron-down"></i>
            </div>
            <div className='filter__price'>
                <h6>PRICE</h6>
                <i className="fa-solid fa-angle-up"></i>
            </div>

            <div className="range__card">
        <div className="range__slider">
          <input type="range" className="min__price" value="100" min="0" max="0" step="5"></input>
          <input type="range" className="max__price" value="250" min="10" max="50" step="5"></input>
        </div>
        <div className="price__content">
        <div className='value__box'>
          <p id="min__value">50</p>
        </div>
        <p>to</p>
        <div className='value__box'>
          <p id="max__value">50000</p>
        </div>
      </div>
      </div>

        </div>
    </div>
  )
}

export default SpecialFilter