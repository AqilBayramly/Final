import React from 'react'
import "./MyAccountSections.css"
import MyAccountLeft from './MyAccountLeft/MyAccountLeft'
import MyAccountTop from './MyAccountTop/MyAccountTop'
import MyAccountRight from './MyAccountRight/MyAccountRight'

function MyAccountSections() {
  return (
    <div className='account__page__content'>
        <MyAccountTop/>
        <div className='account__left__right__content'>
        <MyAccountLeft/>
        <MyAccountRight/>
        </div>
    </div>
  )
}

export default MyAccountSections