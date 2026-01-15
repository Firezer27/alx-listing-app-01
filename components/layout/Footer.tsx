import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} ALX Listings. All rights reserved.</p>
        <div className="flex justify-center mt-2 space-x-4">
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
