import React from 'react'
import classes from './Selection.module.scss'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/newsActions'

const selection = props => {
    const {categoryList, country ,getNewsOnSelect} = props

    const onSelectHandler = (value) => {
        getNewsOnSelect(value, country)
    }

    let categoryLis = null
    if(categoryList) {
        categoryLis = categoryList.map(category => {
            return (
                <li onClick={(e) => onSelectHandler(e.target.dataset.value)} key={category} data-value={category}>
                    {category}    
                </li>
            )
        })
    }

    let categoryOptions = null
    if(categoryList) {
        categoryOptions = categoryList.map(category => {
            return (
                <option key={category} value={category}>{category}</option>
            )
        })
    }

    return (
        <React.Fragment>
            <ul className={classes.Selection}>
                {categoryLis}
            </ul>
            <select defaultValue="none" onChange={(e) => onSelectHandler(e.target.value, country)} className={classes.SelectionMobileOnly}>
                <option value="none" disabled hidden> 
                    Select a category 
                </option> 
                {categoryOptions}
            </select>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        categoryList: state.categoryList,
        country: state.country
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNewsOnSelect: (value, country) => dispatch(actions.getNewsOnSelect(value, country))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(selection);