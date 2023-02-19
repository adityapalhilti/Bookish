import { Redirect } from "react-router-dom";
import { SearchBooksPage } from "./SearchBooksPage";


export const Explore = () => {

    
    return(
        <>
        {
            localStorage.getItem("token")?
            <>
            <SearchBooksPage/>
            
            </>
            :
            <Redirect to="/login"/>
        }   
        </>
        
    );
} 