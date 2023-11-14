import axios from 'axios';

export function fetchData(param) {
    const { page = 1, limit = 12, make = '', rentalPrice = '' } = param;
    return axios.get(`https://654bdcd15b38a59f28efd201.mockapi.io/data?page=${page}&limit=${limit}&make=${make}&rentalPrice=${rentalPrice}`);
}