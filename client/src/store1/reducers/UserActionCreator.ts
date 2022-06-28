import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";


export const setAuth = createAsyncThunk(
    "user/setAuth",
    async(bool: boolean, thunkAPI) => {
        try{
            return bool
        }catch(e){
        }
    }
)

export const setUser = createAsyncThunk(
    "user/setUser",
    async(user: IUser, thunkAPI) =>{
        try{
            return user
        }catch(e){

        }
    }
)

export const setUserId = createAsyncThunk(
    "user/setUserId",
    async(id: number, thunkAPI) =>{
        try{
            return id
        }catch(e){
            
        }
    }
)