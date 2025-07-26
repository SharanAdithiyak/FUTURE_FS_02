import React from "react";

const Features = () => (
  <div className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Why Choose PixelBazaar?
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
          We're committed to providing you with the best shopping experience possible.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="pt-6">
          <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div className="feature-icon bg-indigo-50 text-indigo-600 mx-auto">
                <i className="fas fa-truck text-2xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-medium text-center text-gray-900">Free Shipping</h3>
              <p className="mt-2 text-base text-center text-gray-600">
                Free delivery on orders above ₹4,000
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div className="feature-icon bg-green-50 text-green-600 mx-auto">
                <i className="fas fa-lock text-2xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-medium text-center text-gray-900">Secure Payment</h3>
              <p className="mt-2 text-base text-center text-gray-600">
                100% secure and encrypted transactions
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div className="feature-icon bg-blue-50 text-blue-600 mx-auto">
                <i className="fas fa-exchange-alt text-2xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-medium text-center text-gray-900">Easy Returns</h3>
              <p className="mt-2 text-base text-center text-gray-600">
                30-day hassle-free return policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Features; 