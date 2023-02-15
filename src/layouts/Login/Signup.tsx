import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Signup=() =>{

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const signup = async (event: React.FormEvent)=>{

    event.preventDefault();
    const response = await axios(`${process.env.REACT_APP_HOST}/signup`,{
      method: "POST",
      headers:{'Content-Type':'application/json'},
      data: JSON.stringify({userName:username ,password,name}),
    });
    
    alert("Sign up done");
  };


    return(
        <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={signup}>
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
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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