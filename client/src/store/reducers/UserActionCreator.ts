import { createAsyncThunk } from "@reduxjs/toolkit";


export const setAuth = createAsyncThunk(
    "user/setAuth",
    async(bool: boolean, thunkAPI) => {
        try{
            return bool
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