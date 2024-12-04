import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

import blogData from './../api/blogsData.json'

const MyBlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ["All","Startups","Security","AI","Apps","Tech"];

   

  const filteredData = selectedCategory === 'All'
    ? blogData
    : blogData.filter(blog => blog.category === selectedCategory);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
     if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) { 
      setCurrentPage(currentPage + 1); }
     }; 
  const prevPage = () => {
     if (currentPage > 1) {
       setCurrentPage(currentPage - 1);

      } 
    };

    const renderPageNumbers = () => {
       const pageNumbers = [];
        const maxVisiblePages = 5; 
        const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2)); const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
       for (let i = startPage; i <= endPage; i++) {
         pageNumbers.push( <button key={i} onClick={() => paginate(i)} className={`py-2 px-4 rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`} > 
         {i} 
         </button> 
         );
         } 
         return pageNumbers; };

  return (
    <div>
      <div >
       
      <div className='px-4 mb-8 space-x-6 lg:space-x-16 flex flex-wrap space-y-2 items-center border border-b-2 py-5 border-gray-300'>
      {categories.map(category => ( <button key={category} onClick={() => setSelectedCategory(category)} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700" > {category} </button> ))}
      </div>
    
      
      </div>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {currentItems.map((blog) => <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded-xl cursor-pointer'>
            <div>
                <img src={blog.image} alt="" className='w-full'/>
                <h3 className='mt-4 font-bold hover:text-red-950 cursor-pointer'>{blog.title}</h3>
                <p className='mb-2'><FaUser className='inline-flex items-center mr-2'/>{blog.author}</p>
                <p>Published:{blog.published_date}</p>
            </div>
        </Link>
      )}
      </div>
      <div className='flex p-6 justify-center max-w-7xl'>
      <button className='h-10 border-2 border-gray-700 px-2 rounded-lg mr-2'
       onClick={prevPage} disabled={currentPage === 1}>Previous</button>
      {renderPageNumbers()} {totalPages > 5 && currentPage + 2 < totalPages && <span className="py-2 px-4">...</span>} {totalPages > 5 && <button onClick={() => paginate(totalPages)} className={`py-2 px-4 rounded ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`} > {totalPages} </button>}
        <button className='h-10 border-2 border-gray-700 px-2 rounded-lg mr-2'
         onClick={nextPage} 
         disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}>Next</button>

      </div>


      </div>
      
  );
};

export default MyBlogPage;

