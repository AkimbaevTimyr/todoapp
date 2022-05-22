import { $host } from ".";

export const getTodos = async (id) =>{
    const {data} = await $host.get('api/todo/' + id)
    return data
}

export const addTodos = async (todo) =>{
    const {data} = await $host.post('api/todo', todo)
    return data
}

export const deleteTodo = async (id) =>{
    const {data} = await $host.delete('api/todo/' + id)
    return data
}

