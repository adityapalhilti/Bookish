import React from "react";  
import { useEffect , useState } from "react";
import axios from 'axios';  
import { Card } from 'react-bootstrap';  
import useAuth from "../../Hook/UseAuth";
import { fetchGoogleBooks, setGoogleBooks, showgoogleBooks } from "../../Store/reducers/GooglebooksSlice";
import {  useDispatch, useSelector } from "react-redux";
import { store } from "../../Store/Store";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import BookModel from "../../models/BookModel";
import { Link } from "react-router-dom";
import { GoogleBook } from "./components/GoogleBook";
import GetGoogleBooks from "./GetGoogleBooks";

 export const GoogleBooks=()=> {  
    useAuth();
    const [books ,setBooks] = useState<BookModel[]>([]);  
    const [result, setResult] = useState([]);  
    const [search,setSearch]=useState(""); 
    const [isLoading , setIsLoading]= useState(false);
    const [httpError , setHttpError]= useState(null);
    const[active,setActive]=useState(false);

    const dispatch=useDispatch();

    let responseData = useSelector(showgoogleBooks);
    let loadedBooks : BookModel[] =[];

    const fetchBooks = async () => {

        
        // dispatch(setGoogleBooks(GetGoogleBooks(search)));
        GetGoogleBooks(search)
        .then(result => {
            console.log("result");
            console.log(result);
            responseData=result;
            

            for(const key in responseData){
                loadedBooks.push({
                    id:responseData[key].id,
                    title: responseData[key].title,
                    author: responseData[key].author,
                    description : responseData[key].description,
                    copies : responseData[key].copies,
                    copiesAvailable : responseData[key].copiesAvailable,
                    category : responseData[key].category,
                    img : responseData[key].img,
    
                });
            }
            setBooks(loadedBooks);
            setIsLoading(false);
            setActive(true); 
          })
          .catch(error => {
            // handle the error
          });
               
    };

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

    const searchHandleChange = async (event: React.FormEvent) => {
        event.preventDefault();
        if(search!=''){
            
            setIsLoading(true);
            
            fetchGoogleBooks(search);
            
            setIsLoading(false);
            
            fetchBooks();
            
        }
        
    }
    
    return (<div>   
        
        <form className="mt-3" onSubmit={searchHandleChange}>  
            <div className="card-header main-search">  
                <div className="row">  
                    <div className="col-12 col-md-3 col-xl-3">  
                        <input className="AutoFocus form-control" placeholder="Type something..." type="text" 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)} />  
                    </div>  
                    <div className="d-grid gap-2 mt-3">  
                        <button type="submit" className="btn main-color text-white me-auto"  >
                            Submit
                        </button>  
                    </div>  
                </div>  
            </div>  
            </form>  
            { 
                active?
                <>
                {books.map(book=>(
                    <GoogleBook book ={book} key={book.id}/>
                ))}
                </>
                :
                
                <div className="alert alert-primary mt-5" role="alert">
                Search over the Google Books store to add some more knowledge...
                </div>
            }
        
      </div>
      )
}  
  
export default GoogleBooks;