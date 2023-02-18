
import axios from "axios"
import { useDispatch } from "react-redux";
import useAuth from "../../Hook/UseAuth";
import { setGoogleBooks } from "../../Store/reducers/GooglebooksSlice";


  const GetGoogleBooks=async(searchid: String)=>{
        useAuth();
        
        const response = await axios(`${process.env.REACT_APP_HOST}/api/admin/googlebooks/${searchid}`, {
          method: "GET",
          headers: { 'Content-Type': 'application/json' }
        });
        console.log("Hitting Google Api Successfully")
        const NewBooksList =response.data

            return (NewBooksList);
        
      };
  export default GetGoogleBooks;
  