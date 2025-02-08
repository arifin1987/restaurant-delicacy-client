

const OrderCard = ({item}) => {
  const handleAddToCart =(id)=>{
    fetch(`http://localhost:5000/${item}`,{ 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id)}
    )

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
