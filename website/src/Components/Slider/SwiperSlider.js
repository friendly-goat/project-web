// import React, { useRef, useState } from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// custom css
import './SwiperSlider.css';

// images
import image1 from '../../images/Grad_slice_1.jpeg';
import image2 from '../../images/Grad_slice_2.jpeg';
import image3 from '../../images/Grad_slice_3.jpeg';
import Kulich from '../../images/kulich.png';
import Pascha from '../../images/pascha.png';
import Basket from '../../images/basket.png';

import { Link,useNavigate } from 'react-router-dom'

// slider component
const SwiperSlider = () => {
  const navigate = useNavigate()
  return (
    <Swiper 
      //{...SwiperSliderConfigs} getSwiper={setParallaxSwiper}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      noSwipingClass='noSwiping'
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="slide-image">
          <img src={image1} alt="image1"></img>
        </div>
        <div className='overSlide_left noSwiping'>
          <h1 class="item_name">Kulich</h1>
          <p class="item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button id='shop-btn' onClick={() =>navigate('/shop')}>
            Shop All
          </button>
        </div>
        <div class="overSlide_right">
          <img id="kulich" src={Kulich} alt=""/>
        </div>
      </SwiperSlide>

      <SwiperSlide >
        <div className="slide-image">
          <img src={image2} alt="image2"></img>
        </div>
        <div className='overSlide_left noSwiping'>
          <h1 class="item_name">Pascha</h1>
          <p class="item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button id='shop-btn' onClick={() =>navigate('/shop')}>
            Shop All
          </button>
        </div>
        <div class="overSlide_right">
          <img id="kulich" src={Pascha} alt=""/>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-image">
          <img src={image3} alt="image3"></img>
        </div>
        <div className='overSlide_left noSwiping'>
          <h1 class="item_name">Basket</h1>
          <p class="item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button id='shop-btn' onClick={() =>navigate('/shop')}>
            Shop All
          </button>
        </div>
        <div class="overSlide_right">
          <img id="kulich" src={Basket} alt=""/>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;