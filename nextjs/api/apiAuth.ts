import {api} from "./index";

const apiAuth = {
    login: (values) => api.post('/auth/login', values),
    profileGet: () => api.get('/auth/profile'),
    logout: () => Promise.resolve(),
    registration: () => Promise.resolve(),
    forgot: () => Promise.resolve(),
}

export default apiAuth;
