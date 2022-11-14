import React from 'react'

type Props = {
    children: React.ReactNode
}

const NewsArticleSidebar = ({children}: Props) => {
  return (
    <div id="home-sidebar">
    <h1 className="sidebar-title">New</h1>
    {children}
    </div>
  )
}

export default NewsArticleSidebar