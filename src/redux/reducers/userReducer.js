import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers,addUser,removeUser,editUser } from "../actions/userActions";
import { action } from "./authReducer";

const INITIAL_STATE = {
    users: [],
    status: 'idle',
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending,(state)=>{
                state.status='loading'; 
            })
            .addCase(fetchUsers.fulfilled,(state,action)=>{
                state.status='succeeded';
                 state.users=action.payload
            })
            .addCase(fetchUsers.rejected,(state)=>{
                state.status='failed',
                state.error=action.error
            })
            .addCase(addUser.fulfilled,(state,action)=>{
                state.users.push(action.payload)
            })
            .addCase(editUser.fulfilled,(state,action)=>{
                const idx=state.users.findIndex((user)=>user._id===action.payload._id);
                if(idx!==-1){
                    state.users[idx]=action.payload;
                }
            })
            .addCase(removeUser.fulfilled,(state,action)=>{
                state.users.filter((user)=>user._id!==action.payload._id);
            })
    }
});

export const userReducer=userSlice.reducer;
export const userSelector=(state)=>state.userReducer;