import * as actionTypes from '../actions/actionTypes'

const initState = {
    news: null,
    totalResults: 0,
    query: '',
    countryList: [],
    categoryList: [],
    country: 'us',
    error: false,
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.GET_NEWS_SUCCESS :
            return {
                ...state,
                news: action.news,
                totalResults: action.totalResults,
                error: false,
            }
        case actionTypes.GET_NEWS_FAILED: 
            return {
                ...state,
                error: true
            }
        case actionTypes.GET_SOURCES_DATA_SUCCESS :
            return {
                ...state,
                countryList: action.countryList,
                categoryList: action.categoryList,
                error: false
            }
        case actionTypes.SET_QUERY : 
            return {
                ...state,
                query: action.query
            }
        case actionTypes.SET_COUNTRY : 
            return {
                ...state,
                country: action.country 
            }
        default: 
            return state
    }
}

export default reducer