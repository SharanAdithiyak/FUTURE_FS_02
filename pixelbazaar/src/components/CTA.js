import React from "react";

const CTA = () => (
  <div className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-indigo-50 rounded-lg shadow-xl overflow-hidden">
        <div className="px-6 py-12 sm:p-16">
          <div className="max-w-xl mx-auto lg:max-w-none lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Ready to Start Shopping?
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Join thousands of satisfied customers and discover amazing deals on quality products.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a href="/products" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Browse Products
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CTA; 