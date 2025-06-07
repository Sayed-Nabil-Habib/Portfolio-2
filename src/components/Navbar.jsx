import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-custom-blue shadow mb-6">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white hover:text-yellow-400">
          
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-yellow-400">Home</Link>
        </div>
      </div>
    </nav>
  );
}
