import React from 'react'
import "./SpecialSections.css"
import SpecialTop from './SpecialTop/SpecialTop'
import SpecialLeftNav from './SpecialLeftNav/SpecialLeftNav'
import SpecialLeftContent from './SpecialLeftContent/SpecialLeftContent'
import SpecialRightContent from './SpecialRightContent/SpecialRightContent'

function SpecialSections() {
  return (
    <div className='special__all__content'>
        <SpecialTop/>
        <div className='special__left__right__content'>
          <div>
          <div className='special__left__content'>
            <SpecialLeftContent/>
          </div>
        <SpecialLeftNav/>
          </div>
          <div>
            <SpecialRightContent/>
          </div>

          
        </div>



        
    </div>
  )
}

export default SpecialSections