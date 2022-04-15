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
import image1 from '../../images/slice_0_0.jpg';
import image2 from '../../images/slice_0_1.jpg';
import image3 from '../../images/slice_0_2.jpg';

import { Link } from 'react-router-dom'

// slider component
const SwiperSlider = () => {
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
        <div className='overSlide noSwiping'>
          <div id='shop-btn'><Link to="/shop" id='shop-link'>Shop All</Link></div>
        </div>
      </SwiperSlide>

      <SwiperSlide >
        <div className="slide-image">
          <img src={image2} alt="image2"></img>
        </div>
        <div className='overSlide noSwiping'>
          <div id='shop-btn'><Link to="/shop" id='shop-link'>Shop All</Link></div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-image">
          <img src={image3} alt="image3"></img>
        </div>
        <div className='overSlide noSwiping'>
          <div id='shop-btn'><Link to="/shop" id='shop-link'>Shop All</Link></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;