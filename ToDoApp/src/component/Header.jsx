import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full bg-blue-600 text-white py-4 rounded-lg shadow-md">
      <svg className="w-6 h-6 mr-2">
        <path d="M5 2L10 7L5 12" stroke="white" strokeWidth="2" fill="none" />
      </svg>
      <h1 className="text-3xl font-semibold">Todo List</h1>
    </div>
  );
};

export default Header;
