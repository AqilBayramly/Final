import React from 'react'
import "./MyAccountLeft.css"

function MyAccountLeft() {
  return (
    <div className='account__left__content'>
        <div className='new__customer__box'>
            <h2>New Customer</h2>
            <h6>Register Account</h6>
            <span>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</span>
            <button className='new__costumer__btn' type='button'>Continue</button>
        </div>

        <div className='returning__customer__box'>
        <h2>Returning Customer</h2>
            <h6>I am a returning customer</h6>
            <form className='login__form'>
                <div className='account__mail__input__box'>
                <label>E-Mail Address
                <input type='email'placeholder='E-Mail Address' required></input>
                </label>
                </div>

                <div className='account__password__input__box'>
                <label>Password
                <input type='password'placeholder='Password' required></input>
                </label>
                <a href='/account/forgotten-password'>Forgotten Password</a>
                </div>
            <button className='returning__customer__box__btn' type='button'>Login</button>
            </form>
        </div>

    </div>
  )
}

export default MyAccountLeft