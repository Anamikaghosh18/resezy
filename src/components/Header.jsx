import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/favicon.png" alt="Logo" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Resezy
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm">Features</a>
            <a href="#templates" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm">Templates</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm">Pricing</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm pulse-glow">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg p-6 space-y-4 border-b border-gray-100">
            <a href="#features" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">Features</a>
            <a href="#templates" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">Templates</a>
            <a href="#pricing" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">Pricing</a>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
