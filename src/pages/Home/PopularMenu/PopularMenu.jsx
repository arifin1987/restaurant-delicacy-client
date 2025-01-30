
import MenuItem from "../../Shared/MenuItem/MenuItem"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
 const [menu] = useMenu();
 const popular = menu.filter(item => item.category === 'popular')
 console.log(popular)
  return (
    <div className="my-4">
    <SectionTitle
    heading= "Popular Menu"
    subHeading= "Please check our popular Items"
    
    
    />
     <div className="grid md:grid-cols-2 gap-4">
     {
        popular.map(item => <MenuItem
        key={item._id}
        item= {item}
        
        /> )
      }
     </div>
    </div>
  )
}

export default PopularMenu
