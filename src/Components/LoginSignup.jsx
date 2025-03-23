// src/components/LoginSignup.jsx
import React from 'react';

const LoginSignup = () => {
  return (
    <div className="bg-[#EEF5DB] min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#210203]">EVENTZZZ</h1>
        <p className="text-center text-gray-600 mb-8">Gold oil events now only in your hands!</p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter phone number"
            className="w-full p-3 border rounded-lg focus:outline-none border-[#210203] text-[#210203]"
          />
          <button
            className="w-full py-3 rounded-lg transition duration-300 bg-[#210203] text-[#EEF5DB] hover:bg-[#000000]"
          >
            Continue
          </button>
        </div>
        <p className="text-center text-gray-600 mt-6">
          Don't have an account? <span className="cursor-pointer text-[#210203]">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;