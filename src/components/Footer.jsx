import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 mt-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-red-500">MUSKETEER_DEV</h2>
          <p className="mt-2 text-sm">
            Discover and explore songs with personalized recommendations.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="/recommend" className="hover:text-red-500 transition">Recommendations</a></li>
            <li><a href="/about" className="hover:text-red-500 transition">About</a></li>
            <li><a href="/contact" className="hover:text-red-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Socials Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        <p>
          Made with <FaHeart className="inline text-red-500" /> by{" "}
          <span className="font-semibold">Musketeer_dev</span>
        </p>
        <p className="text-gray-500 mt-1">© {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;