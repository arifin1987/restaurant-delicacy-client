import { CiShoppingCart } from "react-icons/ci"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import useCart from "../../../hooks/useCart";


const Navbar = () => {
  const {user,logOut}= useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = ()=>{
    logOut();
  }
    const navItems = <>
    <Link className="mx-4" to= '/'>Home</Link>
    <Link className="mx-4" to='/menu'>Menu</Link>
    <Link className="mx-4" to='/order/pizza'>Order</Link>
    <Link className="mx-4" to='/dashboard/cart'>
    <button className="btn">
    <CiShoppingCart />
    <div className="badge badge-secondary">+{cart.length}</div>
    </button></Link>
    {
      user?<button onClick={handleLogOut} className="btn btn-secondary text-white">Log Out</button>:<Link className="mx-4" to='/login'>Login</Link>
    }
    
    </>
  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white max-w-screen-xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Restaurant Delicacy</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  )
}

export default Navbar
