import axios from 'axios'

const $host = axios.create({
    baseURL: "https://node-postgres-cloud.herokuapp.com/"
})
const authInterceptor = (config : any) => {
    const token = localStorage.getItem('token')
    config.headers.authorization = token != "Не верный пароль" ? `Bearer ${token}` : ''
    return config
}
$host.interceptors.request.use(authInterceptor)
export {
    $host
}
