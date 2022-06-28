import { createSlice } from "@reduxjs/toolkit";
import { action } from "mobx";
import { ITodo,  ITodoItem } from "../../types/todo";
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