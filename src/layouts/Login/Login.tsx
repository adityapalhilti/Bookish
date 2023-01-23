import React from'react'
import { Link } from 'react-router-dom';
export const Login=()=>{
    return(
        
        <div className="Auth-form-container" >
        <form className="Auth-form ">
          <div className="Auth-form-content">
            
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1 "
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <p className="text-center mt-2">
              <Link className='link-danger' to={'/login'}>Forgot password?</Link>
            </p>
            <div className="text-center">
              Not registered yet?{" "}
              <Link className="link-danger" to={'/signup'} >
                Sign Up
              </Link>
            </div>
            
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn main-color text-white">
                Submit
              </button>
            </div>
            
          </div>
        </form>
      </div>
      
      
    );
}