import React from 'react'
import Hero from '../../components/Hero/Hero'
import LatestPost from '../../components/LatestPost/LatestPost'
import FeaturedBlogs from '../../components/FeaturedBlogs/FeaturedBlogs'
import Categories from '../../components/Categories/Categories'
import Author from '../../components/Author/Author'

const Home = () => {
  return (
    <div className="p-4 min-h-screen">
      <Hero />
      <LatestPost />
      <FeaturedBlogs/>
      <Categories/>
      <Author/>
    </div>
  )
}

export default Home