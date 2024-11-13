import {createSlice} from "@reduxjs/toolkit";

const initialState={
    loginData:{ username:"user",password:"12345"},
    isAuthenticated:false,
};

export const loginSlice=createSlice({
    name:"login",
    initialState,
    reducers:{
        setLogin:(state,action)=>{
            state.loginData=action.payload;
            state.isAuthenticated = true;
        },
        setlogout: (state) => {
            state.loginData = null;
            state.isAuthenticated = false;
          }
    }
})
export const {setLogin,setlogout}=loginSlice.actions;
export default loginSlice.reducer;
