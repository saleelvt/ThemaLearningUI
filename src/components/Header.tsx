import React from "react";
import One from "../assets/one.webp";
import Two from "../assets/two.webp";
import Tree from "../assets/tree.webp";

export const Header: React.FC = () => {
  return (
    <div className="hover:scale-105 items-center bg-gradient-to-br from-yellow-50 to-purple-100 transition-transform duration-300 ease-in-out shadow-lg rounded-2xl border border-gray-300 p-4 md:p-8 mx-4 md:m-12 text-center space-y-4">
      <div className="flex flex-col items-center space-y-4 md:space-y-6 p-2 md:p-6">
        {/* Main Title with Animation */}
        <div>
          <h1 className="text-2xl md:text-5xl font-serif flex justify-center text-purple-950 mb-2 md:mb-4 animate-slideFadeIn">
            Education Template for
          </h1>
        </div>

        {/* Subheading with Underline Effect */}
        <div className="relative text-center px-2">
          <h1 className="text-2xl md:text-5xl font-semibold animate-slideFadeIn text-purple-800 relative inline-block">
            <span className="z-10 text-purple-950">an</span>{" "}
            <span className="z-10 text-purple-800">Vibrant</span>{" "}
            <span className="z-10 text-purple-950 hidden sm:inline">and</span>{" "}
            <span className="z-10">Engaging</span>
            {/* Underline Background */}
            <span className="absolute inset-x-0 bottom-0 h-2 md:h-3 bg-yellow-300 rounded-sm -z-10"></span>
          </h1>
        </div>

        {/* Subtitle and Image Section */}
        <div className="flex items-center justify-center sm:flex-col  md:flex-col lg:flex-row xs:flex-col   space-y-2 md:space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold text-purple-950 animate-slideFadeIn">
            Webflow Website
          </h1>

          {/* Image Container */}
          <div className="flex justify-center mt-2 ml-2 md:mt-4 animate-slideFadeIn space-x-2 md:space-x-4">
            <div
              className="w-14 h-14 md:w-20 md:h-20 bg-cover rounded-full shadow-lg border-2 md:border-4 border-purple-300 hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${One})` }}
            ></div>
            <div
              className="w-14 h-14 md:w-20 md:h-20 bg-cover rounded-full shadow-lg border-2 md:border-4 border-purple-300 hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${Two})` }}
            ></div>
            <div
              className="w-14 h-14 md:w-20 md:h-20 bg-cover rounded-full shadow-lg border-2 md:border-4 border-purple-300 hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${Tree})` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="text-base md:text-lg font-serif text-purple-950">
        <h1>See why Thema is the best pick for your site!</h1>
        
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 md:mt-8">
            {/* Explore Button */}
            <div  className="relative group">
              <button  style={{ transform: 'rotateX(-20deg) rotateY(20deg)', transformOrigin: 'center' }} className="px-4 md:px-6 py-2 md:py-3 bg-purple-900  text-white font-mono rounded-full relative shadow-lg z-20 transition-transform duration-300 ease-in-out group-hover:translate-x-3 group-hover:-translate-y-3 text-sm md:text-base w-full sm:w-auto">
                Explore now | <span className="ml-2">↓</span>
              </button>
              <div  style={{ transform: 'rotateX(-15deg) rotateY(15deg)', transformOrigin: 'center' }} className="absolute top-0 left-0 w-full h-full   bg-purple-800 rounded-full -translate-x-1 md:-translate-x-1.5 -translate-y-1 md:-translate-y-1.5 z-10 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5 group-hover:translate-y-1.5"></div>
              <div  style={{ transform: 'rotateX(10deg) rotateY(-10deg)', transformOrigin: 'center' }} className="absolute top-0 left-0 w-full h-full  bg-purple-600 rounded-full -translate-x-2 md:-translate-x-3 -translate-y-2 md:-translate-y-3 z-[5] transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div  style={{ transform: 'rotateX(10deg) rotateY(-10deg)', transformOrigin: 'center' }} className="absolute top-0 left-0 w-full h-full  bg-purple-300 rounded-full -translate-x-3 md:-translate-x-4.5 -translate-y-3 md:-translate-y-4.5 z-0 transition-transform duration-300 ease-in-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5"></div>
            </div>

            {/* Buy Template Button */}
            <div className="relative group">
              <button className="px-4 md:px-6 py-2 md:py-3 bg-yellow-500 text-purple-900 font-mono rounded-full relative shadow-lg z-20 transition-transform duration-300 ease-in-out group-hover:translate-x-3 group-hover:-translate-y-3 text-sm md:text-base w-full sm:w-auto">
                Buy template | <span className="ml-2">→</span>
              </button>
              <div className="absolute top-0 left-0 w-full h-full bg-yellow-300 rounded-full -translate-x-1 md:-translate-x-1.5 -translate-y-1 md:-translate-y-1.5 z-10 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5 group-hover:translate-y-1.5"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-yellow-200 rounded-full -translate-x-2 md:-translate-x-3 -translate-y-2 md:-translate-y-3 z-[5] transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-yellow-100 rounded-full -translate-x-3 md:-translate-x-4.5 -translate-y-3 md:-translate-y-4.5 z-0 transition-transform duration-300 ease-in-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};