import { Redirect } from "react-router-dom";
import { BookCheckoutPage } from "./BookCheckoutPage";


export const Checkout = () => {

    
    return(
        <>
        {
            localStorage.getItem("token")?
            <>
            <BookCheckoutPage/>
            </>
            :
            <Redirect to="/login"/>
        }   
        </>
        
    );
} 