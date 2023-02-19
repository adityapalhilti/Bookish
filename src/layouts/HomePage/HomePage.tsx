import { Redirect } from "react-router-dom";
import { BookishServices } from "./Components/BookishServices";
import { Carousel } from "./Components/Carousel";
import { ExploreTopBooks } from "./Components/ExploreTopBooks";

export const HomePage = () => {

    
    return(
        <>
        {
            localStorage.getItem("token")?
            <>
            <ExploreTopBooks/>
            <Carousel/>
            <BookishServices/>
            </>
            :
            <Redirect to="/login"/>
        }   
        </>
        
    );
} 