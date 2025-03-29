"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiLogIn } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-sm py-4 px-6 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-blue-600 font-bold text-2xl">CPO.AI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link href="/features" className="text-slate-700 hover:text-blue-600 font-medium">
            Features
          </Link>
          <Link href="/how-it-works" className="text-slate-700 hover:text-blue-600 font-medium">
            How It Works
          </Link>
          <Link href="/pricing" className="text-slate-700 hover:text-blue-600 font-medium">
            Pricing
          </Link>
          <Link href="/about" className="text-slate-700 hover:text-blue-600 font-medium">
            About Us
          </Link>
          <Link 
            href="/waitlist" 
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Join Waitlist
          </Link>
          <Link 
            href="/login" 
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center"
          >
            <FiLogIn className="mr-2" /> Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-700 hover:text-blue-600 focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-20 px-6">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-6 text-slate-700 hover:text-blue-600 focus:outline-none"
          >
            <FiX size={24} />
          </button>
          
          <div className="flex flex-col space-y-6 text-center">
            <Link 
              href="/" 
              className="text-slate-700 hover:text-blue-600 font-medium text-xl"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className="text-slate-700 hover:text-blue-600 font-medium text-xl"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link 
              href="/how-it-works" 
              className="text-slate-700 hover:text-blue-600 font-medium text-xl"
              onClick={toggleMenu}
            >
              How It Works
            </Link>
            <Link 
              href="/pricing" 
              className="text-slate-700 hover:text-blue-600 font-medium text-xl"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="text-slate-700 hover:text-blue-600 font-medium text-xl"
              onClick={toggleMenu}
            >
              About Us
            </Link>

            <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col space-y-4">
              <Link 
                href="/waitlist" 
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full text-center"
                onClick={toggleMenu}
              >
                Join Waitlist
              </Link>
              <Link 
                href="/login" 
                className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors w-full text-center flex items-center justify-center"
                onClick={toggleMenu}
              >
                <FiLogIn className="mr-2" /> Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 