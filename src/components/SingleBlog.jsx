import React from 'react';
 import { useParams } from 'react-router-dom';
 import blogData from './../api/blogsData.json' 
import { FaUser } from 'react-icons/fa6';
  const SingleBlog = () => { 
    const { id } = useParams();
     const blog = blogData.find(blog => blog.id === parseInt(id)); 
     if (!blog) {
         return <div>Blog not found</div>;
         } 
         return (
           <div className='py-24'>
            
<div className="container mx-auto px-4 py-8"> 
  <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6"> 
    <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-4" /> 
    <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
     <p className="text-gray-600 mb-2">
       <FaUser className="inline-flex items-center mr-2" /> {blog.author} </p>
        <p className="text-gray-600 mb-4">Published: {blog.published_date}</p>
         <div className="text-gray-800 leading-relaxed">{blog.content}</div>
 </div>
  </div>



           </div>

                  );
                   };



        export default SingleBlog