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
function GoogleBooks() {  
    useAuth();
    const [books ,setBooks] = useState<BookModel[]>([]);  
    const [result, setResult] = useState([]);  
    const [search,setSearch]=useState(""); 
    const [isLoading , setIsLoading]= useState(true);
    const [httpError , setHttpError]= useState(null);
    const[active,setActive]=useState(false);

    const dispatch=useDispatch();

    const responseData = useSelector(showgoogleBooks);
    
    useEffect(() =>{

    const fetchBooks = async () => {

            

            const loadedBooks : BookModel[] =[];

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
        };
        fetchBooks().catch((error: any) => {
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
  
    const handleKeyPress = (event: { key: string; }) => {
        if(event.key === 'Enter'){
          searchHandleChange();
        }
      }

    const searchHandleChange = () => {
        if(search!=''){
            fetchGoogleBooks(search);
            setIsLoading(false)
        }
        
    }
    
    return (  
        
    
        <form >  
            <div className="card-header main-search">  
                <div className="row">  
                    <div className="col-12 col-md-3 col-xl-3">  
                        <input className="AutoFocus form-control" placeholder="Type something..." type="text" 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyPress}/>  
                    </div>  
                    <div className="d-grid gap-2 mt-3">  
                        <button type="submit" className="btn main-color text-white me-auto" onClick={()=> searchHandleChange()} >
                            Submit
                        </button>  
                    </div>  
                </div>  
            </div>  
            
            {   active?
                <>
                {books.map(book=>(
                    <GoogleBook book ={book} key={book.id}/>
                ))}
                </>
                :
                <div className="m-5">
                    <h3>
                        Search over the Google Books store to add the book
                    </h3>
                </div>
            }
        </form> 
  
    )  
}  
  
export default GoogleBooks