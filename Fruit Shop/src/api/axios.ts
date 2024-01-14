import axios from "axios"
console.log(import.meta.env.API_BASE_URL);

export default axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 1000
})