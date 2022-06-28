import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";
import { setAuth,  setUserId } from "./UserActionCreator";

const initialState: IUser = {
    isAuth: false,
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
        [setUserId.fulfilled.type]: (state, action) =>{
            state.userId = action.payload
        }
    }
})

export default userSlice.reducer;