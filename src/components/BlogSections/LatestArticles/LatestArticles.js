import React from 'react'
import "./LatestArticles.css"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function LatestArticles() {
  return (
    <div>
        <h2>Latest Articles</h2>
        <div>
        <div className='latest__articles__content'>
      <>
      <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      slidesPerView={2}
      // breakpoints={{
      //   0: {
      //     slidesPerView: 1,
      //   },
      //   400:{
      //     slidesPerView:1,
      //   },
      //   680:{
      //     slidesPerView:1
      //   },
      //   860:{
      //     slidesPerView:1
      //   },
      //   1050:{
      //     slidesPerView:1
      //   },
      //   1300:{
      //     slidesPerView:2
      //   }
      // }}
      >
      
        <SwiperSlide>
          <div className='latest__articles__white__box'>
        <div className='latest__articles__white__box__content'>
        <a href='#!'>
        <img className='latest__articles__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/blog/1-359x221.webp'alt='...'></img>
        </a>

        <div className='date__and__comment__contain'>
          <div className='from__blog__yellow__box'>
          <span>25 Feb 2023</span>
          </div>
          <div className='latest__articles__comments_contain'>
          <span ><i className="fa-solid fa-user"></i>&nbsp;Mark Je...</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-comments"></i>&nbsp;15</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-eye"></i>&nbsp; 587</span>
          </div>
        </div>

        <div className='from__blog__text'>
        <div className='latest__articles__middle__text'>
          <a href='#!'>
            <span>Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus</span>
          </a>
        </div>

        <div className='latest__articles__bottom__text'>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ..</span>
        </div>
        </div>
        </div>
      </div>
      </SwiperSlide>
      
        <SwiperSlide>
          <div className='latest__articles__white__box'>
        <div className='latest__articles__white__box__content'>
        <a href='#!'>
        <img  className='latest__articles__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/blog/4-359x221.webp'alt='...'></img>
        </a>

        <div className='date__and__comment__contain'>
          <div className='from__blog__yellow__box'>
          <span>25 Feb 2023</span>
          </div>
          <div className='latest__articles__comments_contain'>
          <span ><i className="fa-solid fa-user"></i>&nbsp;Jolio Bal...</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-comments"></i>&nbsp;47</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-eye"></i>&nbsp; 852</span>
          </div>
        </div>

        <div className='from__blog__text'>
        <div className='latest__articles__middle__text'>
          <a href='#!'>
            <span>Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus</span>
          </a>
        </div>

        <div className='latest__articles__bottom__text'>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ..</span>
        </div>
        </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide>
          <div className='latest__articles__white__box'>
        <div className='latest__articles__white__box__content'>
        <a href='#!'>
        <img  className='latest__articles__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/blog/2-359x221.webp'alt='...'></img>
        </a>

        <div className='date__and__comment__contain'>
          <div className='from__blog__yellow__box'>
          <span>25 Feb 2023</span>
          </div>
          <div className='latest__articles__comments_contain'>
          <span ><i className="fa-solid fa-user"></i>&nbsp;Mark Je...</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-comments"></i>&nbsp;98</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-eye"></i>&nbsp; 463</span>
          </div>
        </div>

        <div className='from__blog__text'>
        <div className='latest__articles__middle__text'>
          <a href='#!'>
            <span>Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus</span>
          </a>
        </div>

        <div className='latest__articles__bottom__text'>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ..</span>
        </div>
        </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide>
          <div className='latest__articles__white__box'>
        <div className='latest__articles__white__box__content'>
        <a href='#!'>
        <img  className='latest__articles__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/blog/5-359x221.webp'alt='...'></img>
        </a>

        <div className='date__and__comment__contain'>
          <div className='from__blog__yellow__box'>
          <span>25 Feb 2023</span>
          </div>
          <div className='latest__articles__comments_contain'>
          <span ><i className="fa-solid fa-user"></i>&nbsp;Jolio Bal...</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-comments"></i>&nbsp;15</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-eye"></i>&nbsp; 587</span>
          </div>
        </div>

        <div className='from__blog__text'>
        <div className='latest__articles__middle__text'>
          <a href='#!'>
            <span>Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus</span>
          </a>
        </div>

        <div className='latest__articles__bottom__text'>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ..</span>
        </div>
        </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide>     
          <div className='latest__articles__white__box'>
        <div className='latest__articles__white__box__content'>
        <a href='#!'>
        <img  className='latest__articles__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/blog/6-359x221.webp'alt='...'></img>
        </a>

        <div className='date__and__comment__contain'>
          <div className='from__blog__yellow__box'>
          <span>25 Feb 2023</span>
          </div>
          <div className='latest__articles__comments_contain'>
          <span ><i className="fa-solid fa-user"></i>&nbsp;Mark Je...</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-comments"></i>&nbsp;15</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-eye"></i>&nbsp; 587</span>
          </div>
        </div>

        <div className='from__blog__text'>
        <div className='latest__articles__middle__text'>
          <a href='#!'>
            <span>Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus</span>
          </a>
        </div>

        <div className='latest__articles__bottom__text'>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ..</span>
        </div>
        </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide>
          <div className='latest__articles__white__box'>
        <div className='latest__articles__white__box__content'>
        <a href='#!'>
        <img  className='latest__articles__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/blog/3-359x221.webp'alt='...'></img>
        </a>

        <div className='date__and__comment__contain'>
          <div className='from__blog__yellow__box'>
          <span>25 Feb 2023</span>
          </div>
          <div className='latest__articles__comments_contain'>
          <span ><i className="fa-solid fa-user"></i>&nbsp;Mark Je...</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-comments"></i>&nbsp;36</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-eye"></i>&nbsp; 247</span>
          </div>
        </div>

        <div className='from__blog__text'>
        <div className='latest__articles__middle__text'>
          <a href='#!'>
            <span>Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus</span>
          </a>
        </div>

        <div className='latest__articles__bottom__text'>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ..</span>
        </div>
        </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide>
          <div className='latest__articles__white__box'>
        <div className='latest__articles__white__box__content'>
        <a href='#!'>
        <img  className='latest__articles__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/blog/7-359x221.webp'alt='...'></img>
        </a>

        <div className='date__and__comment__contain'>
          <div className='from__blog__yellow__box'>
          <span>25 Feb 2023</span>
          </div>
          <div className='latest__articles__comments_contain'>
          <span ><i className="fa-solid fa-user"></i>&nbsp;Jolio Bal...</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-comments"></i>&nbsp;97</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-eye"></i>&nbsp; 1401</span>
          </div>
        </div>

        <div className='from__blog__text'>
        <div className='latest__articles__middle__text'>
          <a href='#!'>
            <span>Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus</span>
          </a>
        </div>

        <div className='latest__articles__bottom__text'>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ..</span>
        </div>
        </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide>
          <div className='latest__articles__white__box'>
        <div className='latest__articles__white__box__content'>
        <a href='#!'>
        <img  className='latest__articles__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/blog/1-359x221.webp'alt='...'></img>
        </a>

        <div className='date__and__comment__contain'>
          <div className='from__blog__yellow__box'>
          <span>25 Feb 2023</span>
          </div>
          <div className='latest__articles__comments_contain'>
          <span ><i className="fa-solid fa-user"></i>&nbsp;Mark Je...</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-comments"></i>&nbsp;15</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-eye"></i>&nbsp; 587</span>
          </div>
        </div>

        <div className='from__blog__text'>
        <div className='latest__articles__middle__text'>
          <a href='#!'>
            <span>Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus</span>
          </a>
        </div>

        <div className='latest__articles__bottom__text'>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ..</span>
        </div>
        </div>
        </div>
      </div></SwiperSlide>
        <SwiperSlide>     <div className='latest__articles__white__box'>
        <div className='latest__articles__white__box__content'>
        <a href='#!'>
        <img  className='latest__articles__image' src='https://demo.pocotheme.com/1/image/cache/catalog/maza/demo/mz_poco/megastore-3/blog/5-359x221.webp'alt='...'></img>
        </a>

        <div className='date__and__comment__contain'>
          <div className='from__blog__yellow__box'>
          <span>25 Feb 2023</span>
          </div>
          <div className='latest__articles__comments_contain'>
          <span ><i className="fa-solid fa-user"></i>&nbsp;Mark Je...</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-comments"></i>&nbsp;7</span>
          <span className='from__blog__border'></span>
          <span><i className="fa-solid fa-eye"></i>&nbsp; 248</span>
          </div>
        </div>

        <div className='from__blog__text'>
        <div className='latest__articles__middle__text'>
          <a href='#!'>
            <span>Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus</span>
          </a>
        </div>

        <div className='latest__articles__bottom__text'>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ..</span>
        </div>
        </div>
        </div>
      </div></SwiperSlide>
      </Swiper>
    </>

      </div>
        </div>
    </div>
    
  )
}

export default LatestArticles