import { createSlice } from "@reduxjs/toolkit";
import { ITodo} from "../../types/todo";
import { setTodo } from "./TodoActionCreator";

const initialState: ITodo = {
    todos: [],
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: {
        [setTodo.fulfilled.type] : (state, action) =>{
            state.todos = action.payload
        }
    }
})

export default todoSlice.reducer;