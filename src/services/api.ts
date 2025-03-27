import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pizzaria-beckend.vercel.app'
    // http://ip_local:3333
})

export { api }