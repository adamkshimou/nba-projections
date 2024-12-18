import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white h-12 flex items-center px-6 fixed w-full top-0 z-50">
      <div className="flex space-x-8">
        <button className="hover:text-blue-300 transition-colors">Player</button>
        <button className="hover:text-blue-300 transition-colors">Team</button>
        <button className="hover:text-blue-300 transition-colors">Table</button>
      </div>
    </nav>
  );
};

export default Navbar;