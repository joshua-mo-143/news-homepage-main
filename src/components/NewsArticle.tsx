import React from 'react'

type Props = {
    imgsrc?: string;
    title?: String;
    excerpt?: String;
    number?: String;

}

const NewsArticle = ({imgsrc, title, excerpt, number}: Props) => {
  return (
    <div className="news-article-item">
        <img src={imgsrc} alt={`Article image for ${title}`}/>
        <div className="news-article-text">
        <h1 className='news-article-number'>{number}</h1>
        <h1 className="news-article-title link-text-red">{title}</h1>
        <p className="news-article-excerpt article-excerpt">{excerpt}</p>
        </div>
        </div>
  )
}

export default NewsArticle