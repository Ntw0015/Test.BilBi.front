import React from 'react';
import { Trash2 } from 'lucide-react';

interface CalendarNote {
  id: string;
  text: string;
  color: string;
}

interface CalendarNotesListProps {
  notes: CalendarNote[];
  onDelete: (id: string) => void;
}

export default function CalendarNotesList({ notes, onDelete }: CalendarNotesListProps) {
  if (notes.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>Nenhuma nota para este dia</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {notes.map((note) => (
        <div
          key={note.id}
          className="p-3 rounded-lg border group hover:border-gray-300 transition-colors relative"
          style={{ borderLeftWidth: '4px', borderLeftColor: note.color }}
        >
          <p className="text-sm text-gray-700 whitespace-pre-wrap">{note.text}</p>
          <button
            onClick={() => onDelete(note.id)}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded-full transition-opacity"
          >
            <Trash2 className="w-4 h-4 text-gray-500 hover:text-red-500" />
          </button>
        </div>
      ))}
    </div>
  );
}