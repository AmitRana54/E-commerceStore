import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className=" ml-20 mt-28 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap  justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Gadget Galaxy</h2>
            <p>Your one-stop shop for all the latest electronics and gadgets.</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">FAQs</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Returns</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Shipping Info</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Our Story</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-gray-300"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>&copy; 2024 Gadget Galaxy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
