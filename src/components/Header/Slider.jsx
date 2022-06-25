import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Hamberger from '../../assets/images/food/slider/hamberger.jpg'
import Fruit from '../../assets/images/food/slider/Fruit.jpg'
import Barbecue from '../../assets/images/food/slider/barbecue.jpg'


function Slider() {
  return (
    
    <div className='container-fluid px-0'>
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide><img className='img-fluid' src={Hamberger} alt='Hamberger' /></SwiperSlide>
    <SwiperSlide><img className='img-fluid' src={Fruit} alt='fruit' /></SwiperSlide>
    <SwiperSlide><img className='img-fluid' src={Barbecue} alt='barbecue' /></SwiperSlide>
    
  </Swiper>
  </div>
  )
}

export default Slider