import React from "react";

const Stats = () => (
  <div className="bg-indigo-700">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Trusted by thousands of customers
        </h2>
        <p className="mt-3 text-xl text-indigo-200">
          Join our growing community of happy shoppers
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
        <div className="stats-item bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-white">10K+</div>
          <div className="mt-1 text-sm font-medium text-indigo-200">Happy Customers</div>
        </div>
        <div className="stats-item bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-white">500+</div>
          <div className="mt-1 text-sm font-medium text-indigo-200">Products</div>
        </div>
        <div className="stats-item bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-white">50+</div>
          <div className="mt-1 text-sm font-medium text-indigo-200">Categories</div>
        </div>
        <div className="stats-item bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-white">4.8</div>
          <div className="mt-1 text-sm font-medium text-indigo-200">Average Rating</div>
        </div>
      </div>
    </div>
  </div>
);

export default Stats; 