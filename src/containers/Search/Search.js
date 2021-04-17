import { useRef } from 'react'
import classes from './Search.module.scss';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index';

const Search = props => {
    const { query, country, getNewsOnSearch, setQuery} = props
    const inputRef = useRef()

    const onSubmitHandler = (e, query, country) => {
        e.preventDefault()
        getNewsOnSearch(query, country)
        inputRef.current.value = ''
    }

    let timer = null
    const setTimer  = e => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            setQuery(e.target.value)
        }, 250);
    }

    return (
        <form 
            onSubmit={(e) => onSubmitHandler(e, query, country)} 
            className={classes.SearchForm}>
            <input
                ref={inputRef}
                required
                onChange={(e) => {
                    setTimer(e)
                }}
                className={classes.Search} 
                type="text" 
                placeholder="Search..."/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        query: state.query,
        country: state.country
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNewsOnSearch: (query, country) => dispatch(actions.getNewsOnSearch(query, country)),
        setQuery: query => dispatch(actions.setQuery(query)) 
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Search);