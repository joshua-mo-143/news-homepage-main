import React from 'react'

type Props = {
    title?: String;
    excerpt?: String;
}

const NewsArticleSidebarItem = ({title, excerpt}: Props) => {
  return (
    <div className='sidebar-article'>
        <h2 className='sidebar-article-title link-text'>{title}</h2>
        <p className="article-excerpt">{excerpt}</p>
    </div>
  )
}

export default NewsArticleSidebarItem