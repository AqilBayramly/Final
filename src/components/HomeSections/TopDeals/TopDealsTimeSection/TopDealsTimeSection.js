import React from 'react'
import "./TopDealsTimeSection.css"

function TopDealsTimeSection() {
  return (
    <div>
      <div className='all__sale__time'>
        <div className='top__deals__claimed'>
          <p>6% Claimed</p>
        </div>
        <div className='sale__time'>
          <div className='all__period'>
            <p className='sale__time__text'>Days</p>
            <div className='watch__sale'>
              <p className='sale__time__number'>100</p>
              <p>:</p>
            </div>
          </div>

          <div className='all__period'>
            <p className='sale__time__text'>Hours</p>
            <div className='watch__sale'>
              <p className='sale__time__number'>6</p>
              <p>:</p>
            </div>
          </div>

          <div className='all__period'>
            <p className='sale__time__text'>Minutes</p>
            <div className='watch__sale'>
              <p className='sale__time__number'>37</p>
              <p>:</p>
            </div>
          </div>

          <div className='all__period'>
            <p className='sale__time__text'>Seconds</p>
            <div className='watch__sale'>
              <p className='sale__time__number'>25</p>                                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopDealsTimeSection