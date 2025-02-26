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

    /**
     * const AllUsers = () => {
    // We will use user data only here that's why we don't need to create seperate hook.
    const axiosSecure = useAxiosSecure();
    const {data: users=[], refetch} = useQuery({
      // in cookie do not need to set headers
        queryKey: ['users'],
        queryFn: async ()=>{
            const result = await axiosSecure.get('/users', {
              
              headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
              }
            })
            return result.data;

        }
       

    })
        **headers and authorization will need to set everywhere for jwt token varification. In order
        to make it easier we will set it into useAxiosSecure.jsx hook as a axios.interceptors.requrest.use()
        also axios.interceptors.response.use(). So we don't need to set everytime the headers and authorization
        while api calling.

import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(function(config){
    // console.log('request stopped by interceptors');
    const token = localStorage.getItem('access-token');
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, function(error){
    return Promise.reject(error);
  });
  
  // intercepts 401 and 403 status if token is invalid
  axiosSecure.interceptors.response.use(function(response){
    return response;
  },async function(error){
    const status = error.response.status;
    console.log('status error in the interceptor', status);
    // for 401 or 403 logout the user and move the user to the login page
    if(status ===401 || status === 403){
      await logOut();
      navigate('/login');
    }
    return Promise.reject(error);
  })
      return axiosSecure;
}


export default useAxiosSecure

     */

/**
 * we will use useAdmin.jsx hook to find whether user is a admin or not
 * const useAdmin = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isAdmin} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async ()=>{
            const result = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(result.data);
            return result.data.admin;

        }

    })
  return [isAdmin]
}

export default useAdmin

 */
/**
 * we have used verifyAdmin middleware in the server side so that normal user can't access user data
 * To protect some route we have used AdminRoute.jsx
 * 
const AdminRoute = ({children}) => {
    const [user, loading] = useAuth();
    const [isAdmin, isAdminLoading]= useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading ){
        return <progress className='progress w-24'></progress>
    }
    if(user && isAdmin){
        return children;
    }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
}

export default AdminRoute
 */
/**
 * AddItems.jsx added to admin dashboard
 */