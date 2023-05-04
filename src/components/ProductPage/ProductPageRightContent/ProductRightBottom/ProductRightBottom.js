import React from 'react'
import "./ProductRightBottom.css"

function ProductRightBottom() {
  return (
    <div>
      <div className='size_chart__zone'>
      <span><i class="fa-solid fa-chart-bar"></i>Size chart</span>
      <span><i class="fa-solid fa-window-maximize"></i>Popup</span>
      <span><i class="fa-solid fa-circle-question"></i>Ask Question</span>
      </div>
      <hr></hr>

      <div className='online__payment__zone'>
      <span><i class="fa-solid fa-wallet"></i>Online payment</span>
      <span><i class="fa-solid fa-hand-holding-dollar"></i>Easy Return</span>
      <span><i class="fa-regular fa-comments"></i>24x7 Service</span>
      </div>


      <div className='product__right__bottom__box'>

      <div className='review__and__star__zone'>
        <div className='review__area'>
          <h3>3/5</h3>
          <span>3 reviews</span>
        </div>
          <div class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>
      </div>
      
        <div className='review__write__zone'>
          <h4>Write a review</h4>
          <form className='review__write__inputs'>
            <input type='text' required placeholder='Your Name'></input>
            <textarea required placeholder='Your Review'></textarea>
            <div className='review__btn__box'>
            <button className='review__btn'>Write Review</button>
            </div>
          </form>
        </div>

      </div>

    </div>
  )
}

export default ProductRightBottom