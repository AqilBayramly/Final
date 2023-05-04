import React from 'react'
import "./SpecialSearchSection.css"

function SpecialSearchSection() {
    return (
        <div>
            <div className='search__box'>
                <div className='search__top'>
                    <h6>SEARCH</h6>
                    <i className="fa-solid fa-angle-up"></i>
                </div>
                <input className='special__search__input' type='text' placeholder='Search'></input>

            </div>
        </div>
    )
}

export default SpecialSearchSection