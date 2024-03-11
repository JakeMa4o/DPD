// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


import gallery1 from "../assets/gallery1.png"
import gallery2 from "../assets/gallery2.png"
import gallery3 from "../assets/gallery3.png"
import gallery4 from "../assets/gallery4.png"
import gallery5 from "../assets/gallery5.png"



const Gallery = () => {
  return (
    <section className='gallery'>

      <h2 className='red title'>Галерея</h2>

      <div className='gallery-slider'>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <img src={gallery1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gallery2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gallery3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gallery4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gallery5} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      
    </section>
  )
}

export default Gallery