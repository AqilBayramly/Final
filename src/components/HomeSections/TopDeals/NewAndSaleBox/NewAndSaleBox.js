import React from 'react'
import "./NewAndSaleBox.css"

function NewAndSaleBox() {
  return (
    <div>
                        <div>
            <div className='top__deals__new__box'>
                <p className='top__deals__box__text'>New</p>
            </div>

            <div className='top__deals__sale__box'>
            <p className='top__deals__box__text'>Sale</p>
            </div>
                </div>
    </div>
  )
}

export default NewAndSaleBox