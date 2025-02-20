import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa"
import { NavLink, Outlet } from "react-router-dom"


const Dashboard = () => {
  return (

    <div className="flex">
        {/* Dashboad side bar */}
        <div className="w-64 min-h-screen bg-green-600">
            <ul className="menu p-4">
                <li><NavLink to="/dashboard/cart"><FaShoppingCart/> My Cart</NavLink></li>
                <li><NavLink to="/dashboard/userHome"><FaHome/> User Home</NavLink></li>
                <li><NavLink to="/dashboard/reservation"><FaCalendar/> Reservation</NavLink></li>
                <li><NavLink to="/dashboard/review"><FaAd/> Review</NavLink></li>
                <li><NavLink to="/dashboard/bookings"><FaList/> My bookings</NavLink></li>
                <div className="divider"></div>
                <li><NavLink to="/"><FaHome/>  Home</NavLink></li>
                
            </ul>

        </div>
        {/* Dashborad content */}
        <div className="flex-1 p-8">
            <Outlet/>
        </div>
      
    </div>
  )
}

export default Dashboard
