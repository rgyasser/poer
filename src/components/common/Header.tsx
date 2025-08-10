'use client';
import React, { useState } from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Accueil', href: '#' },
    { label: 'Devis', href: '#' },
    { label: 'SAV', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <header className={`w-full bg-header-1 shadow-md ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mt-[3px] sm:mt-[4px] lg:mt-[6px] mr-[13px] sm:mr-[19px] lg:mr-[26px] ml-[13px] sm:ml-[19px] lg:ml-[26px] min-h-[54px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="images/logo.png" alt="" />
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button
            className="block lg:hidden p-2"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6 text-header-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <div className="flex gap-[31px] sm:gap-[46px] lg:gap-[62px] justify-center items-center">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="relative group text-[16px] font-poppins font-normal leading-6 text-header-1 no-underline"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-header-text-1 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Navigation Menu */}
          <nav
            className={`${menuOpen ? 'block' : 'hidden'} lg:hidden absolute top-full left-0 w-full bg-header-1 shadow-lg z-50`}
          >
            <div className="flex flex-col p-4 space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-[16px] font-poppins font-normal text-header-1 text-left py-2 hover:opacity-80 transition-opacity duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
