import React from 'react'
import Hero from '../../components/Hero/Hero'
import LatestPost from '../../components/LatestPost/LatestPost'
import AllBlogs from '../../components/AllBlogs/AllBlogs'
import RightSide from '../../components/RightSide/RightSide'

const Home = () => {
  return (
    <div className="p-4 min-h-screen">
      <Hero />
      <LatestPost />
      <div className='mt-5'>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Interactive Blog Engagement with Likes & Comments</h2>
          <p className='text-sm text-center'>Enhance your blog platform with interactive features! Implement a like button that toggles between like and unlike, dynamically updating the count. Additionally, add a comment section that appears when users click the comment icon and hides when clicked again. This creates a seamless and engaging user experience, similar to LinkedIn. 🚀</p>
          <br />
        <div className='lg:flex justify-between gap-4 lg:m-5'>
          < AllBlogs />
          <div className='lg:w-[400px] '>
            <RightSide />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home