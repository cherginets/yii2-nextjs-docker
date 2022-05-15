import axios from "axios";

const apiAuth = {
    login: (values) => axios.post('http://api.shop.local/auth/login', values, {
        headers: {
            // 'Origin': window.location.href,
            'Content-Type': 'application/json',
        },
    }),
    logout: () => Promise.resolve(),
    registration: () => Promise.resolve(),
    forgot: () => Promise.resolve(),
}

export default apiAuth;
