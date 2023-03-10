import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../Hook/UseAuth";
import BookModel from "../../../models/BookModel";
import { Pagination } from "../../Utils/Pagination";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { ChangeQuantityOfBook } from "./ChangeQuantityOfBook";

export const ChangeQuantityOfBooks = () => {
    useAuth();

    const [books ,setBooks] = useState<BookModel[]>([]);
    const [isLoading , setIsLoading]= useState(true);
    const [httpError , setHttpError]= useState(null);
    const [currentPage ,setCurrentPage]= useState(1);
    const [booksPerPage]=useState(5);
    const [totalAmountOfBooks , setTotalAmountOfBooks]=useState(0);
    const [totalPages , setTotalPages]= useState(0);
    const[bookDelete,setBookDelete]=useState(false);

    useEffect(() =>{
        const fetchBooks = async () => {
            let baseUrl: string = `${process.env.REACT_APP_HOST}/api/books?page=${currentPage -1}&size=${booksPerPage}`;

            const response = await axios(baseUrl);

            if(response.statusText!='OK'){
                throw new Error('Something went wrong!');
            }
            //const responseJson = await response.json();

            const responseData = response.data._embedded.books;

            setTotalAmountOfBooks(response.data.page.totalElements);
            setTotalPages(response.data.page.totalPages);

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
        };
        fetchBooks().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, [currentPage,bookDelete ] );

    const indexOfLastBook : number =currentPage * booksPerPage;
    const indexOfFirstBook: number = indexOfLastBook - booksPerPage;
    let lastItem = booksPerPage * currentPage <= totalAmountOfBooks ?
        booksPerPage * currentPage : totalAmountOfBooks;

    const paginate = (pageNumber : number) => setCurrentPage(pageNumber);
    const deleteBook=() => setBookDelete(!bookDelete);

    if(isLoading){
        return(
            <SpinnerLoading/>
        );
    }

    if(httpError)
    {
        return(
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        );
    }

    return(
        <div className="container mt-5">
            { totalAmountOfBooks > 0?
                <>
                    <div className="mt-3">
                        <h3>Number of results:({totalAmountOfBooks})</h3>
                    </div>
                    <p>
                        {indexOfFirstBook+1} to {lastItem} of {totalAmountOfBooks} items:
                    </p>
                    {books.map(book => (
                        <ChangeQuantityOfBook book={book} key={book.id} deleteBook={deleteBook}/>
                    ))}
                </>
                :
                <h5>Add a book before changing quantity</h5>
            }
            {totalPages>1 && <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate}/> }

        </div>
    );
}