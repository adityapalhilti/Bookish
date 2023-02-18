import { combineReducers, configureStore } from "@reduxjs/toolkit";

import GoogleBooksReducer from "./reducers/GooglebooksSlice"


export const store =configureStore({
    reducer:({
        
        googlebooks:GoogleBooksReducer
      })
    
})