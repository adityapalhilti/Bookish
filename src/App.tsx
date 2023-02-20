import React from 'react';
import { Redirect, Route, Switch ,useHistory } from 'react-router-dom';
import './App.css';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import { Checkout } from './layouts/BookCheckoutPage/Checkout';
import { ErrorPage } from './layouts/ErrorPage/ErrorPage';
import { HomePage } from './layouts/HomePage/HomePage';
import { Login } from './layouts/Login/Login';
import { Signup } from './layouts/Login/Signup';
import { ManageBookishPage } from './layouts/ManageBookishPage/ManageBookishPage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Explore } from './layouts/SearchBooksPage/Explore';






export const App = () => {

  

  return (
    <div className='d-flex flex-column min-vh-100'>
      
      <Navbar/>
      <div className='flex-grow-1'>
      <Switch>
      <Route path='/' exact>
        <Redirect to='/login'/>
      </Route>
      <Route path='/home'>
        <HomePage/>
      </Route>
      <Route path='/search'>
        <Explore/>
      </Route>
      <Route path='/checkout/:bookId'>
        <Checkout/>
      </Route>
      <Route path='/admin'>
        <ManageBookishPage/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
      <Route path='/error'>
        <ErrorPage/>
      </Route>
      </Switch>
      </div>
      <Footer/>
      
    </div>
    
  );
}

