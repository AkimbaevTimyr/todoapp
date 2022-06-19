import { $host } from ".";
import jwt_decode from "jwt-decode";

export const registration = async(id, email, password) => {
    const {data} = await $host.post('api/user/registration', {id, email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data[0])
    return [data[0], data[1]]
}
export const check = async () =>{
    const {data} = await $host.get('api/user/auth')
    localStorage.setItem('token', data)
    return data
}