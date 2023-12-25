import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'Content-Type': 'application/json'
    },
})
instance.interceptors.request.use(function (cfg) {
    const authToken = localStorage.getItem("auth_token")
    if (authToken !== null && authToken !== "undefined") {
        cfg.headers.Authorization = `Token ${authToken}`
    }
    return cfg
}, function (error) {
    return Promise.reject(error)
})
export default instance