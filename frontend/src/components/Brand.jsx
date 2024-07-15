import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Public/logostore.jpeg';
import { FaTv, FaLaptop, FaHeadphones } from 'react-icons/fa';

function Brand() {
  return (
    <div className="h-20 w-full  flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Gadget Galaxy" className="h-12 w-12 md:h-16 md:w-16" />
        <h1 className="text-white text-lg md:text-2xl">Gadget Galaxy</h1>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link to="/shop" className="flex items-center space-x-2 text-white hover:text-gray-300">
          <FaTv />
          <span>Electronics</span>
        </Link>
        <Link to="/shop" className="flex items-center space-x-2 text-white hover:text-gray-300">
          <FaLaptop />
          <span>Laptops</span>
        </Link>
        <Link to="/shop" className="flex items-center space-x-2 text-white hover:text-gray-300">
          <FaHeadphones />
          <span>Airpods</span>
        </Link>
      </div>
      <div className="md:hidden">
        <button className="text-white">Menu</button>
      </div>
    </div>
  );
}

export default Brand;
