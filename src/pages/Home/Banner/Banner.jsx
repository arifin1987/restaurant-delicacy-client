import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img2 from '/assets/home/02.jpg'
import img3 from '/assets/home/03.png'
import img4 from '/assets/home/04.jpg'
import img5 from '/assets/home/05.png'



const Banner = () => {
  return (
    <Carousel>
    <div>
        <img src={img4} />
    
    </div>
    <div>
        <img src={img5} />
        
    </div>
    <div>
        <img src={img3}/>
        
    </div>
   
    <div>
        <img src={img2}/>
        
    </div>
   
</Carousel>
  )
}

export default Banner
