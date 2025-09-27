import React, { useState } from "react";
import { assets } from "../assets/assets";
import { FaShoppingCart, FaSearch, FaBars } from "react-icons/fa"; // ✅ Import FaBars

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav 
      className="sticky top-0 z-50 flex items-center justify-between 
      px-6 md:px-16 lg:px-24 xl:px-32 py-4 
      border-b border-gray-700 
      bg-black text-white transition-all"
    >
      {/* Logo */}
      <a href="/">
        <img src={assets.logo} alt="Storify Logo" className="h-9 w-auto" />
      </a>

      {/* Center Menu (Desktop) */}
      <div className="hidden sm:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
        <a href="/" className="hover:text-indigo-400">Home</a>
        <a href="/products" className="hover:text-indigo-400">Products</a>
        <a href="/blog" className="hover:text-indigo-400">Blog</a>
        <a href="/about" className="hover:text-indigo-400">About</a>
        <a href="/contact" className="hover:text-indigo-400">Contact</a>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-600 px-3 rounded-full w-64">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-400 text-white"
            type="text"
            placeholder="Search products"
          />
          <FaSearch className="h-4 w-4 text-white" />
        </div>
      </div>

      {/* Right side (Cart + Login) */}
      <div className="hidden sm:flex items-center gap-6">
        <div className="relative cursor-pointer">
          <FaShoppingCart className="h-5 w-5 text-white" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>
        <button className="cursor-pointer px-8 py-2 bg-white text-black hover:bg-gray-200 transition rounded-full font-semibold">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden text-white text-2xl"
      >
        <FaBars /> {/* ✅ Replaced SVG with FaBars */}
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-black shadow-md py-6 flex-col items-center gap-4 px-5 text-sm md:hidden text-white`}
      >
        <a href="/" className="hover:text-indigo-400">Home</a>
        <a href="/products" className="hover:text-indigo-400">Products</a>
        <a href="/blog" className="hover:text-indigo-400">Blog</a>
        <a href="/about" className="hover:text-indigo-400">About</a>
        <a href="/contact" className="hover:text-indigo-400">Contact</a>
        <a href="/cart" className="hover:text-indigo-400">Cart</a>

        {/* Mobile Login Button */}
        <button className="cursor-pointer px-6 py-2 mt-2 bg-white text-black hover:bg-gray-200 transition rounded-full text-sm font-semibold">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
