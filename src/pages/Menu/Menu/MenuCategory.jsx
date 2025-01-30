
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";



const MenuCategory = ({items,title,img}) => {
    
  return (
    <div className="pt-8">
        <Cover title={title} img={img}/>
        <div className="grid md:grid-cols-2 gap-4">
     {
        items.map(item => <MenuItem
        key={item._id}
        item= {item}
        
        /> )
      }
     </div>
    </div>
  )
}

export default MenuCategory
