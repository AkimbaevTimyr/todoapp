import axios from 'axios'

const $host = axios.create({
    baseURL: "https://node-postgres-cloud.herokuapp.com/"
})
const authInterceptor = config => {
    const token = localStorage.getItem('token')
    config.headers.authorization = `Bearer ${token}`
    return config
}
$host.interceptors.request.use(authInterceptor)
export {
    $host
}