import useCart from "../../../hooks/useCart";


const Cart = () => { 
    const [cart] = useCart();
    const totalPrice = cart.reduce((acc,item)=> acc + item.price , 0)
    const parse = parseInt(totalPrice)
  return (
   <div>
     <div className="flex justify-evenly">
      <h2 className="text-2xl">Total Items: {cart.length}</h2>
      <h2 className="text-2xl">Total Price:{parse} </h2>
      <button className="btn btn-secondary">Pay</button>

      
    </div>
    <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
        cart.map(item =><tr
        key={item._id}
        >
        <th>
          
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
          {item.name}
          
        </td>
        <td>${item.price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr> )}
      
      
      
    </tbody>
   
  </table>
</div>
   </div>
  )
}

export default Cart
