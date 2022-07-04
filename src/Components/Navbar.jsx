import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center shadow-md h-16 text-black relative'>
         <Link to='/' className='pl-4'>Senior High</Link>
         <div className='px-4 cursor-pointer md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
         </div>
         <div className='pr-8 md:block hidden'>
            <Link to='/' className='pr-4'>home</Link>
            <Link to='/' className='pr-4'>about</Link>
            <Link to='/' className='pr-4'>contacts</Link>
            <Link to='/' className='pr-4'>friends</Link>
          </div>
    </nav>
  )
}

export default Navbar