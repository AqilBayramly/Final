import React from 'react'
import "./AccountRegisterSections.css"
import MyAccountRight from '../MyAccountSections/MyAccountRight/MyAccountRight'

function AccountRegisterSections() {
  return (
    <div className='account__register__content'>
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
                <span>Register</span>
            <hr></hr>
            </div>



            <div className='register__form__and__rightnav'>
            <form className='register__form'>
                <div>
            <h3>Register Account</h3>
            <span >If you already have an account with us, please login at the <a className='register__acc__link' href='/account'>login page</a>.</span>
                </div>
                <div className='register__form__inputs' >
                <div className='sss'>
                <input type='text' placeholder='First Name' required></input>
                <input type='text' placeholder='Last Name'required></input>
                </div>
                <input type='email' placeholder='E-Mail'required></input>
                <input type='tel' placeholder='Telephone'required></input>
                <input type='password' placeholder='Password'required></input>
                <input type='password' placeholder='Password Confirm'required></input>
                </div>

                <div>
                <h4>Newsletter</h4>
                    <div className='subscribe__checkboxes'>
                <span>Subscribe</span>
                <div>
                <input type='radio'></input>
                <span className='yes__no'>Yes</span>
                </div>
                <div>
                <input type='radio'></input>
                <span className='yes__no'>No</span>
                </div>
                    </div>
                </div>

                <div className='privacy__zone'>
                <input type='checkbox'required></input>
                <span>I have read and agree to the <a className='register__acc__link' href='#!'>Privacy Policy</a> </span>
                <button className='password__continue__btn' type='button'>Continue</button>
                </div>
            </form>
            <MyAccountRight/>
            </div>
        
    </div>
  )
}

export default AccountRegisterSections