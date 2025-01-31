

const OrderCard = ({item}) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src={item.image}
        alt="food" />
    </figure>
    <p className=" ">${item.price}</p>
    <div className="card-body">
      <h2 className="card-title">{item.name}</h2>
      <p>{item.recipe}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  </div>
  )
}

export default OrderCard
