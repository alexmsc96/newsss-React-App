import React from 'react';
import newsImg from '../../assets/images/news.png'
import classes from './NewsCard.module.scss'

const NewsCard = props => {
    const { urlToImage, url, title, author, publishedAt, description } = props

    return (
        <div className={classes.NewsCard}>
            <div className={classes.Img}>
                <img alt={title} src={urlToImage ? urlToImage : newsImg}/>
            </div>
            <h1 className={classes.Title}>{title}</h1>
            <div className={classes.Data}>
                <p>{author}</p>
                <p>{new Date(publishedAt).toDateString()}</p>
            </div>
            <p className={classes.Description}>{description}</p>
            <a target="_blank" rel="noopener noreferrer" href={url} className={classes.Url}>Click here for the full article <span>&rarr;</span></a>
        </div>
    )
}

export default NewsCard;