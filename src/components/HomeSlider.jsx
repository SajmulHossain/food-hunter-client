import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import slider1 from '../assets/slider1.png'
import slider2 from '../assets/slider2.png'
import slider3 from '../assets/slider3.jpg'
import slider4 from '../assets/slider4.jpg'
import slider5 from '../assets/slider5.jpg'

const HomeSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper rounded"
    >
      <SwiperSlide>
        <img
          src={slider1}
          className="object-cover w-full h-[400px] lg:h-[550px]"
          alt="slider1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider2}
          className="object-cover w-full h-[400px] lg:h-[550px]"
          alt="slider2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider3}
          className="object-cover w-full h-[400px] lg:h-[550px]"
          alt="slider3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider4}
          className="object-cover w-full h-[400px] lg:h-[550px]"
          alt="slider3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider5}
          className="object-cover w-full h-[400px] lg:h-[550px]"
          alt="slider3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
