import http from './http.common';

const getUsers = (token) => {
    return http.get(`/user/logged/${token}`);
};

const getMessages = (token,timestamp) => {
    return http.get(`/talk/list/${token}/${timestamp}`);
};

const postMessage = (id,token,message) => {
    return http.get(`/say/${token}/${id}/${message}`);
};

const dataService = { getUsers, getMessages, postMessage };
export default dataService;