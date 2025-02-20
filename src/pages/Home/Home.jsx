import React from 'react'
import Hero from '../../components/Hero/Hero'
import LatestPost from '../../components/LatestPost/LatestPost'

const Home = () => {
  return (
    <div className="p-4 min-h-screen">
        <Hero />
        <LatestPost/>
        
    </div>
  )
}

export default Home