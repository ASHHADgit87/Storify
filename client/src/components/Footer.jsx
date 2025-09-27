import React from "react";
import { assets } from "../assets/assets";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    
    <div className="bg-black text-gray-300 px-6 pt-12 md:px-16 lg:px-24 w-full">
      {/* Main Footer Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Logo + Contact */}
        <div>
          <img src={assets.logo} alt="logo" className="h-12 mb-4" />
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p>
            <strong>Address:</strong> 087 Millat Street, Karachi, Pakistan
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
              <a
                href="https://www.facebook.com/ashhadullah.zahir.5"
                className="hover:text-[#FF7F32] transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/ashhadullah_zaheer/"
                className="hover:text-[#FF7F32] transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#FF7F32] transition-colors duration-300">
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-ashhadullah-zaheer-41194a340/"
                className="hover:text-[#FF7F32] transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="text-white font-semibold mb-4">About</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-[#FF7F32] transition-colors duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7F32] transition-colors duration-300">
                Delivery Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7F32] transition-colors duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7F32] transition-colors duration-300">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#FF7F32] transition-colors duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h4 className="text-white font-semibold mb-4">My Account</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#FF7F32] transition-colors duration-300">
                Sign In
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-[#FF7F32] transition-colors duration-300">
                View Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7F32] transition-colors duration-300">
                My Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7F32] transition-colors duration-300">
                Track My Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF7F32] transition-colors duration-300">
                Help
              </a>
            </li>
          </ul>
        </div>

        {/* Install App */}
        <div>
          <h4 className="text-white font-semibold mb-4">Install App</h4>
          <p className="mb-2">From App Store or Google Play</p>
          <div className="flex gap-2 mb-4">
            <img
              src={assets.app}
              alt="App Store"
              className="h-12 rounded border border-gray-600 cursor-pointer transition-all duration-300 transform 
             hover:scale-108 hover:border-[#FF7F32] hover:shadow-[0_0_7px_#FF7F32]"
            />
            <img
  src={assets.play}
  alt="Google Play"
  className="h-12 rounded border border-gray-600 cursor-pointer transition-all duration-300 transform 
             hover:scale-108 hover:border-[#FF7F32] hover:shadow-[0_0_7px_#FF7F32]"
/>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-6 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()}, Storify. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
