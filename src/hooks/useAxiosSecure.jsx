import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://restaurant-delicacy-server.vercel.app",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  // request interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      // console.log('request stopped by interceptors');
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403 status if token is invalid
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      const status = error.response.status;
      console.log("status error in the interceptor", status);
      // for 401 or 403 logout the user and move the user to the login page
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
