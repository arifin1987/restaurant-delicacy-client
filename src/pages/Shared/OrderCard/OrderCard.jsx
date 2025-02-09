import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";


const OrderCard = ({item}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const {user} = useAuth();
  const handleAddToCart =(item)=>{
    const {_id, name, recipe,image, price}= item;
    if(user && user.email){
      const cartItems = {
        menuId : _id,
        name, recipe, image, price

      }
      axios.post("http://localhost:5000/carts", cartItems)
      .then(result=>{
        console.log(result.data);
        if(result.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added to the cart",
            showConfirmButton: false,
            timer: 1500
          });

        }
       
      })
      navigate(from, {replace:true});

    }
    else{
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add items to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate ('/login')
        }
      });

    }
  }
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src={item.image}
        alt="food" />
    </figure>
    <p className="bg-slate-700 text-white absolute right-0 mr-4 mt-4 px-4 ">${item.price}</p>
    <div className="card-body">
      <h2 className="card-title">{item.name}</h2>
      <p>{item.recipe}</p>
      <div className="card-actions justify-end">
        <button onClick={()=>handleAddToCart(item)} className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  </div>
  )
}

export default OrderCard
