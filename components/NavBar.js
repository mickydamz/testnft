import React from 'react'
import Link from 'next/link'


 const NavBar = () => {
    return (
        <div>
<nav className="bg-gray-400">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="logo flex-shrink-0 flex items-center">
        <Link  href="/">
        <div className="flex-shrink-0 flex items-center">
          <img className="block lg:hidden h-10 w-auto" src="./logo.png"  alt="Workflow"/>
          <img className="hidden lg:block h-10 w-auto" src="./logo.png" alt="Workflow"/>
          
        </div>
        </Link>


        </div>

        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
              <Link href="/">
            <a className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Explore</a>
                </Link>
                <Link  href="/purchased">
            <a className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Purchased</a>
            </Link>
                <Link href="/dashboard">
            <a  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
            </Link>
                <Link href="/create-nfts">
            {/* <a  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Create NFt</a> */}
            </Link>
                
          </div>
        </div>
      </div>
    
    </div>
  </div>

 
  <div className="sm:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
       <Link  href="/">
      <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Explore</a>
      </Link>
                <Link href="/purchased">
      <a  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Purchased</a>
      </Link>
                <Link href="/dashboard">
      <a  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
      </Link>
         <Link href="/create-nfts">
      <a  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Create NFt</a>
      </Link>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavBar;