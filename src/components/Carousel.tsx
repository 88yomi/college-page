import React from "react";

import { Navigation, Pagination, EffectFade, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';
import photo6 from '../images/photo6.jpg';


const Carousel = () => {
  return (
    <div className="px-6 mx-auto h-96">
      <Swiper
        className="h-full carousel-parent"
        modules={[Navigation, Pagination, A11y, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide>
          <img
            className=""
            src={photo1}
            alt="carousel"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=""
            src={photo2}
            alt="carousel"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=""
            src={photo3}
            alt="carousel"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=""
            src={photo4}
            alt="carousel"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=""
            src={photo5}
            alt="carousel"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=""
            src={photo6}
            alt="carousel"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
