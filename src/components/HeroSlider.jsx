import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Images
import hero1Png from "../assets/hero1.png"
import hero2Png from "../assets/hero2.png"
import hero3Png from "../assets/hero3.png"
import hero4Png from "../assets/hero4.png"

// React Icons
import { IoArrowForwardOutline } from "react-icons/io5";


export default function HeroSlider() {
  // Custom navigation
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className='hero-slider'>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        ref={swiperRef}
      >
        <SwiperSlide>
          <img src={hero1Png} alt="hero-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero2Png} alt="hero-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero3Png} alt="hero-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero4Png} alt="hero-img" />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-custom-navigation">
        <button onClick={handlePrev} className='btn prev'>
          <IoArrowForwardOutline className='arrow'/>
        </button>
        <button onClick={handleNext} className='btn next'>
          <IoArrowForwardOutline className='arrow'/>
        </button>
      </div>
    </div>
  );
}
