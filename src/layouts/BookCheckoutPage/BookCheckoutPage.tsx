import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import useAuth from "../../Hook/UseAuth";
import BookModel from "../../models/BookModel";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { StarsReview } from "../Utils/StarsReview";
import { CheckoutAndReviewBox } from "./CheckoutAndReviewBox";

export const BookCheckoutPage = () =>{
    useAuth();
    
    const[book,setBook]= useState<BookModel>();
    const[isLoading , setIsLoading] = useState(true);
    const[httpError,setHttpError] = useState(null);

    const bookId=(window.location.pathname).split('/')[2];
    
    useEffect(() =>{
        const fetchBook = async () => {
            const baseUrl: string = `${process.env.REACT_APP_HOST}/api/books/${bookId}`;


            const response = await axios(baseUrl);

            if(response.status!=200){
                throw new Error('Something went wrong!');
            }
            //const responseJson = await response.json();


            const loadedBook : BookModel ={
                id:response.data.id,
                title: response.data.title,
                author: response.data.author,
                description : response.data.description,
                copies : response.data.copies,
                copiesAvailable : response.data.copiesAvailable,
                category : response.data.category,
                img : response.data.img,
            };

            setBook(loadedBook);
            setIsLoading(false);           
        };
        fetchBook().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, [] );

    if(isLoading){
        return (
            <SpinnerLoading/>
        )
    }

    if(httpError){
        return(
            <div className="container m-5">
                <p>
                    {httpError}
                </p>
            </div>
        )
    }
    if(!localStorage.getItem("token"))
    {
        <Redirect to="/login"/>
    }

    return(
        <>
        {
            localStorage.getItem("token")?
           
            <div>
            <div className="container d-none d-lg-block">
                <div className="row mt-5">
                    <div className="col-sm-2 col-md-2">
                        {
                            book?.img ?
                            <img src={book?.img} width='226' height='349' alt='Book'/>
                            :
                            <img src={require('./../../Images/BooksImages/bookish.png')} width='226' height='349' alt='Book'/>
                        }
                    </div>
                    <div className="col-4 col-md-4 container">
                        <div className="ml-2">
                            <h2>{book?.title}</h2>
                            <h5 className="text-primary">{book?.author}</h5>
                            <p className="lead">{book?.description}</p>
                            <StarsReview rating={4.5} size={32}/>
                        </div>
                    </div>
                    <CheckoutAndReviewBox book={book} mobile={false}/>
                </div>
                <hr/>
            </div>
            <div className="container d-lg-none mt-5">
                <div className="d-flex justify-content-center align-items-center">
                    {
                            book?.img ?
                            <img src={book?.img} width='226' height='349' alt='Book'/>
                            :
                            <img src={require('./../../Images/BooksImages/bookish.png')} width='226' height='349' alt='Book'/>
                    }
                </div>
                <div className="mt-4">
                    <div className="ml-2">
                        <h2>{book?.title}</h2>
                        <h5 className="text-primary">{book?.author}</h5>
                        <p className="lead">{book?.description}</p>
                        <StarsReview rating={0} size={0}/>
                    </div>
                </div>
                <CheckoutAndReviewBox book={book} mobile={true}/>
                <hr/>
            </div>
        </div>
        :
        <Redirect to="/login"/>
    }
    </>
        
    
    );
}