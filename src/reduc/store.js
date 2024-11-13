import { configureStore } from '@reduxjs/toolkit';
import logindataslice from "./loginSlice.js";
import todoSlice from './todoSlice.js';  

const store=configureStore({
  reducer:{
        loginInfo:logindataslice,
        todo: todoSlice,  
  }  
});
export default store;