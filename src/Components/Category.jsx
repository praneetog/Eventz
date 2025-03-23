// src/components/CategoryDropdown.jsx
import React from 'react';

const Category = ({ onSelectCategory }) => {
  const categories = ['Sports', 'Tech', 'AI', 'Blockchain'];

  return (
    <select
      onChange={(e) => onSelectCategory(e.target.value)}
      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All Categories</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Category;