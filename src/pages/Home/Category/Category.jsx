import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide5 from '../../../assets/home/slide5.jpg'
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
  return (
    <div>
        <SectionTitle
        subHeading = 'Please Order Online'
        heading = 'Please Order'
        
        />
        <Swiper
    slidesPerView={3}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper my-8"
  >
    <SwiperSlide>
        <img src={slide3} alt="" />
        <h4 className='text-4xl text-white uppercase -mt-20 text-center'>Soup</h4>
    </SwiperSlide>
    <SwiperSlide>
    <img src={slide4} alt="" />
    <h4 className='text-4xl text-white uppercase -mt-20 text-center'>Desert</h4>
    </SwiperSlide>
    <SwiperSlide>
    <img src={slide5} alt="" />
    <h4 className='text-4xl text-white uppercase -mt-20 text-center'>Salad</h4>
    </SwiperSlide>
    <SwiperSlide>
    <img src={slide2} alt="" />
    <h4 className='text-4xl text-white uppercase -mt-20 text-center'>Pizza</h4>
    </SwiperSlide>
    <SwiperSlide>
    <img src={slide1} alt="" />
    <h4 className='text-4xl text-white uppercase -mt-20 text-center'>Sala</h4>
    </SwiperSlide>
    
  </Swiper>
    </div>
  )
}

export default Category


