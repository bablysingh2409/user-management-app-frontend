import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, addUser, removeUser, editUser} from "../actions/userActions";
import { saveToLocalStorage } from "../../services/localStorage";


const INITIAL_STATE = {
    users: [],
    status: 'idle',
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        sortAZ: (state) => {
            state.users.sort((a, b) => a.name.localeCompare(b.name));
        },
        sortZA: (state) => {
            state.users.sort((a, b) => b.name.localeCompare(a.name));
        },
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload
                // Save fetched records to local storage
                saveToLocalStorage('users', action.payload);
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload)
                // Update local storage
                saveToLocalStorage('users', state.users);
            })
            .addCase(editUser.fulfilled, (state, action) => {
                const idx = state.users.findIndex((user) => user._id === action.payload._id);
                if (idx !== -1) {
                    state.users[idx] = action.payload;
                    // Update local storage
                    saveToLocalStorage('users', state.users);
                }
            })
            .addCase(removeUser.fulfilled, (state, action) => {
                state.users = state.users.filter((user) => user._id !== action.payload._id);
                // Update local storage
                saveToLocalStorage('users', state.users);
            })
           
    }
});

export const userReducer = userSlice.reducer;
export const userSelector = (state) => state.userReducer;
export const action = userSlice.actions;