import React from "react";
import { assets } from "../assets/assets";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 pt-12 md:px-16 lg:px-24 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Logo + Contact */}
        <div>
          <img src={assets.logo} alt="logo" className="h-12 mb-4" />
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p>
            <strong>Address:</strong> 087 Millat street, Karachi, Pakistan
          </p>
          <p>
            <strong>Phone:</strong> +01 2222 365 / +92 32 45665656
          </p>
          <p>
            <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
          </p>

          <div className="mt-4">
            <h4 className="text-white font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4 text-lg">
              <a href="https://www.facebook.com/ashhadullah.zahir.5" className="hover:text-indigo-400">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/ashhadullah_zaheer/" className="hover:text-indigo-400">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-indigo-400">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-ashhadullah-zaheer-41194a340/" className="hover:text-indigo-400">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="text-white font-semibold mb-4">About</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-indigo-400">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-400">Delivery Information</a></li>
            <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-indigo-400">Terms & Conditions</a></li>
            <li><a href="/contact" className="hover:text-indigo-400">Contact Us</a></li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h4 className="text-white font-semibold mb-4">My Account</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-400">Sign In</a></li>
            <li><a href="/cart" className="hover:text-indigo-400">View Cart</a></li>
            <li><a href="#" className="hover:text-indigo-400">My Wishlist</a></li>
            <li><a href="#" className="hover:text-indigo-400">Track My Order</a></li>
            <li><a href="#" className="hover:text-indigo-400">Help</a></li>
          </ul>
        </div>

        {/* Install App */}
        <div>
          <h4 className="text-white font-semibold mb-4">Install App</h4>
          <p className="mb-2">From App Store or Google Play</p>
          <div className="flex gap-2 mb-4">
            <img src={assets.app} alt="App Store" className="h-12 rounded border border-gray-600" />
            <img src={assets.play} alt="Google Play" className="h-12 rounded border border-gray-600" />
          </div>
          
        </div>
      </div>

      {/* Copyright */}
      <p className="pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}, E-Commerce. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
