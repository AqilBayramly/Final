import React from 'react'
import "./AvailabilitySection.css"

function AvailabilitySection() {
    return (
        <div>
            <div className='availability__box'>
                <div className='availability__top'>
                    <h6>AVAILABILITY</h6>
                    <i className="fa-solid fa-angle-up"></i>
                </div>
                <div className='availability__input'>
                    <div className='availability__checkbox'>
                        <input className='checkbox__input' type='checkbox'></input>
                        <p>In stock</p>
                    </div>
                    <div>8</div>
                </div>
            </div>
        </div>
    )
}

export default AvailabilitySection