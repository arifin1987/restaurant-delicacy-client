import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../pages/Shared/Navbar/Navbar"
import Footer from "../pages/Shared/Footer/Footer"


const MainLayout = () => {
  const location = useLocation();
  console.log(location)
  const noHeaderFooter = location.pathname.includes('login' );
  return (
    <div>
      <Navbar/>
     
        
      <Outlet/>
      {noHeaderFooter || <Footer/>}
    </div>
  )
}

export default MainLayout
