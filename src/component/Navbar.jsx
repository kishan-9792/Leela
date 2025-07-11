import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png';
import { Link, useNavigate} from 'react-router-dom';
import Home from '../pages/Home';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const Navigate =useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-15" />

            <span className="text-2xl font-bold text-blue-600"></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex font-bold space-x-6">
            <Link className="text-gray-700 hover:text-blue-600" to={'/'}>Home</Link>
            <Link className="text-gray-700 hover:text-blue-600" to={'/'}> About</Link>
            <Link className="text-gray-700 hover:text-blue-600" to={'/'}>OurYard</Link>
            <Link className="text-gray-700 hover:text-blue-600" to={'/'}>OurCommitment</Link>
            <Link className="text-gray-700 hover:text-blue-600" to={'/'}>CSR Activilty</Link>
            <Link className="text-gray-700 hover:text-blue-600" to={'/'}>Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white">
          <Link className="text-gray-700 hover:text-blue-600" to={'/'}>Home</Link>
            <Link className="text-gray-700 hover:text-blue-600" to={'/'}> About</Link>
            <Link className="text-gray-700 hover:text-blue-600" to={'/'}>OurYard</Link>
            <Link className="text-gray-700 hover:text-blue-600" to={'/'}>OurCommitment</Link>
            <Link className="text-gray-700 hover:text-blue-600" to={'/'}>CSR Activilty</Link>
            <Link className="text-gray-700 hover:text-blue-600" to={'/'}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;