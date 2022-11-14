import React from 'react'
import splashImg from "../assets/image-web-3-desktop.jpg"

type Props = {}

const NewsItemMain = (props: Props) => {
  return (
    <section id="home-splash-container">
        <img src={splashImg} id="home-splash-img" height="250px"/>
        <h1 id="home-splash-title">
            The Bright Future of Web 3.0?
        </h1>
        <div id="home-splash-excerpt">
            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <button className="readmore-button">Read More</button>
        </div>
    </section>
  )
}

export default NewsItemMain