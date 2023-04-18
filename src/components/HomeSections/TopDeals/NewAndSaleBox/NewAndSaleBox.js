import React from 'react'
import "./NewAndSaleBox.css"

function NewAndSaleBox() {
  return (
    <div>
      <div>
        <div className='top__deals__new__box'>
          <span className='top__deals__box__text'>New</span>
        </div>

        <div className='top__deals__sale__box'>
          <span className='top__deals__box__text'>Sale</span>
        </div>
      </div>
    </div>
  )
}

export default NewAndSaleBox