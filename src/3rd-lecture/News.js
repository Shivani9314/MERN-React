import React from 'react'
import './News.css';

function News({news}) {
  return (
    <div className='news-container'>
        <img src={news.urlToImage} alt= {news.title} />
        <h2>{news.title}</h2>
        <p>{news.description}</p>
        <button className='article-btn' onClick ={() => window.open(news.url) }>Read Full Article  <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  )
}

export default News;