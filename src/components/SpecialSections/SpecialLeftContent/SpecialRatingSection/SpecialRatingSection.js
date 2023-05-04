import React from 'react'
import "./SpecialRatingSection.css"

function SpecialRatingSection() {
  return (
    <div>
        <div className='special__rating__box'>
        <div className='special__rating___top'>
        <h6>RATING</h6>
                <i className="fa-solid fa-angle-up"></i>
            </div>
            <div className='rating__selections'>
                <div className='rating__choice'>
                      <div className='rating__choice__left'>
                          <div className='rating__check'></div>
                          <div>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                          </div>
                          <p>& up</p>
                      </div>
                    <p>1</p>
                </div>
                <div className='rating__choice'>
                      <div className='rating__choice__left'>
                          <div className='rating__check'></div>
                          <div>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star"></span>
                          </div>
                          <p>& up</p>
                      </div>
                    <p>2</p>
                </div>
                <div className='rating__choice'>
                      <div className='rating__choice__left'>
                          <div className='rating__check'></div>
                          <div>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                          </div>
                          <p>& up</p>
                      </div>
                    <p>2</p>
                </div>
                <div className='rating__choice'>
                      <div className='rating__choice__left'>
                          <div className='rating__check'></div>
                          <div>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                          </div>
                          <p>& up</p>
                      </div>
                    <p>2</p>
                </div>
                <div className='rating__choice'>
                      <div className='rating__choice__left'>
                          <div className='rating__check'></div>
                          <div>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                          </div>
                          <p>& up</p>
                      </div>
                    <p>1</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialRatingSection