
import BlogCard from './BlogCard';

const allBlogs = [
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

const AllBlogs = () => {
   
  return (
      <div className="w-full lg:max-w-3xl">
       {
        allBlogs.map(blog => <>
        <BlogCard blog={blog}></BlogCard>
        </>)
       }
      </div>
  );
};

export default AllBlogs;
