import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    // We will use user data only here that's why we don't need to create seperate hook.
    const axiosSecure = useAxiosSecure();
    const {data: users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const result = await axiosSecure.get('/users')
            return result.data;

        }
       

    })

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

    const handleDelete= (user)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/users/${user._id}`)
            .then(res=>{
                console.log(res)
                if(res.data.deletedCount >0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });

                }
            })
          
        }
      });


    }
    
  return (
    <div>
        <div className="flex justify-evenly">
        <h1>All Users:{users.length}</h1>
        <h1>Total Users:</h1>
      
    </div>
    <div>
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index)=>
        <tr key={user._id}>
        <th>{index +1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role ==="admin"?'Admin':<button onClick={()=> handleMakeAdmin(user)} className="btn btn-ghost btn-xs"><FaUsers className="text-xl"/></button>}</td>
        <td><button onClick={()=> handleDelete(user)} className="btn btn-ghost btn-xs"><FaTrash className="text-xl"/></button></td>
      </tr>
      )}
      
      
    </tbody>
  </table>
</div>
    </div>

    </div>

    
  )
}

export default AllUsers
