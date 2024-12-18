import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bgImg1 from '../../../assets/bgImg1.jpg'
import bgImg2 from '../../../assets/bgImg2.jpg'
import bgImg3 from '../../../assets/bgImg3.jpg'
import Slides from '../Slides/Slides';

const Carousel = () => {
    return (
        <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slides image={bgImg1} text="Your glow, your confidence, your story."></Slides></SwiperSlide>
        <SwiperSlide><Slides image={bgImg2} text='Softness and light, perfected for you.'></Slides></SwiperSlide>
        <SwiperSlide><Slides image={bgImg3} text='Discover the art of luxurious self-care.'></Slides></SwiperSlide>
        
      </Swiper>
            
        </div>
    );
};

export default Carousel;