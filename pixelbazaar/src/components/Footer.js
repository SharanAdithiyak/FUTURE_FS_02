import React from "react";

const Footer = () => (
  <footer className="bg-gray-800">
    <div className="max-w-7xl mx-auto py-8 px-4 overflow-hidden sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Shop</h3>
          <ul className="mt-4 space-y-4">
            <li><a href="#" className="text-base text-gray-300 hover:text-white">All Products</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">New Arrivals</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Deals & Offers</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Best Sellers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Customer Service</h3>
          <ul className="mt-4 space-y-4">
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact Us</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">FAQs</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Shipping Policy</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Returns & Refunds</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About</h3>
          <ul className="mt-4 space-y-4">
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Our Story</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect With Us</h3>
          <div className="mt-4 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-pinterest"></i></a>
          </div>
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Newsletter</h4>
            <div className="mt-2 flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 border border-gray-700 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" />
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8">
        <p className="mt-8 text-center text-base text-gray-400">&copy; {new Date().getFullYear()} PixelBazaar. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer; 