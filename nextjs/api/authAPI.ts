import {api} from "./index";

const authAPI = {
    login: (login: string, password: string) => api.post('/auth/login', {login, password}),
    profileGet: () => api.get('/auth/profile'),
    logout: () => api.get('/auth/logout'),
    registration: (body) => api.post('/auth/registration', body),
    forgot: () => Promise.resolve(),
    init: () => api.get('/auth/init'),
    activate: (id: string, code: string) => api.post('/auth/activate', {id, code}),
}

export default authAPI;
