import { $host } from ".";
import {ITodoItem } from "../types/todo";

export const getTodos = async (id: string | null): Promise<ITodoItem> =>{
    const {data} = await $host.get('api/todo/' + id)
    return data
}
export const addTodos = async (todo: {}): Promise<void> =>{
    const {data} = await $host.post('api/todo', todo)
}
export const deleteTodo = async (id: Date):Promise<void> =>{
    const {data} = await $host.delete('api/todo/' + id)
}

