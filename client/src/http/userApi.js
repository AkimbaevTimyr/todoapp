import { $host } from ".";
import jwt_decode from "jwt-decode";



export const registration = async(id, email, password) => {
    const {data} = await $host.post('api/user/registration', {id, email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data)
    return jwt_decode(data)
}