import axios from "axios";

axios.defaults.withCredentials = true;

export const api = axios.create({
    baseURL: 'http://api.shop.local',
    withCredentials: true,
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})
