// to create a  centralized api

import axios from 'axios';
import { api } from '../urlConfig';

const token=window.localStorage.getItem('token');

const instance = axios.create({
    baseURL: api,
    headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': true,
        'Authorization': token ? `Bearer ${window.localStorage.token}` : ''
    }
});

export default instance;