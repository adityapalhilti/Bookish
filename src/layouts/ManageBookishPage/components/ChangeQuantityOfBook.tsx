import { useEffect, useState } from "react";
import useAuth from "../../../Hook/UseAuth";
import BookModel from "../../../models/BookModel";

export const ChangeQuantityOfBook: React.FC<{book : BookModel , deleteBook:any } > = (props,key) => {
    useAuth();
    const [quantity,setQuantity]=useState<number>(0);
    const[remaining ,setRemaining]=useState<number>(0);


    useEffect(()=>{
        const fetchBookInState = () => {
            props.book.copies ? setQuantity(props.book.copies):setQuantity(0);
            props.book.copiesAvailable ? setRemaining(props.book.copiesAvailable) : setRemaining(0);
        };
        fetchBookInState();
    }, [] );


    async function increaseQuantity() {
        const url=`http://localhost:8080/api/admin/increase/book/quantity/?bookId=${props.book?.id}`;

        const requestOptions = {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            }
        };
        const quantityUpdateResponse = await fetch(url , requestOptions);
        if(!quantityUpdateResponse.ok){
            throw new Error("Something went wrong!");
        }

        setQuantity(quantity+1);
        setRemaining(remaining+1);
    }

    async function decreaseQuantity() {
        const url=`http://localhost:8080/api/admin/decrease/book/quantity/?bookId=${props.book?.id}`;

        const requestOptions = {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            }
        };
        const quantityUpdateResponse = await fetch(url , requestOptions);
        if(!quantityUpdateResponse.ok){
            throw new Error("Something went wrong!");
        }

        setQuantity(quantity-1);
        setRemaining(remaining-1);
    }

    async function deleteBook() {
        const url=`http://localhost:8080/api/admin/delete/book/?bookId=${props.book?.id}`;

        const requestOptions = {
            method: "DELETE",
            headers: {
                'Content-Type':'application/json'
            }
        };
        const updateResponse = await fetch(url , requestOptions);
        if(!updateResponse.ok){
            throw new Error("Something went wrong!");
        }

        props.deleteBook();
    }

    return(
        <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
            <div className="row g-0">
                <div className="col-md-2">
                    <div className="d-none d-lg-block">
                        {props.book.img?
                            <img src={props.book.img} width='123' height='196' alt='Book' />
                            :
                            <img src={require('./../../../Images/BooksImages/bookish.png')} width='123' height='196' alt='Book' />
                        }
                    </div>
                        <div className="d-lg-none d-flex justify-content-center align-items-center">
                            {props.book.img?
                                <img src={props.book.img} width='123' height='196' alt='Book' />
                                :
                                <img src={require('./../../../Images/BooksImages/bookish.png')} width='123' height='196' alt='Book' />
                            }
                        </div>
                </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{props.book.author}</h5>
                            <h4>{props.book.title}</h4>
                            <p className="card-text">{props.book.description}</p>
                        </div>
                    </div>
                    <div className="mt-3 col-md-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <p>Books Remaining: <b>{remaining}</b></p>
                        </div>
                    </div>
                    <button className="m1 btn btn-md btn-primary" onClick={increaseQuantity}>Add Quantity</button>
                    <button className="m1 btn btn-md btn-warning" onClick={decreaseQuantity}>Decrease Quanity</button>
                    <button className="m1 btn btn-md btn-danger" onClick={deleteBook}>Delete</button>
            </div>
        </div>
    );
}