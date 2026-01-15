import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">ALX Listings</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Listings</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Search & Auth */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="text-blue-600 font-medium hover:underline">Sign In</button>
          <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="bg-gray-50 py-2 px-4 overflow-x-auto whitespace-nowrap">
        {["Rooms", "Mansion", "Countryside", "Villa", "Chalet", "Apartment"].map((type) => (
          <button
            key={type}
            className="inline-block bg-white border rounded-full px-4 py-1 mr-2 mb-2 hover:bg-blue-100"
          >
            {type}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
