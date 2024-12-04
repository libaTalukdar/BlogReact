import React from 'react'
// import BlogPage from '../components/BlogPage'
import MyBlogPage from '../components/MyBlogPage'

const Blogs = () => {
  return (
    <div>
      <div className='py-40 text-center px-4'>
        <h2 className='text-5xl lg:text-7xl font-bold leading-snug'>My Blog Page</h2>
      </div>
       {/* all blogs containr */}
       <div className='max-w-7xl mx-auto'>
         {/* <BlogPage/> */}
         <MyBlogPage/>
</div>
    </div>
  )
}

export default Blogs
