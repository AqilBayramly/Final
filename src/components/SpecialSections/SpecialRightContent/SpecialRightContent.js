import React from 'react'
import "./SpecialRightContent.css"
import SpecialRightHeader from './SpecialRightHeader/SpecialRightHeader'
import SpecialImageContent from './SpecialImageContent/SpecialImageContent'

function SpecialRightContent() {
  return (
    <div className='special__right__content'>
        <SpecialRightHeader/>
        <SpecialImageContent/>
    </div>
  )
}

export default SpecialRightContent