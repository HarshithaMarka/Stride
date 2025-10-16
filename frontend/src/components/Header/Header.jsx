import React from 'react';
import { Link } from 'react-router-dom';
import strideLogo from '../../assets/images/stride.png';

const Header = () => {
  return (
    <header className="w-full p-4 md:p-6 bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-20">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="group text-2xl font-extrabold relative overflow-hidden"
          aria-label="Stride Home"
        >
          <img 
            src={strideLogo} 
            alt="Stride Logo" 
            className="h-14 w-auto rounded-2xl transform transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 
                       transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;