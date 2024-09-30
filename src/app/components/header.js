import React from "react";
import '../custom.css'
import Image from 'next/image';
import logo from "../img/logo.png"
const StickyHeader = () => {
  return (
    <header className="bg-gray-500 bg-opacity-50 backdrop-blur-md sticky top-0 z-50  custom-header">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Логотип */}
        <div className="text-2xl ">
          <a href="/" className="text-white hover:text-white">
            MakeMeSites
          </a>
        </div>

        {/* Меню */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-white hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">
                Websites
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">
                Apps
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default StickyHeader;
