import React from 'react'
import "./SpecialSections.css"
import SpecialTop from './SpecialTop/SpecialTop'
import SpecialFilter from './SpecialFilter/SpecialFilter'
import ManufacturerSection from './ManufacturerSection/ManufacturerSection'
import SpecialSearchSection from './SpecialSearchSection/SpecialSearchSection'
import SpecialColorSection from './SpecialColorSection/SpecialColorSection'
import AvailabilitySection from './AvailabilitySection/AvailabilitySection'
import SpecialSizeSection from './SpecialSizeSection/SpecialSizeSection'
import SpecialDiscountSection from './SpecialDiscountSection/SpecialDiscountSection'
import SpecialRatingSection from './SpecialRatingSection/SpecialRatingSection'
import SpecialNav from './SpecialNav/SpecialNav'

function SpecialSections() {
  return (
    <div className='special__all__content'>
        <SpecialTop/>
        <div className='special__filter__and__content'>
          <div className='special__left__content'>
        <SpecialFilter/>
        <ManufacturerSection/>
        <SpecialSearchSection/>
        <SpecialColorSection/>
        <AvailabilitySection/>
        <SpecialSizeSection/>
        <SpecialDiscountSection/>
        <SpecialRatingSection/>
          </div>
        <SpecialNav/>
        </div>



        
    </div>
  )
}

export default SpecialSections