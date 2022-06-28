import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITodoItem } from "../../types/todo";


export const setTodo = createAsyncThunk(
    'todo/setTodo',
    async(todo: ITodoItem, thunkAPI) =>{
        try{
            return todo
        }catch(e){

        }
    }
)