import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-violet-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              What's For Dinner?
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <div className="flex space-x-1">
              <Link to="/my-menu" className="hover:bg-violet-500 px-3 py-2 rounded transition duration-300">
                My Menu
              </Link>
              <Link to="/my-meals" className="hover:bg-violet-500 px-3 py-2 rounded transition duration-300">
                My Meals
              </Link>
            </div>
            <div className="flex space-x-2">
              <Link to="/login" className="hover:bg-violet-500 border hover:border-transparent px-3 py-2 rounded transition duration-300">
                Login
              </Link>
              <Link to="/signup" className="hover:bg-violet-500 border hover:border-transparent px-3 py-2 rounded transition duration-300">
                Signup
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none cursor-pointer">
              {isOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-violet-900 px-2 space-y-1 transform transition-all duration-800 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col py-3">
          <Link to="/my-menu" className="hover:bg-violet-500 px-3 py-2 rounded transition duration-300">
            My Menu
          </Link>
          <Link to="/my-meals" className="hover:bg-violet-500 px-3 py-2 rounded transition duration-300">
            My Meals
          </Link>
          <Link to="/login" className="hover:bg-violet-500 px-3 py-2 rounded transition duration-300">
            Login
          </Link>
          <Link to="/signup" className="hover:bg-violet-500 px-3 py-2 rounded transition duration-300">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
