import React from 'react'
import "./TopSection.css";
import LeftTopSection from './LeftTopSection/LeftTopSection';
import RightTopSection from './RightTopSection/RightTopSection';


function TopSection() {
  return (
    <>
      <div className='top'>
        <LeftTopSection></LeftTopSection>
        <RightTopSection></RightTopSection>
      </div>
      <div className='top__section__text'>
        <i className="fa-solid fa-truck"></i>
        <h4>Free Shipping Order Over $99</h4>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        <div className='offer__until__box'>
          <span className='offer__until__text'>Offer Until 3 Days only</span>
        </div>
      </div>
    </>


  )
}

export default TopSection