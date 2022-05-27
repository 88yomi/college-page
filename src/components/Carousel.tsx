import React from "react";

import { Navigation, Pagination, EffectFade, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import pic from "../images";

const Carousel = () => {
  return (
    <div className="px-6 bg-gray-300- bg-custom-100 py-12">
      <div className="carousel-shadow mx-auto h-96">
        <Swiper
          className="h-full carousel-parent"
          modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{delay: 5000}}
          a11y={{prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide'}}
        >
          <SwiperSlide>
            <img className="" src={pic.photo1} alt="carousel" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={pic.photo2} alt="carousel" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={pic.photo3} alt="carousel" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={pic.photo4} alt="carousel" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={pic.photo5} alt="carousel" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={pic.photo6} alt="carousel" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
