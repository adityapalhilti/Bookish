import React, { useDebugValue, useState } from'react'
import { Link } from 'react-router-dom';
import { HomePage } from '../HomePage/HomePage';

export const Login=()=>{

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [active,setActive]=useState(false)
  
  const login = async (event: React.FormEvent) => {
    
    event.preventDefault();
    const response = await fetch('http://localhost:8080/login', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName:username, password }),
    });
    console.log(response)
    const data = await response.json();
    localStorage.setItem('active',JSON.stringify({
      active:true,
      token:data.token
    }))
    setActive(true);
  };

  
    return(
        !active?
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
      :
      <h1>Hi</h1>
      
      
    );
}











