import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Electronics",
    desc: "Latest gadgets and tech accessories",
    img: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
    link: "/products?category=Electronics",
    addId: "el-1",
    addName: "Electronics Bundle",
    addPrice: 29999
  },
  {
    name: "Fashion",
    desc: "Trendy clothing and accessories",
    img: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500",
    link: "/products?category=Fashion",
    addId: "fa-1",
    addName: "Fashion Combo",
    addPrice: 1999
  },
  {
    name: "Home & Kitchen",
    desc: "Everything for your home",
    img: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500",
    link: "/products?category=Home%20%26%20Kitchen",
    addId: "hk-1",
    addName: "Home & Kitchen Set",
    addPrice: 4999
  },
  {
    name: "Sports & Fitness",
    desc: "Gear up for an active lifestyle",
    img: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=500",
    link: "/products?category=Sports%20%26%20Fitness",
    addId: "sf-1",
    addName: "Sports & Fitness Kit",
    addPrice: 2999
  }
];

const Categories = ({ onAddToCart }) => (
  <div id="categories-section" className="bg-gray-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Shop by Category
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
          Explore our wide range of products across different categories.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map(cat => (
          <div key={cat.name} className="category-card bg-white overflow-hidden shadow rounded-lg transition duration-300 ease-in-out">
            <div className="h-48 overflow-hidden">
              <img className="w-full h-full object-cover" src={cat.img} alt={cat.name} />
            </div>
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">{cat.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{cat.desc}</p>
              <div className="mt-4 flex flex-col gap-2">
                <Link to={cat.link} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">View products <span aria-hidden="true">&rarr;</span></Link>
                <button onClick={() => onAddToCart(cat)} className="w-full bg-indigo-600 text-white py-2 rounded font-semibold mt-2">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Categories; 