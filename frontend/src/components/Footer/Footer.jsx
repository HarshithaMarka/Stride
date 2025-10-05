import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full py-8 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between">
          <div className="text-center md:text-left">
            <a
              href="/"
              className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              STRIDE
            </a>
            <p className="mt-2 text-gray-400 text-sm">Simple. Collaborative. Agile.</p>
          </div>

          <nav className="flex justify-center space-x-6" role="navigation" aria-label="Footer navigation">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Contact
            </a>
          </nav>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Stride.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
