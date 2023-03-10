import { useState } from "react"
import { Redirect } from "react-router-dom";
import useAuth from "../../Hook/UseAuth";
import {GoogleBooks} from "../GoogleBooks/GoogleBooks";
import { AddNewBook } from "./components/AddNewBook";
import { ChangeQuantityOfBooks } from "./components/ChangeQuantityOfBooks";

export const ManageBookishPage = () => {
    useAuth();
    const[addBook,setAddBook]=useState(true);
    const [changeQuantityOfBooksClick , setChangeQuantityOfBooksClick] = useState(false);
    const [googleClick, setGoogleClick] = useState(false);

    function addBookClickFunction() {
        setChangeQuantityOfBooksClick(false);
        setGoogleClick(false);
        setAddBook(true);
    }

    function changeQuantityOfBooksClickFunction() {
        setChangeQuantityOfBooksClick(true);
        setGoogleClick(false);
        setAddBook(false);
    }

    function googleClickFunction() {
        setChangeQuantityOfBooksClick(false);
        setGoogleClick(true);
        setAddBook(false);
    }

    if(localStorage.getItem("username")!="admin@admin.com")
    {   
        <Redirect to="/error"/>
    }
    return (
        <>
        {
            localStorage.getItem("username")!="admin@admin.com"?
            <Redirect to="/error"/>
            :
            
        <div className="container">
            <div className="mt-5">
                <h3>Manage Bookish</h3>
                <nav>
                    <div className="nav nav-tabs" id='nav-tab' role='tablist'>
                        <button  onClick={addBookClickFunction} className="nav-link active" id='nav-add-book-tab' data-bs-toggle='tab'
                            data-bs-target='#nav-add-book' type='button' role='tab' aria-controls='nav-add-book'
                            aria-selected='false'>
                                Add new book
                        </button>
                        
                        <button onClick={changeQuantityOfBooksClickFunction} className="nav-link " id='nav-quantity-tab' data-bs-toggle='tab'
                            data-bs-target='#nav-quantity' type='button' role='tab' aria-controls='nav-quantity'
                            aria-selected='true'>
                                Change Quantity
                        </button>
                        <button onClick={googleClickFunction} className='nav-link' id='nav-messages-tab' data-bs-toggle='tab' 
                            data-bs-target='#nav-messages' type='button' role='tab' aria-controls='nav-messages' 
                            aria-selected='false'>
                            Google Books
                        </button>

                    </div>
                </nav>
                <div className='tab-content' id='nav-tabContent'>
                    <div className='tab-pane fade show active' id='nav-add-book' role='tabpanel'
                        aria-labelledby='nav-add-book-tab'>
                            {addBook ? <AddNewBook/> : <></>}
                    </div>
                    <div className='tab-pane fade' id='nav-quantity' role='tabpanel' aria-labelledby="nav-quantity-tab">
                        {changeQuantityOfBooksClick ? <ChangeQuantityOfBooks/> : <></>}
                    </div>
                    <div className='tab-pane fade' id='nav-messages' role='tabpanel' aria-labelledby='nav-messages-tab'>
                        {googleClick ? <GoogleBooks/> : <></>}
                    </div>

                </div>
            </div>
        </div>
        
}</>
    )
}