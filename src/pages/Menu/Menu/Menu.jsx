import { Helmet } from "react-helmet-async"
import Cover from "../../Shared/Cover/Cover"
import menuImg from "/assets/menu/dessert-bg.jpeg"
import pizzaImg from "/assets/menu/pizza-bg.jpg"
import saladImg from "/assets/menu/salad-bg.jpg"
import dessertImg from "/assets/menu/dessert-bg.jpeg"
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "./MenuCategory";


const Menu = () => {
  const [menu] = useMenu();
  const pizza = menu.filter(item => item.category == 'pizza')
  const salad = menu.filter(item => item.category == 'salad')
  const drinks = menu.filter(item => item.category == 'drinks')
  
  return (
    <div className="h-screen">
        <Helmet>
        <title>Restaurant Delicacy || Menu</title>
        </Helmet>
      <Cover img={menuImg} title = "our menu"/>
      <MenuCategory items={pizza } title={'Pizza'} img={pizzaImg}/>
      <MenuCategory items={salad } title={'Salad'} img={saladImg}/>
      <MenuCategory items={drinks } title={'Drinks'} img={dessertImg}/>
      
    </div>
  )
}

export default Menu;
