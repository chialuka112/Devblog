import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-br from-slate-50 to-blue-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-mono text-sm">&lt;/&gt;</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Blog</span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
            </div>

            {/* Actions: visible on all sizes */}
            <div className="flex items-center space-x-4">
              <button className="hidden sm:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setOpen((s) => !s)}
                aria-expanded={open}
                aria-label={open ? 'Close menu' : 'Open menu'}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 md:hidden"
              >
                <svg className={`h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {open ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel - show/hide with state */}
        <div className={`${open ? 'block' : 'hidden'} md:hidden bg-white border-t`}>
          <div className="px-4 pt-4 pb-4 space-y-1">
            <Link to="/" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Home</Link>
            <Link to="/blog" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Blog</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">About</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Contact</Link>
            <div className="pt-2">
              <button onClick={() => setOpen(false)} className="w-full text-left bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get Started</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;