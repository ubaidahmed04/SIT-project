import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router'; // Changed from 'react-router' to 'react-router-dom'
import { Search, ShoppingCart, User, Menu, X, LogOut } from 'lucide-react'; // Using lucide-react for icons
import { UserContext } from '../context/userContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user, logout} = useContext(UserContext)
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* 1. Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 tracking-tight">
            SITSHOP<span className="text-black"></span>
          </Link>

          {/* 2. Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
              Home
            </NavLink>
            <NavLink to="/shop" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Shop
            </NavLink>
            <NavLink to="/about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              About
            </NavLink>
            <NavLink to="/contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </NavLink>
          </div>

          {/* 3. Search Bar (E-commerce Style) */}
         

          {/* 4. Action Icons */}
          <div className="flex items-center space-x-5">
            <Link to="/login" className="text-gray-600 hover:text-blue-600 transition-colors">
              <User size={22} />
            </Link>
            {user?.username}
            
            <Link to="/cart" className="relative text-gray-600 hover:text-blue-600 transition-colors">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                3
              </span>
            </Link>
            <button className='flex  ' onClick={()=>logout()}> <LogOut/> LogOut</button>
            {/* Mobile Menu Button */}
            <button className="lg:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 5. Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 border-t border-gray-100 pt-4">
            <Link to="/" className="block text-gray-600 font-medium">Home</Link>
            <Link to="/shop" className="block text-gray-600 font-medium">Shop</Link>
            <Link to="/about" className="block text-gray-600 font-medium">About</Link>
            <Link to="/contact" className="block text-gray-600 font-medium">Contact</Link>
            <div className="pt-2">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-gray-100 rounded-lg px-4 py-2 text-sm focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;