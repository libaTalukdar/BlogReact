import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-violet-200 mx-auto'>
      <div className='text-center'>
        <h1 className='text-5xl lg:text-7xl leading-snug mb-5 font-new'>Welcome To My New Blog</h1>
        <p className='w-3/5 mx-auto mb-5'>I started my blog today and you can join in my community if you are interested to sharre your ideas.
          i offer everything you need to get started.
        </p>
       <div>
       <Link to="/" className='font-medium hover:text-orange-900 inline-flex items-center px-2 py-4 rounded-xl bg-violet-800'>Learn More<FaArrowRight className='mt-1 ml-2'/></Link>
       </div>
      </div>
      
    </div>
  )
}

export default Banner