import useCart from "../../hooks/useCart"


const Cart = () => {
  const [data] = useCart([]);
  return (
    <div>
      <h1>{data.length}</h1>
    </div>
  )
}

export default Cart
