// pages/beranda.jsx
"use client";
import { useState } from "react";

const Navbar = ({ onContentChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("voice");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleContentChange = (content) => {
    setActiveContent(content);
    onContentChange(content);
    setIsOpen(false); // Close menu on mobile after content change
  };

  return (
    <div className="w-full px-4 max-w-7xl mx-auto mt-4 md:mt-6">
      <div className="w-full flex justify-between items-center px-8 py-4 glass rounded-full">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">
          Gas<span className="text-orange-400">nime</span>
          <span className="text-yellow-400">.id</span>
        </h1>

        {/* Navigation Menu (Tampilkan saat layar medium dan lebih besar) */}
        <div className="hidden sm:flex items-center space-x-8 bg-gray-900 px-6 py-2 rounded-full text-white">
          <button
            onClick={() => handleContentChange("voice")}
            className={`font-medium ${
              activeContent === "voice" ? "text-white" : "text-gray-400"
            }`}
          >
            Voice
          </button>
          <button
            onClick={() => handleContentChange("anime")}
            className={`font-medium ${
              activeContent === "anime" ? "text-white" : "text-gray-400"
            }`}
          >
            Anime
          </button>
          <button
            onClick={() => handleContentChange("manga")}
            className={`font-medium ${
              activeContent === "manga" ? "text-white" : "text-gray-400"
            }`}
          >
            Manga
          </button>
          <button className="text-white">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Profile & Notifications (selalu tampil pada sm ke atas) */}
        <div className="hidden sm:flex items-center space-x-4">
          <div className="relative">
            <i className="fas fa-bell text-gray-300 text-xl"></i>
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              8
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn.myanimelist.net/images/about_me/ranking_items/8834982-1ede2123-836e-4058-a797-e3f4be98da72.jpg"
              alt="Profile Picture"
              className="w-10 h-10 rounded-full object-cover border border-slate-950"
            />
            <div className="text-white text-sm">
              <p className="font-semibold">Hesa H</p>
              <p className="text-slate-800">Premium</p>
            </div>
            <i className="fas fa-chevron-down text-gray-200"></i>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMenu} className="sm:hidden text-white">
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Navigation Menu (Dropdown Fullscreen) */}
      <div
        className={`fixed inset-0 dark-glass rounded-[30px] backdrop-blur-[30px] text-white flex flex-col items-start justify-start transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } sm:hidden`}
        style={{ zIndex: 999 }}
      >
        {/* Logo */}
        <div className="flex items-center w-full px-6 py-8 border-b border-slate-500">
          <h1 className="text-white text-2xl font-bold">
            Gas<span className="text-orange-400">nime</span>
            <span className="text-yellow-400">.id</span>
          </h1>
          <button onClick={toggleMenu} className="ml-auto text-white focus:outline-none">
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>

        {/* Menu List */}
        <div className="flex flex-col items-start w-full px-4 p-4 space-y-4">
          <button
            onClick={() => handleContentChange("voice")}
            className={`flex items-center space-x-2 font-medium hover:bg-gray-800 px-4 py-2 rounded-lg w-full ${
              activeContent === "voice" ? "text-white" : "text-gray-400"
            }`}
          >
            <i className="fas fa-microphone text-blue-400"></i>
            <span>Voice</span>
          </button>
          <button
            onClick={() => handleContentChange("anime")}
            className={`flex items-center space-x-2 font-medium hover:bg-gray-800 px-4 py-2 rounded-lg w-full ${
              activeContent === "anime" ? "text-white" : "text-gray-400"
            }`}
          >
            <i className="fas fa-film text-yellow-400"></i>
            <span>Anime</span>
          </button>
          <button
            onClick={() => handleContentChange("manga")}
            className={`flex items-center space-x-2 font-medium hover:bg-gray-800 px-4 py-2 rounded-lg w-full ${
              activeContent === "manga" ? "text-white" : "text-gray-400"
            }`}
          >
            <i className="fas fa-book text-pink-400"></i>
            <span>Manga</span>
          </button>
          <button className="flex items-center space-x-2 text-white hover:bg-gray-800 px-4 py-2 rounded-lg w-full">
            <i className="fas fa-search text-green-400"></i>
            <span>Search</span>
          </button>
        </div>

        {/* Garis Pemisah */}
        <hr className="border-gray-700 w-full" />

        {/* Profile & Notifications */}
        <div className="flex items-center justify-between w-full px-6 py-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://cdn.myanimelist.net/images/about_me/ranking_items/8834982-1ede2123-836e-4058-a797-e3f4be98da72.jpg"
              alt="Profile Picture"
              className="w-10 h-10 rounded-full object-cover border-2 border-slate-200"
            />
            <div className="text-white text-lg">
              <p className="font-semibold text-sm">Hesa H</p>
              <p className="text-slate-300 text-xs">Premium</p>
            </div>
          </div>
          <div className="relative">
            <i className="fas fa-bell text-gray-300 text-xl"></i>
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
              8
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
