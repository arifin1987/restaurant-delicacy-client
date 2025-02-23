/**
 * context api used for Auth related info. Here firebase is used
 */



/**
 * Added to cart using axios.post method
 * cart data showed to Cart.jsx, using useCart hook where tanstact query added data extracted
 * If we use tanstact query we dont need to use useEffect and useState.
 * we can use refetch in tanstack query
 */



/**
 * How to make dashboard:
 * create dashboard layout
 * create dashboard routes
 */

/**
 * How to make admin dashboard and users dashboard seperately
 * const isAdmin = true;
 * {isAdmin? <></>: <></>}
 * From the list of users in the db we can make admin in the following way:
 * Backend code:
 * app.patch('/users/admin/:id', async(req,res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const updateDoc = {
      $set: {
        role: 'admin'
      },
    };
    const result = await userCollection.updateOne(filter, updateDoc);
    res.send(result)
    })
    
    FrontEnd code:
    const handleMakeAdmin=(user)=>{
          axiosSecure.patch(`/users/admin/${user._id}`)
          .then(result=>{
            console.log(result.data)
            if(result.data.modifiedCount >0){
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an admin`,
                showConfirmButton: false,
                timer: 1500
              });
            }
          })
        }
    <td>{user.role ==="admin"?'Admin':<button onClick={()=> handleMakeAdmin(user)} className="btn btn-ghost btn-xs"><FaUsers className="text-xl"/></button>}</td>
 */

    /**
     * got to server side code for jwt implementation
     */