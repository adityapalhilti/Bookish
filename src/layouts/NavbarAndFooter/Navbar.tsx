import { Link, NavLink } from "react-router-dom"
import { SignInButton } from "./components/SignInButton"

export const Navbar = () => {
    return(
    <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
      <div className='container-fluid'>
        <img className='navbar-brand' src={require("./../../Images/logo.png")} width="110px" height="70px" alt="Bookish"></img>
        <button className='navbar-toggler' type='button'
          data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown' aria-expanded='false'
          aria-label='Toggle Navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to={"/home"}>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to={"/search"}>Explore</NavLink>
            </li>
            {
            localStorage.getItem("username")!="admin@admin.com"?
            <></>
            :
            <li className='nav-item'>
              <NavLink className='nav-link' to={"/admin"}>Admin</NavLink>
            </li>
            }   
            
          </ul>
          <ul className='navbar-nav ms-auto'>
              <SignInButton/>
          </ul>
        </div>
      </div>
    </nav>
    )
}