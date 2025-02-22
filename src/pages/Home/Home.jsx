import React from 'react'
import Hero from '../../components/Hero/Hero'
import LatestPost from '../../components/LatestPost/LatestPost'
import FeaturedBlogs from '../../components/FeaturedBlogs/FeaturedBlogs'

const Home = () => {
  return (
    <div className="p-4 min-h-screen">
      <Hero />
      <LatestPost />
      <FeaturedBlogs/>
    </div>
  )
}

export default Home