import React from 'react';

interface UserProfileProps {
  username: string;
  name: string;
}

export default function UserProfile({ username, name }: UserProfileProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-[#437FD9] to-[#31572D]">
        <span className="text-2xl font-bold text-white">B</span>
      </div>
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-blue-600">{username}</p>
      </div>
    </div>
  );
}