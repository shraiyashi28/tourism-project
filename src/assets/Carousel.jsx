import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "./pic.png";
import img2 from "./img2.webp"
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import aust3 from "./aust3.webp";
import Aust from "./Aust.jpg";
import tou4 from"./tou4.jpg";
function Carousel() {
  return (
    <div className="w-full bg-slate-900 py-14">
      <h1 className="text-3xl sm:text-5xl font-bold text-center underline text-yellow-400 mb-8 sm:mb-10 px-4">
        Here Are Some Clicks 
      </h1>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="w-[92%] sm:w-[90%] mx-auto"
      >
        <SwiperSlide>
          <img
            src={img1}
            alt="Indonesia"
            className="w-full h-[320px] sm:h-[550px] rounded-3xl object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={img2}
            alt="Bali Beach"
            className="w-full h-[320px] sm:h-[550px] rounded-3xl object-cover"
          />
        </SwiperSlide>

        
        <SwiperSlide>
          <img
            src={img3}
            alt="Temple"
            className="w-full h-[320px] sm:h-[550px] rounded-3xl object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={img4}
            alt="Tourist Place"
            className="w-full h-[320px] sm:h-[550px] rounded-3xl object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={aust3}
            alt="Tourist Place"
            className="w-full h-[320px] sm:h-[550px] rounded-3xl object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Aust}
            alt="Tourist Place"
            className="w-full h-[320px] sm:h-[550px] rounded-3xl object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={tou4}
            alt="Tourist Place"
            className="w-full h-[320px] sm:h-[550px] rounded-3xl object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;