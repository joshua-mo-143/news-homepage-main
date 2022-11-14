import React from 'react'

type Props = {
    children: React.ReactNode
}

const NewsArticleList = ({children}: Props) => {
  return (
    <section id="news-article-list">
        {children}
    </section>
  )
}

export default NewsArticleList