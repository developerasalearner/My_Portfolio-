import React from 'react';
import { Menu, X, Github, Linkedin, Mail, Brain, Code, Database } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="group relative flex items-center space-x-2 text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            {/* Logo Container */}
            <div className="relative w-10 h-10 flex items-center justify-center bg-blue-600 rounded-lg overflow-hidden transition-all group-hover:bg-blue-700">
              {/* Animated Background Icons */}
              <Brain className="absolute text-blue-400/20 animate-float" size={24} />
              <Code className="absolute text-blue-400/20 animate-float-delayed" size={24} />
              <Database className="absolute text-blue-400/20 animate-float" size={24} />
              
              {/* Main Logo Text */}
              <span className="relative text-white font-bold text-xl z-10">CKP</span>
            </div>
            
            {/* Name with hover effect */}
            <span className="hidden md:block text-lg font-semibold">
              <span className="inline-block transition-transform group-hover:translate-x-1">
                
              </span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-105 transform"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/developerasalearner?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-110 transform"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/chinmayakumarpalo/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-110 transform"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:chinmayakumarpalo.official@gmail.com" 
              className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-110 transform"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://github.com/developerasalearner?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/chinmayakumarpalo/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:chinmayakumarpalo.official@gmail.com" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;