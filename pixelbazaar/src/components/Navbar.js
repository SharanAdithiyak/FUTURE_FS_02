import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSignIn, onSignUp, onCart, userEmail, onSignOut }) => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <i className="fas fa-shopping-bag text-indigo-600 text-2xl mr-2"></i>
              <span className="text-xl font-bold text-indigo-600">PixelBazaar</span>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium">Home</Link>
            <Link to="/products" className="text-gray-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-indigo-400 text-sm font-medium">Products</Link>
            <a href="#categories-section" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">Categories</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">About</a>
          </div>
          <div className="flex items-center">
            <button className="bg-gray-100 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
              <i className="fas fa-search h-6 w-6"></i>
            </button>
            {userEmail ? (
              <>
                <span className="ml-4 text-indigo-600 font-semibold">{userEmail}</span>
                <button onClick={onSignOut} className="ml-2 px-4 py-1 rounded bg-red-600 text-white hover:bg-red-700 font-semibold">Sign Out</button>
              </>
            ) : (
              <>
                <button onClick={onSignIn} className="ml-3 px-4 py-1 rounded bg-gray-700 text-gray-200 hover:bg-indigo-600 font-semibold">Sign In</button>
                <button onClick={onSignUp} className="ml-2 px-4 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700 font-semibold">Sign Up</button>
              </>
            )}
            <button onClick={onCart} className="ml-3 bg-gray-100 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none relative" aria-label="Shopping cart">
              <i className="fas fa-shopping-cart h-6 w-6"></i>
            </button>
            <button className="md:hidden ml-3 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <i className="fas fa-bars h-6 w-6"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 