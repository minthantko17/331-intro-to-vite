import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/minthantko17/331-intro-to-vite-mock/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {
    getEvents(){
        return apiClient.get('/events')
    }
}