import React from 'react'
import "./ForgottenPasswordSection.css"
import MyAccountRight from '../MyAccountSections/MyAccountRight/MyAccountRight' 

function ForgottenPasswordSection() {
  return (
    <div className='forgotten__password__content'>
                   <div className='account_top__text'>
                <span className='account__page__home__icon'>
                    <a href='/'>
                        <i class="fa-solid fa-house"></i>&nbsp;&nbsp;
                    </a>
                    /
                </span>
                <span className='account__link'>  
                    <a href='/account'>
                   &nbsp;Account  
                    </a>
                    </span>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                <span>Forgotten Password</span>
            <hr></hr>
            </div>

            <div className='forgotten__password__left__right'>
            <div className='password__mail__input__zone'>
              <h2>Forgot Your Password?</h2>
              <span>Enter the e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.</span>
              <input type='email'placeholder='E-Mail Address'required></input>
              <div className='password__btn__zone'>
                <button className='password__back__btn' type='button'><i class="fa-solid fa-caret-left"></i>Back</button>
                <button className='password__continue__btn' type='button'>Continue</button>
              </div>
            </div>
            <MyAccountRight/>
            </div>

    </div>
  )
}

export default ForgottenPasswordSection