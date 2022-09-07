import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://dev.codeleap.co.uk/careers/'
});
