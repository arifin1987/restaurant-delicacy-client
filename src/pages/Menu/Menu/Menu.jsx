import { Helmet } from "react-helmet-async"
import Cover from "../../Shared/Cover/Cover"
import menuImg from "/assets/menu/dessert-bg.jpeg"

const Menu = () => {
  return (
    <div className="h-screen">
        <Helmet>
        <title>Restaurant Delicacy || Menu</title>
        </Helmet>
      <Cover img={menuImg} title = "our menu"/>
    </div>
  )
}

export default Menu
