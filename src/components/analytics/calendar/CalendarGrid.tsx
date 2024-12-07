import React from 'react';

interface CalendarNote {
  id: string;
  date: number;
  text: string;
  color: string;
}

interface CalendarGridProps {
  selectedDate: number | null;
  onSelectDate: (date: number) => void;
  notes: CalendarNote[];
}

export default function CalendarGrid({ selectedDate, onSelectDate, notes }: CalendarGridProps) {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-7 gap-1">
        {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, i) => (
          <div key={`weekday-${i}`} className="text-center text-sm font-medium text-gray-600">
            {day}
          </div>
        ))}
        {Array.from({ length: 31 }, (_, i) => {
          const day = i + 1;
          const dayNotes = notes.filter(n => n.date === day);
          return (
            <button
              key={`day-${day}`}
              onClick={() => onSelectDate(day)}
              className={`aspect-square flex flex-col items-center justify-center rounded-lg relative group
                ${selectedDate === day ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}
              `}
            >
              <span className="text-sm">{day}</span>
              {dayNotes.length > 0 && (
                <div className="flex gap-0.5 mt-1">
                  {dayNotes.slice(0, 3).map((note) => (
                    <span
                      key={note.id}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: note.color }}
                    />
                  ))}
                  {dayNotes.length > 3 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}