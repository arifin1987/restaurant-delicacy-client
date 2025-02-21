import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    // We will use user data only here that's why we don't need to create seperate hook.((
    const axiosSecure = useAxiosSecure();
    const {data: users=[]} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const result = await axiosSecure.get('/users')
            return result.data;

        }
       

    })
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
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user=>
        <tr key={user._id}>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
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
