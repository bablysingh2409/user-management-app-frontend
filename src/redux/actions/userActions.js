import { createAsyncThunk } from "@reduxjs/toolkit";
import { addNewUser, getAllUser, deleteUser, updateUser} from "../../services/userServices";
import { saveToLocalStorage, getFromLocalStorage } from "../../services/localStorage";

// Async action to fetch all users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    // Checking  local storage first
    const localRecords = getFromLocalStorage('users');
    
    if (localRecords) {
      return localRecords;
    }

    // Fetching from API if local records are not available
    const data = await getAllUser();

    // Saving fetched records to local storage
    saveToLocalStorage('users', data);

    return data;
  } catch (err) {
    return err;
  }
})

// Async action to add a new user
export const addUser = createAsyncThunk('users/addUser', async (user) => {
  try {
    const data = await addNewUser(user);

     // Updating local storage
     const updatedRecords = [...getFromLocalStorage('users'), data];
     saveToLocalStorage('users', updatedRecords);
 
    return data;
  } catch (err) {
    throw err;
  }
});

// Async action to edit an existing user
export const editUser = createAsyncThunk('users/editUser', async (userData) => {
  try {
    const data = await updateUser(userData);

     // Updating local storage
     const updatedRecords = getFromLocalStorage('users').map((user) =>
     user._id === data._id ? data : user
   );
   saveToLocalStorage('users', updatedRecords);
    return data;
  } catch (err) {
    throw err;
  }
});

// Async action to delete a user
export const removeUser = createAsyncThunk('users/removeUser', async (userId) => {
  try {
     await deleteUser(userId);

     // Update local storage
     const updatedRecords = getFromLocalStorage('users').filter(
      (user) => user._id !== userId
    );
    saveToLocalStorage('users', updatedRecords);

    return { _id: userId }; 
   
  } catch (err) {
    throw err;
  }
});

