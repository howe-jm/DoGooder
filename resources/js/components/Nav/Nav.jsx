import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="flex justify-start items-center p-2">
        <Link className="text-white hover:text-gray-600 p-2 rounded-lg" to="/">Home</Link>
        <Link className="text-white hover:text-gray-600 p-2 rounded-lg" to="/userlist">User List</Link>
      </div>
    </nav>
  );
}

export default Navbar;
