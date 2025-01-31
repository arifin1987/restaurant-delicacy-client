

const MenuItem = ({item}) => {
    const {name, recipe, image,price}= item;
  return (
    <div className="my-6">
      
     <div className="flex gap-4">
     <img style={{borderRadius:" 200px 200px  200px 0"}} className="w-[120px] "  src={image} alt="" />
      <div>
      <p>{name}-------</p>
      <p>{recipe}</p>
      
      

      </div>
      <p className="text-blue-500">${price}</p>
     </div>
      
    </div>
  )
}

export default MenuItem
