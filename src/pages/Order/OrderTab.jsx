import OrderCard from "../Shared/OrderCard/OrderCard"


const OrderTab = ({items}) => {
  return (
   <div className="grid md:grid-cols-3 gap-8">
    {
        items.map(item => <OrderCard
        
        key={item._id}
        item={item}
        
        />)
    }

   </div>
  )
}

export default OrderTab
