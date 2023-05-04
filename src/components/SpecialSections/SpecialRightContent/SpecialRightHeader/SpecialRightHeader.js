import React from 'react'
import "./SpecialRightHeader.css"

function SpecialRightHeader() {
    return (
        <div>
            <h3>Special Offers</h3>
            <div className='special__header__content'>
                <div className='special__header__left__select' >
                    <div className='special__header__table__icons'>
                        <i class="fa-solid fa-table-cells"></i>
                        <i class="fa-solid fa-table-list"></i>
                    </div>
                    <div>
                        <label>Show:</label>
                        <select className='special__select__box'>
                            <option>20</option>
                            <option>25</option>
                            <option>50</option>
                            <option>75</option>
                            <option>100</option>
                        </select>
                    </div>
                </div>
                <span className='special__compare'>Product Compare (0)</span>

                <div>
                        <label>Sort By:</label>
                        <select className='special__select__sort__box'>
                            <option>Default</option>
                            <option>Best sellers</option>
                            <option>Popular</option>
                            <option>Newest</option>
                            <option>Name (A - Z)</option>
                            <option>Name (Z - A)</option>
                            <option>Price (Low > High)</option>
                            <option>Price (High > Low)</option>
                            <option>Rating (Highest)</option>
                            <option>Rating (Lowest)</option>
                            <option>Model (A - Z)</option>
                            <option>Model (Z - A)</option>


                        </select>
                    </div>




            </div>
        </div>
    )
}

export default SpecialRightHeader