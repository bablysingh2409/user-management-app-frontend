import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    user:[],
    isAuthenticated:false,
}


const authSlice=createSlice({
    name:'auth',
     initialState:INITIAL_STATE,
     reducers:{
        setUser:(state,action)=>{
             state.user=action.payload;
             state.isAuthenticated=true
        },
        clearUser:(state,action)=>{
            state.user=[];
            state.isAuthenticated=false
       },
     }
})

export const authReducer=authSlice.reducer;
export const authSelector=(state)=>state.authReducer;
export const action=authSlice.actions;
