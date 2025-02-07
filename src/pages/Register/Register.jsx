import { useContext } from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
  const{createUser} = useContext(AuthContext);
  const {
  register,handleSubmit,formState: { errors },} = useForm();
  const onSubmit= (data) => {
    createUser(data.email, data.password)
    .then(result=>{
    console.log(result);
    
    }
    )
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Please Register</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: true })}  placeholder="Name" className="input input-bordered" required />
          {errors.name && <span className="text-red-600">Name field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })}  placeholder="email" className="input input-bordered" required />
          {errors.email && <span className="text-red-600">Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { required: true, minLength:6, maxLength:20, pattern:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/ })} placeholder="password" className="input input-bordered" required />
          {errors.password?.type=== 'required' && <p className='text-red-600'>Password is required</p>}
          {errors.password?.type=== 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}
          {errors.password?.type=== 'maxLength' && <p className='text-red-600'>Password must be less than 20 characters</p>}
          {errors.password?.type=== 'pattern' && <p className='text-red-600'>Password must have one upeercase, one lowercase, one number and one special character</p>}
        </div>
        <div className="form-control mt-6">
         <input className="btn btn-primary" type="submit" value="Submit" />
        
          
        </div>
        <p>Already registered? got to <Link className="text-green-700" to='/login'>Login</Link></p>
      </form>
    </div>
  </div>
</div>
  )
}

export default Register
