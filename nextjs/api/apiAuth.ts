import {api} from "./index";

const apiAuth = {
    login: (values) => api.post('/auth/login', values, {
        headers: {
            // 'Origin': window.location.href,
            'Content-Type': 'application/json',
        },
        // withCredentials: true,
    }),
    logout: () => Promise.resolve(),
    registration: () => Promise.resolve(),
    forgot: () => Promise.resolve(),
}

export default apiAuth;
