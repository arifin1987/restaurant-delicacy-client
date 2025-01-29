import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import featured from '/assets/home/featured.jpg'
import './FeaturedItem.css'

const FeaturedItem = () => {
  return (
    <div className='py-4 featured-img bg-fixed bg-slate-500 bg-opacity-45 text-white'>
        <SectionTitle
        subHeading= 'Please check it out'
        heading= 'Featured Items'
        />
        <div className='md:flex items-center justify-center px-36 pt-12 gap-6'>
        <div>
        <img  src={featured} alt="" />
        </div>
            
        <div>
        <h1 className='text-2xl'>Featured Items</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sed officiis quisquam quidem molestiae maiores aperiam? Sunt optio, delectus incidunt rerum repellat, distinctio quia quas in atque maxime natus nihil?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam laboriosam fugiat quam itaque nesciunt quod earum pariatur placeat aliquam tempora?</p>
<button className='btn btn-outline border-0 border-b-4 mt-4'>Please Order</button>
        </div>

        </div>
        



       
      
    </div>
  )
}

export default FeaturedItem
