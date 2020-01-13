import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-telavita.herokuapp.com/'
});

export default api;
