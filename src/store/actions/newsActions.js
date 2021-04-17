import axios from '../../axios'
import * as actionTypes from './actionTypes'

export const getNewsSuccess  = (response) => {
    return {
        type: actionTypes.GET_NEWS_SUCCESS, 
        news: response.data.articles, 
        totalResults: response.data.totalResults
    }
}

export const getNewsFailed = (error) => {
    return {
        type: actionTypes.GET_NEWS_FAILED
    }
}

export const getNews = (country) => {
    return (dispatch) => {
        axios.get(`top-headlines?country=${country}&category=general`)
            .then(response => {
                dispatch(getNewsSuccess(response))
            })
            .catch(error => {
                dispatch(getNewsFailed(error))
            })
    }
}

export const getNewsOnSelect = (value, country) => {
    return dispatch => {
        axios.get(`top-headlines?category=${value}&country=${country}`)
            .then(response => {
                dispatch(getNewsSuccess(response))
            })
            .catch(error => {
                dispatch(getNewsFailed(error))
            })
    }
}

export const getNewsOnSearch = (query, country) => {
    return dispatch => {
        axios.get(`top-headlines?q=${query}&country=${country}`)
            .then(response => {
                dispatch(getNewsSuccess(response))
            })
            .catch(error => {
                dispatch(getNewsFailed(error))
            })
    }
}

export const getSourcesDataSuccess = (response) => {
    let countryList = []
    response.data.sources.map(source => countryList.push(source.country))
    let CountryListNoDuplicates = [...new Set(countryList)]

    let categoryList = []
    response.data.sources.map(source => categoryList.push(source.category))
    let CategoryListNoDuplicates = [...new Set(categoryList)]
    return {
        type: actionTypes.GET_SOURCES_DATA_SUCCESS, 
        countryList: CountryListNoDuplicates,
        categoryList: CategoryListNoDuplicates
    }
}

export const getSourcesData = () => {
    return dispatch => {
        axios.get('https://newsapi.org/v2/sources?apiKey=6ffc7ec8c5cf4309b4d144a59847bdcd')
            .then(response => {
                dispatch(getSourcesDataSuccess(response))
            })
            .catch(error => {
                dispatch(getNewsFailed(error))
            })
    }
}

export const setCountry = country => {
    return {
        type: actionTypes.SET_COUNTRY, country: country
    }
}

export const setQuery = query => {
    return {
        type: actionTypes.SET_QUERY, query: query
    }
}