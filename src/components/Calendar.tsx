import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

export default function Calendar() {
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <CalendarIcon className="w-6 h-6 text-blue-600" />
        <h2 className="text-lg font-semibold">Calendário</h2>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day, index) => (
          <div key={`weekday-${index}`} className="text-center text-sm font-medium text-gray-600">
            {day[0]}
          </div>
        ))}
        {days.map((day) => (
          <button
            key={`day-${day}`}
            className="aspect-square flex items-center justify-center rounded hover:bg-blue-50"
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}