import React from 'react'
import "./DealOfDayTime.css"

function DealOfDayTime() {
  return (
    <div>
                    <div className='deal__of__day__time__content'>
        <div className='deal__of__day__claimed'>
          <p>6% Claimed</p>
        </div>

        <div className='deal__of__day__time'>

          <div className='deal__of__day__period'>
            <p className='sale__time__text'>Days</p>
            <p className='sale__time__text'>Hours</p>
            <p className='sale__time__text'>Minutes</p>
            <p className='sale__time__text'>Seconds</p>
          </div>

          <div className='deal__of__day__sale'>
              <p className='sale__time__number'>17 &nbsp;&nbsp;:</p>
              <p className='sale__time__number'>6 &nbsp;&nbsp;:</p>
              <p className='sale__time__number'>37 &nbsp;&nbsp;:</p>
              <p className='sale__time__number'>25</p>                               
            </div>

        </div>

      </div>
    </div>
  )
}

export default DealOfDayTime