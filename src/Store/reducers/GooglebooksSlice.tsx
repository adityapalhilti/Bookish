import { createSlice } from "@reduxjs/toolkit"
import GetGoogleBooks from "../../layouts/GoogleBooks/GetGoogleBooks";


const initialState={

    googlebooks:null,
    

}
const GoogleBooksSlice = createSlice({
    name :'googlebooks',
    initialState,
    reducers:{

        setGoogleBooks:(state,action)=>{
            state.googlebooks=action.payload;

        }


    }

})
export const fetchGoogleBooks=(search: String)=> async (dispatch: (arg0: { payload: any; type: "googlebooks/setGoogleBooks"; }) => void) =>{
    try {
        const response= await GetGoogleBooks(search);
        console.log(response)
        dispatch(setGoogleBooks(response));
    }
    catch(e){}
}
export const showgoogleBooks = (state: { googlebooks: { googlebooks: any; }; }) => state.googlebooks.googlebooks;
export const { setGoogleBooks } = GoogleBooksSlice.actions
export default GoogleBooksSlice.reducer