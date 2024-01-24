import { createAsyncThunk } from "@reduxjs/toolkit";
import { addNewUser,getAllUser,deleteUser,updateUser } from "../../services/userServices";

// Async action to fetch all users
export const fetchUsers=createAsyncThunk('users/fetchUsers',async()=>{
    try{
      const data=await getAllUser();
      return data;
    }catch(err){
        return err;
    }
})

// Async action to add a new user
export const addUser = createAsyncThunk('users/addUser', async (user) => {
    try{
    const data= await addNewUser(user);
    return data;
    }catch(err){
        return err;
    }
  });
  
  // Async action to edit an existing user
  export const editUser = createAsyncThunk('users/editUser', async (userId) => {
    try{
    const data = await updateUser(userId);
    return data;
    }catch(err){
        return err;
    }
  });
  
  // Async action to delete a user
  export const removeUser = createAsyncThunk('users/removeUser', async (userId) => {
    try{
   const data= await deleteUser(userId);
    return data;
    }catch(err){
        return err;
    }
  });




