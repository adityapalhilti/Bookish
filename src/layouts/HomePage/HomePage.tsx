import { BookishServices } from "./Components/BookishServices";
import { Carousel } from "./Components/Carousel";
import { ExploreTopBooks } from "./Components/ExploreTopBooks";

export const HomePage = () => {
    return(
        <>
        <ExploreTopBooks/>
        
        <BookishServices/>
        </>
    );
} 