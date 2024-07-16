// Carousel.js
import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'

const images = [
    'https://via.placeholder.com/800x400?text=Image+1',
    'https://via.placeholder.com/800x400?text=Image+2',
    'https://via.placeholder.com/800x400?text=Image+3',
    'https://via.placeholder.com/800x400?text=Image+4'
];

const Carousel = () => {

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src="https://via.placeholder.com/800x400?text=Image+1"></img></SwiperSlide>
            <SwiperSlide><img src="https://via.placeholder.com/800x400?text=Image+2"></img></SwiperSlide>
            <SwiperSlide><img src="https://via.placeholder.com/800x400?text=Image+3"></img></SwiperSlide>
            <SwiperSlide><img src="https://via.placeholder.com/800x400?text=Image+4"></img></SwiperSlide>
        </Swiper>
    );
};

export default Carousel;
