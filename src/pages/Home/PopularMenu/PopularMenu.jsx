import { useEffect, useState } from "react"
import MenuItem from "../../Shared/MenuItem/MenuItem"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"


const PopularMenu = () => {
  const[menu,setMenu]  =useState([])
useEffect(()=>{
fetch('menu.json')
.then(res=>res.json())
.then(data=>{
    const popular = data.filter(item=>item.category === 'popular' )
    setMenu(popular)
    console.log(menu)
})
},[menu])
  return (
    <div className="my-4">
    <SectionTitle
    heading= "Popular Menu"
    subHeading= "Please check our popular Items"
    
    
    />
     <div className="grid md:grid-cols-2 gap-4">
     {
        menu.map(item => <MenuItem
        key={item._id}
        item= {item}
        
        /> )
      }
     </div>
    </div>
  )
}

export default PopularMenu
