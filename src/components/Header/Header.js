import React from 'react'
import NavBar from '../NavBar/NavBar'
import CountryPicker from '../../containers/CountryPicker/CountryPicker'
import Selection from '../../containers/Selection/Selection'

import classes from './Header.module.scss'

const header = () => (
    <header className={classes.Header}>
        <NavBar />
        <CountryPicker />
        <Selection />
    </header>
)

export default header;