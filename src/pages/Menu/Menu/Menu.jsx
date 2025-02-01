import { Helmet } from "react-helmet-async"
import Cover from "../../Shared/Cover/Cover"
import menuImg from "/assets/menu/dessert-bg.jpeg"
import pizzaImg from "/assets/menu/pizza-bg.jpg"
import saladImg from "/assets/menu/salad-bg.jpg"
import dessertImg from "/assets/menu/dessert-bg.jpeg"
import soupImg from "/assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "./MenuCategory";
import SectionTitle from '../../../../src/components/SectionTitle/SectionTitle'


const Menu = () => {
  const [menu] = useMenu();
  const pizza = menu.filter(item => item.category == 'pizza')
  const salad = menu.filter(item => item.category == 'salad')
  const dessert = menu.filter(item => item.category == 'dessert')
  const soup = menu.filter(item => item.category == 'soup')
  
  return (
    <div className="mb-8">
        <Helmet>
        <title>Restaurant Delicacy || Menu</title>
        </Helmet>
       
      <Cover img={menuImg} title = "Our Menu"/>
      <SectionTitle
      subHeading = 'Order your favorite items'
      heading = 'Our menu'
      
      />

      <MenuCategory items={pizza } title={'pizza'} img={pizzaImg}/>
      <MenuCategory items={salad } title={'salad'} img={saladImg}/>
      <MenuCategory items={dessert } title={'dessert'} img={dessertImg}/>
      <MenuCategory items={soup } title={'soup'} img={soupImg}/>
      
    </div>
  )
}

export default Menu;
