import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";


// React Icons
import { IoIosArrowForward } from "react-icons/io";


import video1 from "../assets/video1.png";
import video2 from "../assets/video2.png";
import playBtn from "../assets/btnPlay.svg";


const MissionSlider = () => {
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
    <div className="mission-wrapper">

      <div className='mission-slider'>

        <div className="mission-slider-bg1"></div>
        <div className="mission-slider-bg2"></div>


        <Swiper
          className="mySwiper"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          modules={[Navigation]}
          ref={swiperRef}
        >
          <SwiperSlide>
            <img src={video1} alt="video1" />
            <a href="https://www.youtube.com/watch?v=HW4wAwQPtqU" target="_blank" className="play-btn">
              <img src={playBtn} alt="playbtn" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <img src={video2} alt="video2" />
            <a href="https://www.youtube.com/watch?v=SjV42gAKMvA" target="_blank" className="play-btn">
              <img src={playBtn} alt="playbtn" />
            </a>
          </SwiperSlide>
        </Swiper>
        

        <div className="mission-custom-navigation">
          <button onClick={handlePrev} className='mission-btn mission-prev'>
            <IoIosArrowForward className="arrow" />
          </button>
          <button onClick={handleNext} className='mission-btn mission-next'>
            <IoIosArrowForward className="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MissionSlider
