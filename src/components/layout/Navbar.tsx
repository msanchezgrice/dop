"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiLogIn } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

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
          <button onClick={toggleMenu} className="text-slate-700">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="flex flex-col space-y-4 px-4 pt-2 pb-4">
              <Link 
                href="/" 
                className="text-slate-700 hover:text-blue-600 font-medium py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                href="/features" 
                className="text-slate-700 hover:text-blue-600 font-medium py-2"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link 
                href="/how-it-works" 
                className="text-slate-700 hover:text-blue-600 font-medium py-2"
                onClick={toggleMenu}
              >
                How It Works
              </Link>
              <Link 
                href="/pricing" 
                className="text-slate-700 hover:text-blue-600 font-medium py-2"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link 
                href="/about" 
                className="text-slate-700 hover:text-blue-600 font-medium py-2"
                onClick={toggleMenu}
              >
                About Us
              </Link>
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 