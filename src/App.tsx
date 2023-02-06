import React from 'react';
import { Redirect, Route, Switch ,useHistory } from 'react-router-dom';
import './App.css';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import { HomePage } from './layouts/HomePage/HomePage';
import { Login } from './layouts/Login/Login';
import { Signup } from './layouts/Login/Signup';
import { ManageBookishPage } from './layouts/ManageBookishPage/ManageBookishPage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { oktaConfig } from './lib/oktaConfig';
import{OktaAuth , toRelativeUrl} from '@okta/okta-auth-js';
import { LoginCallback, Security } from '@okta/okta-react/bundles/types';
import LoginWidget from './Auth/LoginWidget';
import Google from './layouts/GoogleBooks/Google';


const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {

  const customAuthHandler = () => {
    history.push('/login');
  }
  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <div className='d-flex flex-column min-vh-100'>
      
      <Navbar/>
      <div className='flex-grow-1'>
      <Switch>
      <Route path='/' exact>
        <Redirect to='/home'/>
      </Route>
      <Route path='/home'>
        <HomePage/>
      </Route>
      <Route path='/search'>
        <SearchBooksPage/>
      </Route>
      <Route path='/google'>
        <Google/>
      </Route>
      <Route path='/checkout/:bookId'>
        <BookCheckoutPage/>
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
      </Switch>
      </div>
      <Footer/>
      
    </div>
    
  );
}

