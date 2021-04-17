import axios from 'axios'

const apiKey = process.env.REACT_APP_NEWS_KEY

const instance = axios.create({
    baseURL: 'https://newsapi.org/v2/'
})
instance.defaults.headers.common['Authorization'] = `${apiKey}`;

export default instance