// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#210203] text-[#EEF5DB] p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        EVENTZZZ
      </Link>
      <Link
        to="/login"
        className="bg-[#EEF5DB] text-[#210203] px-4 py-2 rounded hover:bg-gray-100 transition duration-300"
      >
        Login/Sign Up
      </Link>
    </header>
  );
};

export default Header;