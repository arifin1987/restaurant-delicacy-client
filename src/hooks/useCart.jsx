import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import useAuth from "./useAuth";


const useCart = () => {
    const {user} = useAuth();
    const {data: cart=[], refetch} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async ()=>{
            const res = await axios.get(`https://restaurant-delicacy-server.vercel.app/carts?email=${user.email}`)
            return res.data;
        }
    })
         
     return [cart, refetch] 
}

export default useCart
