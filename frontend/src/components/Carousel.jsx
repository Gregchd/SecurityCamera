// Carousel.js
import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import {Autoplay, EffectCreative} from 'swiper/modules';

import moniplast from '../img/moniplast.jpg';
import monichoco from '../img/monicachoco.webp';

const Carousel = () => {

    return (
        <Swiper
            centeredSlides={true}
            grabCursor={true}
            effect="creative"
            creativeEffect={{
                prev: {
                    shadow: true,
                    origin: 'left center',
                    translate: ['-5%', 0, -200],
                    rotate: [0, 100, 0],
                },
                next: {
                    origin: 'right center',
                    translate: ['5%', 0, -200],
                    rotate: [0, -100, 0],
                },
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectCreative]}
        >
            <SwiperSlide className="flex justify-center"><img src={moniplast}></img></SwiperSlide>
            <SwiperSlide className="flex justify-center"><img src={monichoco}></img></SwiperSlide>
            <SwiperSlide><img src="https://via.placeholder.com/800x400?text=Image+3"></img></SwiperSlide>
            <SwiperSlide><img src="https://via.placeholder.com/800x400?text=Image+4"></img></SwiperSlide>
        </Swiper>
    );
};

export default Carousel;
