import { Link } from "react-router-dom";

export const Signup=() =>{
    return(
        <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <div className="text-center">
            Already registered?{" "}
            <Link className="link-danger" to={"/login"} >
              Sign In
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="String"
              className="form-control mt-1"
              placeholder="e.g Aditya Pal"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
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