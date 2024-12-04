import React from 'react'
import blogImage from '../assets/buto.jpg'

const About = () => {
  return (
    
    <div className="container mx-auto px-16 py-20"> 
    <div className="flex flex-col md:flex-row items-center"> 
      <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
       <h1 className="text-5xl font-bold mb-4">
        Welcome to Our Blog</h1>
         <p className="text-lg mb-6">
          Discover the latest news, insights, and trends in technology, development, and design.</p>
          <p className="text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam et modi quibusdam officiis ex beatae ullam ab ipsa sunt.</p> 
          <a href="#latest-posts" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Explore Now</a> </div>
           <div className="md:w-1/2">
            <img src={blogImage} alt="Hero" className="w-full h-auto rounded-full shadow-lg" /> 
            </div>
             </div> 
            </div>
     
    
  )
}

export default About