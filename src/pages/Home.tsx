import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import NewsItemMain from '../components/NewsItemMain'
import NewsArticleList from '../components/NewsArticleList'
import NewsArticle from '../components/NewsArticle'
import RetroPcsImg from '../assets/image-retro-pcs.jpg'
import TopLaptopsImg from '../assets/image-top-laptops.jpg'
import GamingGrowthImg from '../assets/image-gaming-growth.jpg'
import NewsArticleSidebar from '../components/NewsArticleSidebar'
import NewsArticleSidebarItem from '../components/NewsArticleSidebarItem'

type Props = {}

const Home = (props: Props) => {
  return (
    <Layout>
      <main className="wrapper" id="home-page">
      <section id="home-main">
            <NewsItemMain/>
            <NewsArticleSidebar>
              <NewsArticleSidebarItem title="Hydrogen VS Electric Cars" excerpt="Will hydrogen-fueled cars ever catch up to EVs?"/>
              <NewsArticleSidebarItem title="Hydrogen VS Electric Cars" excerpt="Will hydrogen-fueled cars ever catch up to EVs?"/>
              <NewsArticleSidebarItem title="Hydrogen VS Electric Cars" excerpt="Will hydrogen-fueled cars ever catch up to EVs?"/>
            </NewsArticleSidebar>
      </section>
      <NewsArticleList>
        <NewsArticle title="Reviving Retro PCs" excerpt="What happens when old PCs are given modern upgrades?" imgsrc={RetroPcsImg} number="01"/>
        <NewsArticle title="Top 10 Laptops of 2022" excerpt="Our best picks for various needs and budgets." imgsrc={TopLaptopsImg} number="02"/>
        <NewsArticle title="The Growth of Gaming" excerpt="How the pandemic has sparked fresh opportunities." imgsrc={GamingGrowthImg} number="03"/>
      </NewsArticleList>
      </main>
    </Layout>
  )
}

export default Home