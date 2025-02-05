import { useEffect, useState } from "react"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'


import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";


const Testimonials = () => {
    const[reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=> res.json())
        .then(data=> setReviews(data))
    },[])
  return (
    <div>
        <SectionTitle
        subHeading={'We value our customens'}
        heading='What Our Client Say'
        
        
        />
       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
         
        {
          reviews.map(review => <SwiperSlide key={review._id}>
           <div className=" flex flex-col items-center py-4">
            <Rating style={{ maxWidth: 250 }} value={review.rating}  />
             <p>{review.details}</p>
            <h2 className="text-2xl text-blue-600">{review.name}</h2>
           </div>
            
          </SwiperSlide> )
        }
      </Swiper>
      
      
    </div>
  )
}

export default Testimonials
