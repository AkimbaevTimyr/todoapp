import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";
import { setAuth, setUser, setUserId } from "./UserActionCreator";


const initialState: IUser = {
    isAuth: false,
    user: {email: '', password: ''},
    userId: 0,
}

export const userSlice =  createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers: {
        [setAuth.fulfilled.type]: (state, action) => {
            state.isAuth = action.payload;
        },
        [setUser.fulfilled.type]: (state, action) =>{
            state.user = action.payload;
        },
        [setUserId.fulfilled.type]: (state, action) =>{
            state.userId = action.payload
        }
    }
})


export default userSlice.reducer;