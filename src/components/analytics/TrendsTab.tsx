import React from 'react';

export default function TrendsTab() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Tendências de Uso</h3>
          <div className="flex gap-2">
            <button className="text-sm text-gray-600 hover:text-blue-600">Instagram</button>
            <span className="text-gray-300">|</span>
            <button className="text-sm text-gray-600 hover:text-blue-600">TikTok</button>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }} />
            </div>
            <span className="text-sm text-gray-600">70%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }} />
            </div>
            <span className="text-sm text-gray-600">85%</span>
          </div>
        </div>
      </div>
    </div>
  );
}