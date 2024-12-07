import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#437FD9] to-[#31572D] flex items-center justify-center mb-8">
          <span className="text-2xl font-bold text-white">B</span>
        </div>
        {children}
      </div>
      
      <footer className="py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BilBi. Todos os direitos reservados.
      </footer>
    </div>
  );
}