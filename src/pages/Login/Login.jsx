import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";



const Login = () => {
  const{signIn}= useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result=>{
          console.log(result);
          Swal.fire({
                title: "Successfully Logged In",
                text: "New here? go to login page",
                
              });
              navigate(from, {replace:true});
        })

    }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Please Login</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiatut assumenda excepturi exercitationem
        quasi. 
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         <input className="btn btn-primary" type="submit" value="Submit" />
        
          
        </div>
        <p>New here? Please <Link className="text-green-500 text-2xl" to='/register'>Register</Link></p>
      </form>
      <SocialLogin/>
    </div>
  </div>
</div>
  )
}

export default Login
