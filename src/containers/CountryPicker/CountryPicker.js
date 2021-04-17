import React, { useEffect } from 'react'
import classes from './CountryPicker.module.scss'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

const CountryPicker = props => {
    const {countryList, country, getSourcesData, setCountry} = props

    useEffect(() => {
        getSourcesData()
    }, [getSourcesData])

    let select = <option>Please wait</option>

    if(countryList) {
        select = countryList.map((name) => {
            return (
                <option key={name}>{name}</option>
            )
        })
    }

    return (
        <div className={classes.CountryPicker}>
            <select defaultValue={country} onChange={e => setCountry(e.target.value)}>
                <option value={country} disabled hidden>{country}</option>
                <option value='ro'>ro</option>
                {select}
            </select>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        countryList: state.countryList,
        country: state.country
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSourcesData: () => dispatch(actions.getSourcesData()),
        setCountry: (country) => dispatch(actions.setCountry(country))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CountryPicker);