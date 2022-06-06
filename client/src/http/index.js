import axios from 'axios'

const $host = axios.create({
    baseURL: "https://node-postgres-cloud.herokuapp.com/"
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$host.interceptors.request.use(authInterceptor)

export {
    $host
}

