import http from './http.common';

const register = (user_name,pwd) => {
    return http.get(`/signup/${user_name}/${pwd}`);
};

const login = (user_name, pwd) => {
    return http.get(`/login/${user_name}/${pwd}`);
}

const logout = (id, token) => {
    return http.get(`/logout/${token}/${id}`);
}

const authService = {register, login, logout};

export default authService;