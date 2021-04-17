import React, { useEffect } from 'react'
import Spinner from '../../components/UI/Spinner/Spinner'
import classes from './NewsCards.module.scss'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import NewsCard from '../../components/NewsCard/NewsCard'
import withErrorHandler from '../../components/hoc/withErrorHandling/withErrorHandler'
import Error from '../../components/UI/Error/Error'
import axios from '../../axios'

const NewsCards = props => {
    const { news, totalResults, country, onGetNews, error} = props
    
    useEffect(() => {
        onGetNews(country)
    }, [onGetNews, country])

    let articles = (
        <div className={classes.Spinner}>
            <Spinner />
        </div>        
    )

    if (news) {
        news.forEach((article, i) => {
            article.id=i+1
        });

        articles = news.map(article => {
            return(
                <NewsCard
                    key={article.id}
                    id={article.id}
                    urlToImage={article.urlToImage}
                    url={article.url}
                    title={article.title}
                    author={article.author}
                    publishedAt={article.publishedAt}
                    description={article.description}
                /> 
            )
        })
    }

    if (error) {
        articles = <Error />
    }

    let noResults = null
    if (news && totalResults === 0) {
        noResults = (
            <div className={classes.Spinner}>
                <p>Sorry, no news about that.</p>
                <p>Try something different!</p>
            </div>    
        ) 
    }

    return (
        <main className={classes.Center}>
            {articles}
            {noResults}
        </main>
    )
}

const mapStateToProps = state => {
    return {
      news: state.news,
      totalResults: state.totalResults,
      country : state.country
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onGetNews: (country) => dispatch(actions.getNews(country)),
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(NewsCards, axios));