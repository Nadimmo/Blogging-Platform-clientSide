import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaComment, FaEye, FaShare } from 'react-icons/fa';

const latestBlogs = [
  {
    id: 1,
    title: "The Future of AI in Blogging",
    description: "Explore how artificial intelligence is revolutionizing content creation and enhancing user experience.",
    image: "https://i.ibb.co.com/L06xgX8/writer.jpg",
    author: "John Doe",
    category: "Technology",
    comments: 24,
    views: 100,
    likes: 50,
    time: "10 minutes ago"
  },
  {
    id: 2,
    title: "10 Tips for Writing Engaging Content",
    description: "Discover proven strategies to captivate your readers and keep them coming back for more.",
    image: "https://i.ibb.co.com/L909ycM/remote.jpg",
    author: "Jane Smith",
    category: "Writing",
    comments: 18,
    views: 85,
    likes: 40,
    time: "30 minutes ago"
  },
  {
    id: 3,
    title: "How to Grow Your Blog Audience",
    description: "Learn effective techniques to expand your reach and build a loyal readership.",
    image: "https://i.ibb.co.com/604gSjQf/bg.jpg",
    author: "Emily Johnson",
    category: "Marketing",
    comments: 35,
    views: 200,
    likes: 75,
    time: "1 hour ago"
  }
];

const LatestPost = () => {
  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest Blogs</h2>
      <p className="text-center text-gray-600 text-sm mb-4">Discover the latest news, insights, and articles from the industry.</p>
      <div className=" mx-auto grid md:grid-cols-3 gap-6 px-4">
        {latestBlogs.map(blog => (
          <div key={blog.id} className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            {/* // Blog content */}
            <div className="p-4 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
              <div className="flex justify-between items-center gap-2 mb-4 text-gray-500 text-sm">
                <p><span className='font-bold'>By</span>: {blog.author}</p>
                <p><span className='font-bold'>Category</span>: {blog.category}</p>
              </div>
              <p className="text-gray-600 mb-3 ">{blog.description}</p>
              <p className="text-sm text-gray-500">Last updated: {blog.time}</p>
              <div className="flex justify-between mt-4 gap-4 text-gray-600 text-sm">
                <p className="flex items-center gap-1"> <AiFillLike className='text-2xl' /> {blog.likes}</p>
                <p className="flex items-center gap-1"> <FaComment  className='text-2xl'/> {blog.comments}</p>
                <p className="flex items-center gap-1"><FaEye  className='text-2xl'/> {blog.views}</p>
                <a href='#' className="text-blue-500 underline">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPost;
