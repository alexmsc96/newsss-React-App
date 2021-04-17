import React from 'react'
import classes from './Footer.module.scss'

const footer = () => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.FooterContent}>
                <p>©Muscina Alexandru, 2021</p>
            </div>
        </footer>
    )
}

export default footer