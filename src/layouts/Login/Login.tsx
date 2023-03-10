import axios from 'axios';
import React, { useDebugValue, useState } from'react'
import { Link, Redirect } from 'react-router-dom';
import { HomePage } from '../HomePage/HomePage';

export const Login=()=>{

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [active,setActive]=useState(false)
  
  
  const login = async (event: React.FormEvent) => {
    
    console.log("Inside Login")
    event.preventDefault();
    try {
      const response = await axios(`${process.env.REACT_APP_HOST}/login`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ userName:username, password }),
      });
      localStorage.setItem('token',response.data.token);
    localStorage.setItem('username',username);

    setActive(true);
    if(response.status==200){
    window.location.reload();
    }
    } catch (e) {
      alert('Invalid credentials!');
    }
    
    
  };


    return(
      <>
      {
        localStorage.getItem("token")?
        <Redirect to="/home"/>
        :
        <div className="Auth-form-container" >
        <form className="Auth-form " onSubmit={login}>
          <div className="Auth-form-content">
              
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1 "
                placeholder="Enter email"
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
                placeholder="Enter password"
                autoComplete="off"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
      
            <div className="text-center mt-2">
              Not registered yet?{" "}
              <br/>
              <Link className="link-danger" to={'/signup'}  >
                Sign Up
              </Link>
            </div>
            
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn main-color text-white"  >
                Submit
              </button>
            </div>
            
          </div>
        </form>
      </div>
}
</>
      
    );
}











