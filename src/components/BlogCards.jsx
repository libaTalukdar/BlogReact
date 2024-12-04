import React from 'react'
import Blogdata from './../api/blogsData.json'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const BlogCards = ({blogs}) => {
   
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {
       Blogdata.map((blog)=><Link key={blog.id} className='p-5 shadow-lg rounded-xl cursor-pointer'>
            <div>
                <img src={blog.image} alt="" className='w-full'/>
                <h3 className='mt-4 font-bold hover:text-red-950 cursor-pointer'>{blog.title}</h3>
                <p className='mb-2'><FaUser className='inline-flex items-center mr-2'/>{blog.author}</p>
                <p>Published:{blog.published_date}</p>
            </div>
        </Link>
            
           )
      }
    </div>
  )
}

export default BlogCards
