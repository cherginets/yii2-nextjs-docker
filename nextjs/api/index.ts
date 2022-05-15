import axios from "axios";

export const api = axios.create({
    baseURL: 'http://api.shop.local',
    withCredentials: true,
    headers: {
        'content-type': 'application/json',
    },
})
