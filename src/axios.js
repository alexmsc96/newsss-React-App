import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://newsapi.org/v2/'
})
instance.defaults.headers.common['Authorization'] = '6ffc7ec8c5cf4309b4d144a59847bdcd';

export default instance