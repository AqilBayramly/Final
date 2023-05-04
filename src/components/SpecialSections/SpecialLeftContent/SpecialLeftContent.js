import React from 'react'
import SpecialFilter from './SpecialFilter/SpecialFilter'
import ManufacturerSection from './ManufacturerSection/ManufacturerSection'
import SpecialSearchSection from './SpecialSearchSection/SpecialSearchSection'
import SpecialColorSection from './SpecialColorSection/SpecialColorSection'
import AvailabilitySection from './AvailabilitySection/AvailabilitySection'
import SpecialSizeSection from './SpecialSizeSection/SpecialSizeSection'
import SpecialDiscountSection from './SpecialDiscountSection/SpecialDiscountSection'
import SpecialRatingSection from './SpecialRatingSection/SpecialRatingSection'

function SpecialLeftContent() {
    return (
        <div>
            <SpecialFilter />
            <ManufacturerSection />
            <SpecialSearchSection />
            <SpecialColorSection />
            <AvailabilitySection />
            <SpecialSizeSection />
            <SpecialDiscountSection />
            <SpecialRatingSection />
        </div>
    )
}

export default SpecialLeftContent