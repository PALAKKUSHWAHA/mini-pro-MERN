import axios from 'axios';

const API = axios.create({ baseURL: ' https://mini-pro-mern-1.onrender.com/' });

export const uploadImage = (data) => API.post('/upload/', data);
export const uploadPost = (data) => API.post('/post', data);