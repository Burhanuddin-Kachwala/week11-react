import React from 'react';
import { NavLink } from 'react-router';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          Simple Users CRUD
        </div>

        {/* Nav Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold text-lg border-b-2 border-yellow-300 pb-1"
                : "text-yellow-300 hover:text-white font-semibold text-lg transition-all"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold text-lg border-b-2 border-green-300 pb-1"
                : "text-green-300 hover:text-white font-semibold text-lg transition-all"
            }
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
