import {api} from "./index";

const apiAuth = {
    login: (values) => api.post('/auth/login', values),
    profileGet: () => api.get('/auth/profile'),
    logout: () => Promise.resolve(),
    registration: (body) => api.post('/auth/registration', body),
    forgot: () => Promise.resolve(),
    init: () => api.get('/auth/init'),
    activate: (id: string, code: string) => api.post('/auth/activate', {id, code}),
}

export default apiAuth;
