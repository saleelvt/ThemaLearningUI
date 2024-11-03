import React, { useState } from "react";
import { FaTh, FaShareAlt, FaShoppingBag } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi"; // Added for mobile menu

export const Navbar: React.FC = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{ backgroundColor: "#FDFBEF" }} className="py-6 mx-auto px-4 lg:px-6">
      <div style={{ backgroundColor: "#FDFBEF" }} className="container mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center">
            <div className="thema bg-[#FDFBEF] hover:bg-white rounded-lg hover:border hover:border-gray-800 h-11 p-2 w-40 place-items-center flex justify-around">
              <span className="text-customPurple font-bold text-2xl">Thema</span>
              <button className="px-2 text-xs rounded-full bg-yellow-400 text-navNames font-medium">
                Home
              </button>
            </div>
            
            <div className="thema rounded-full hover:bg-courses hover:border hover:border-2 border-yellow-400 ml-4 h-11 p-1 w-32 place-items-center flex justify-around">
              <FaTh />
              <span className="text-navNames font-medium text-md">Courses</span>
            </div>

            <div className="flex items-center ml-10 border border-navNames w-80 bg-white rounded-full px-3 py-1">
              <input
                type="text"
                placeholder="Search courses instroction"
                className="outline-none text-navNames placeholder-purple-800 w-full"
              />
              <div className="flex justify-items-center border border-navNames rounded-full px-5 py-2">
                <button className="text-navNames">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10A7 7 0 1 1 10 3a7 7 0 0 1 7 7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <div className="thema rounded-full hover:bg-courses hover:border hover:border-2 border-yellow-400 h-11 p-1 w-32 place-items-center flex justify-around">
                <span className="text-navNames font-medium text-md">Overview</span>
              </div>
              <div className="thema rounded-full hover:bg-courses hover:border hover:border-2 border-yellow-400 h-11 p-1 w-32 place-items-center flex justify-around">
                <span className="text-navNames font-medium text-md">About</span>
              </div>
            </div>

            <div className="flex items-center space-x-5">
              <button className="p-2 border hover:scale-105 transition-transform duration-300 ease-in-out w-12 grid place-content-center h-12 border-purple-950 rounded-l-2xl rounded-r-2xl text-purple-800 hover:bg-purple-100">
                <FaShareAlt />
              </button>
              <button className="relative p-2 border hover:scale-105 transition-transform duration-300 ease-in-out w-12 grid place-content-center h-12 border-purple-800 rounded-l-2xl rounded-r-2xl text-purple-800 hover:bg-purple-100">
                <FaShoppingBag />
                <span className="absolute -top-1 -right-1 hover:scale-105 transition-transform duration-300 ease-in-out text-purple-950 bg-purple-200 border border-purple-950 text-white text-xs rounded-full px-1">
                  0
                </span>
              </button>
              <button className="p-5 px-6 text-lg hover:scale-105 transition-transform duration-300 ease-in-out rounded-l-2xl rounded-r-2xl bg-yellow-400 text-purple-800 hover:bg-yellow-500 shadow">
                <BsThreeDots />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="thema bg-[#FDFBEF] hover:bg-white rounded-lg hover:border hover:border-gray-800 h-11 p-2 place-items-center flex justify-around">
                <span className="text-customPurple font-bold text-xl">Thema</span>
                <button className="px-2 text-xs rounded-full bg-yellow-400 text-navNames font-medium ml-2">
                  Home
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-purple-800"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-24 left-0 right-0 bg-[#FDFBEF] border-t border-gray-200 p-4 shadow-lg z-50">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-center border border-navNames bg-white rounded-full px-3 py-1">
                  <input
                    type="text"
                    placeholder="Search courses instroction"
                    className="outline-none text-navNames placeholder-purple-800 w-full"
                  />
                  <button className="text-navNames px-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10A7 7 0 1 1 10 3a7 7 0 0 1 7 7z" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col space-y-2">
                  <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-courses hover:border hover:border-2 border-yellow-400">
                    <FaTh />
                    <span className="text-navNames font-medium">Courses</span>
                  </button>
                  <button className="p-2 rounded-full hover:bg-courses hover:border hover:border-2 border-yellow-400">
                    <span className="text-navNames font-medium">Overview</span>
                  </button>
                  <button className="p-2 rounded-full hover:bg-courses hover:border hover:border-2 border-yellow-400">
                    <span className="text-navNames font-medium">About</span>
                  </button>
                </div>

                <div className="flex justify-center space-x-4">
                  <button className="p-2 border hover:scale-105 transition-transform duration-300 ease-in-out w-12 grid place-content-center h-12 border-purple-950 rounded-l-2xl rounded-r-2xl text-purple-800 hover:bg-purple-100">
                    <FaShareAlt />
                  </button>
                  <button className="relative p-2 border hover:scale-105 transition-transform duration-300 ease-in-out w-12 grid place-content-center h-12 border-purple-800 rounded-l-2xl rounded-r-2xl text-purple-800 hover:bg-purple-100">
                    <FaShoppingBag />
                    <span className="absolute -top-1 -right-1 hover:scale-105 transition-transform duration-300 ease-in-out text-purple-950 bg-purple-200 border border-purple-950 text-white text-xs rounded-full px-1">
                      0
                    </span>
                  </button>
                  <button className="p-5 px-6 hover:scale-105 transition-transform duration-300 ease-in-out rounded-l-2xl rounded-r-2xl bg-yellow-400 text-purple-800 hover:bg-yellow-500 shadow">
                    <BsThreeDots />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});