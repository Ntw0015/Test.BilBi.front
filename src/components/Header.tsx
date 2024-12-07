import React from 'react';
import { LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm mb-8 rounded-[50px]">
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#437FD9] to-[#31572D] font-semibold">
            BilBi
          </span>
        </div>
        
        <Link 
          to="/login"
          className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <LogIn className="w-5 h-5" />
          <span>Login</span>
        </Link>
      </div>
    </header>
  );
}