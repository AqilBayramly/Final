import React from 'react'
import "./CartShow.css"

function CartShow(props) {
  const { setShowCartShop } = props;
  return (
    <div className='cart__show'>
      <div className='cart__show__menu'>
        <div className='cart__show__header'>
          <div className='cart__show__top'>
            <p>Cart</p>
            <i onClick={() => setShowCartShop(false)} class="fa-solid fa-xmark cart__show__x"></i>
          </div>
          <p className='cart__show__text'>Your shopping cart is empty!</p>
          <div className='cart__show__total'>
            <div>
              <p>Sub-Total:</p>
              <p className='cart__show__price'>$0.00</p>
            </div>
            <div className='cart__show__total__text'>
              <p>Total:</p>
              <p className='cart__show__price'>$0.00</p>
            </div>
          </div>
        </div>

        <div className='cart__show__footer'>
          <button className='btn btn-primary edit__cart__btn'>Edit cart<i className="fa-solid fa-arrow-right-long edit__right__icon"></i></button>
          <button className='btn btn-primary checkout'>Checkout<i className="fa-solid fa-arrow-right-long checkout__right__icon"></i></button>
        </div>
      </div>
    </div>
  )
}

export default CartShow