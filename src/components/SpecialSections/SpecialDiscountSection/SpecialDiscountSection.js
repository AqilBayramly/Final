import React from 'react'
import "./SpecialDiscountSection.css"

function SpecialDiscountSection() {
  return (
    <div>
        <div className='special__discount__box'>
            <div className='special__discount__top'>
            <h6>DISCOUNT</h6>
                <i className="fa-solid fa-angle-up"></i>
            </div>
            <div className='discount__selections'>
                <div className='discount__choice'>
                    <div className='discount__choice__left'>
                    <div className='discount__check'></div>
                    <p>10% off or more</p>
                    </div>
                    <p>1</p>
                </div>
                <div className='discount__choice'>
                    <div className='discount__choice__left'>
                    <div className='discount__check'></div>
                    <p>20% off or more</p>
                    </div>
                    <p>2</p>
                </div>
                <div className='discount__choice'>
                    <div className='discount__choice__left'>
                    <div className='discount__check'></div>
                    <p>30% off or more</p>
                    </div>
                    <p>2</p>
                </div>
                <div className='discount__choice'>
                    <div className='discount__choice__left'>
                    <div className='discount__check'></div>
                    <p>40% off or more</p>
                    </div>
                    <p>2</p>
                </div>
                <div className='discount__choice'>
                <div className='discount__choice__left'>
                    <div className='discount__check'></div>
                    <p>50% off or more</p>
                    </div>
                    <p>1</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SpecialDiscountSection