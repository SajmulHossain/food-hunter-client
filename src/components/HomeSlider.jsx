import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.jpg'
import slider4 from '../assets/slider4.jpg'
import slider5 from '../assets/slider5.jpg'
import slider6 from '../assets/slider6.jpg'
import slider7 from '../assets/slider7.jpg'

const HomeSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper rounded-lg"
    >
      <SwiperSlide>
        <img
          src={slider1}
          className="object-cover w-full h-[400px] lg:h-[600px]"
          alt="slider1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider2}
          className="object-cover w-full h-[400px] lg:h-[600px]"
          alt="slider2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider3}
          className="object-cover w-full h-[400px] lg:h-[600px]"
          alt="slider3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider4}
          className="object-cover w-full h-[400px] lg:h-[600px]"
          alt="slider3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider5}
          className="object-cover w-full h-[400px] lg:h-[600px]"
          alt="slider3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider6}
          className="object-cover w-full h-[400px] lg:h-[600px]"
          alt="slider3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider7}
          className="object-cover w-full h-[400px] lg:h-[600px]"
          alt="slider3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
