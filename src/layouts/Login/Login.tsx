import React, { useDebugValue, useState } from'react'
import { Link } from 'react-router-dom';

export const Login=()=>{

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const login = async (username: String, password: any) => {
    
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return data;
  };
  // async function login(){
  //   try{
  //     const newUser={
  //       username:username,

  //       password:password
  //     }
  //   const Response =  await LoginUser(newUser)
  //   }
  //   catch{

  //   }
  // }
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <button type="submit" className="btn main-color text-white" onClick={(event) => login(username, password)} >
                Submit
              </button>
            </div>
            
          </div>
        </form>
      </div>
      
      
    );
}