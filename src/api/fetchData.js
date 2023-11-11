import axios from 'axios';

export function fetchData(page = 1, limit = 12) {
    return axios.get(`https://654bdcd15b38a59f28efd201.mockapi.io/data?page=${page}&limit=${limit}`);
}