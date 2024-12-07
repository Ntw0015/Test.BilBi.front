import React from 'react';
import { Home, MessageCircle, Calendar as CalendarIcon, BarChart2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md rounded-full px-6 py-3 max-w-md mx-auto mb-8">
      <ul className="flex items-center justify-between">
        <li>
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
            <Home className="w-5 h-5" />
          </button>
        </li>
        <li>
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
            <MessageCircle className="w-5 h-5" />
          </button>
        </li>
        <li>
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
            <CalendarIcon className="w-5 h-5" />
          </button>
        </li>
        <li>
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
            <BarChart2 className="w-5 h-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
}