import axios from 'axios';

const http = axios.create({
    baseURL: 'http://greenvelvet.alwaysdata.net/kwick/api'
});

export default http;