import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import todoReducer from './reducers/TodoSlice'

export const rootReducer = combineReducers<any>({
    users : userReducer,
    todos: todoReducer,
})

export const setupStore = () =>{ 
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']