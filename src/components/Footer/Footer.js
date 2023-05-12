import React from 'react'
import './Footer.css';
import FooterTopSection from './FooterTopSection/FooterTopSection';
import FooterMiddleSection from './FooterMiddleSection/FooterMiddleSection';
import FooterBottomSection from './FooterBottomSection/FooterBottomSection';

function Footer() {
  return (
    <div className='black__line'>
      <div className='black__line__content'>
        <FooterTopSection></FooterTopSection>
        <FooterMiddleSection></FooterMiddleSection>
        <FooterBottomSection></FooterBottomSection>
      </div>
    </div>
  )
}

export default Footer