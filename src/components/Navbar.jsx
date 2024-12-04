import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaDribbbleSquare } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
    const [isMenuOpen,setIsMenoOpen] = useState(false);
    const toggleMenu = () =>{
        setIsMenoOpen(!isMenuOpen);
    }
    const navItems = [
        
           { path:"/", link:"Home" },
           { path:"/services", link:"Services" },
           { path:"/about", link:"About" },
           { path:"/contact", link:"Contact" },
           { path:"/blogs", link:"Blogs" },
        
    ]
  return (
    <header className='bg-amber-200 fixed top-0 left-0 right-0'>
        <nav className='px-4 py-4 max-w-7xl mx-auto  flex justify-between items-center'>
            <a href="/" className='text-xl font-bold text-black'>Blog<span className='text-green-950'>New</span></a>
            {/* navitems for lg device */}
            <ul className='md:flex gap-12 text-lg hidden'>
                {navItems.map(({path,link})=> <li className='text-gray-950'key={path}>
                    <NavLink     className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                     to={path}>{link}</NavLink>

                </li>)
                }
            </ul>
            {/* menu icons */}
             <div className='lg:flex gap-4 items-center hidden'>
                <a href="/" className='text-2xl hover:text-blue-950 '><FaFacebook /></a>
               
               <a href="/" className=' text-2xl hover:text-blue-950 '><FaTwitter /></a> 
               <a href="/" className='text-2xl hover:text-blue-950 '><FaSquareInstagram /></a>
               <a href="/" className='text-2xl hover:text-blue-950'><FaDribbbleSquare /></a>
               <button className='bg-green-900 px-6 py-2 rounded-xl'>Log in</button>
             </div>
            {/* mobile menu btn,display mobile screen */}
            <div className='md:hidden'>
     <button onClick={toggleMenu} className='cursor-pointer'>
        {
            isMenuOpen?<IoCloseOutline className='w-6 h-6'/>:  <IoMenu className='w-6 h-6'/>
        }
      </button>
            </div>

        </nav>
        {/* menu items only for mobiles */}
        <div>
        <ul className={`md:hidden gap-10 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen?"fixed top-0 left-0 w-full transition-all ease-out duration-150":"hidden"}`}>
                {navItems.map(({path,link})=> <li className='text-gray-950'key={path}>
                    <NavLink 
                     onClick={toggleMenu} to={path}>{link}</NavLink>

                </li>)
                }
            </ul> 
        </div>
    </header>
  )
}

export default Navbar
