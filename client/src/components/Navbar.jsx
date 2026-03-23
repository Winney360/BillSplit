import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[--color-primary]">
          <span className="inline-block w-7 h-7 rounded-full bg-[--color-primary] mr-2"></span>
          RentSplit
        </Link>
        {/* Nav Links */}
        <div className="hidden md:flex gap-6 items-center font-medium">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'text-[--color-primary]' : 'text-gray-700 hover:text-[--color-primary] transition'}>
            Home
          </NavLink>
          <NavLink to="/problems" className={({ isActive }) => isActive ? 'text-[--color-primary]' : 'text-gray-700 hover:text-[--color-primary] transition'}>
            Problems
          </NavLink>
          <NavLink to="/solution" className={({ isActive }) => isActive ? 'text-[--color-primary]' : 'text-gray-700 hover:text-[--color-primary] transition'}>
            Solution
          </NavLink>
          <NavLink to="/team" className={({ isActive }) => isActive ? 'text-[--color-primary]' : 'text-gray-700 hover:text-[--color-primary] transition'}>
            Team
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[--color-primary]' : 'text-gray-700 hover:text-[--color-primary] transition'}>
            Contact
          </NavLink>
        </div>
        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/" className="bg-[--color-primary] text-white px-4 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition">
            Get Started
          </Link>
        </div>
        {/* Mobile menu placeholder */}
        <div className="md:hidden">
          {/* Add mobile menu button here if needed */}
        </div>
      </div>
    </nav>
  );
}
