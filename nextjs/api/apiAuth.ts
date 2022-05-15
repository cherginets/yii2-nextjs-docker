import {api} from "./index";

const apiAuth = {
    login: (values) => api.post('/auth/login', values, {
        withCredentials: true,
    }),
    logout: () => Promise.resolve(),
    registration: () => Promise.resolve(),
    forgot: () => Promise.resolve(),
}

export default apiAuth;
