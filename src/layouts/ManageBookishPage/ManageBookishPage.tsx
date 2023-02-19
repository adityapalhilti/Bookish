import { useState } from "react"
import useAuth from "../../Hook/UseAuth";
import {GoogleBooks} from "../GoogleBooks/GoogleBooks";
import { AddNewBook } from "./components/AddNewBook";
import { ChangeQuantityOfBooks } from "./components/ChangeQuantityOfBooks";

export const ManageBookishPage = () => {
    useAuth();
    const [changeQuantityOfBooksClick , setChangeQuantityOfBooksClick] = useState(false);

    function addBookClickFunction(){
        setChangeQuantityOfBooksClick(false);
    }
    function changeQuantityOfBooksClickFunction(){
        setChangeQuantityOfBooksClick(true);
    }

    return (
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
                        <button   className="nav-link" id='nav-google-book-tab' data-bs-toggle='tab'
                            data-bs-target='#nav-google-book' type='button' role='tab' aria-controls='nav-google-book'
                            aria-selected='false'>
                                GoogleBooks
                        </button>

                    </div>
                </nav>
                <div className='tab-content' id='nav-tabContent'>
                    <div className='tab-pane fade show active' id='nav-add-book' role='tabpanel'
                        aria-labelledby='nav-add-book-tab'>
                            <AddNewBook/>
                    </div>
                    <div className='tab-pane fade' id='nav-quantity' role='tabpanel' aria-labelledby="nav-quantity-tab">
                        {changeQuantityOfBooksClick ? <ChangeQuantityOfBooks/> : <></>}
                    </div>
                    <div className='tab-pane fade ' id='nav-google-book' role='tabpanel'
                        aria-labelledby='nav-google-book-tab'>
                            <GoogleBooks/>
                    </div>

                </div>
            </div>
        </div>
    )
}