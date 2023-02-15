import { Link } from "react-router-dom";

export const SignInButton = () =>{

    const logout = async (event: React.FormEvent) => {
    
        event.preventDefault();
        window.location.reload();
        localStorage.removeItem('token');
      };
      


    return(
            localStorage.getItem("token")!=null?
              <li className='nav-item m-1'>
                <Link type='button' className='btn btn-outline-light'  to={"/login"} onClick={logout}>Logout</Link>
              </li>
              :
              <li className='nav-item m-1'>
                <Link type='button' className='btn btn-outline-light'  to={"/login"}>Sign in</Link>
              </li>
    );

}

