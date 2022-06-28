import { $host } from ".";
import jwt_decode from "jwt-decode";

export const registration = async(id: number, email: string, password: string):Promise<object> => {
    const {data} = await $host.post('api/user/registration', {id, email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const login = async (email: string, password: string):Promise<string[]> => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data[0])
    return [data[0], data[1]]
}
export const check = async ():Promise<string> =>{
    const {data} = await $host.get('api/user/auth')
    localStorage.setItem('token', data)
    return data
}