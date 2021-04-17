import React from 'react'
import Search from '../../containers/Search/Search'

import Logo from '../UI/Logo/Logo'
import classes from './NavBar.module.scss'

const navBar = () => (
    <div className={classes.Container}>
        <div className={classes.LogoContainer}>
            <Logo />
        </div>
        <div>
            <Search />
        </div>
    </div>
)

export default navBar