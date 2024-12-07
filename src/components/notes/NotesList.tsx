import React from 'react';
import { Trash2 } from 'lucide-react';

interface Note {
  id: string;
  content: string;
  timestamp: string;
}

interface NotesListProps {
  notes: Note[];
  onDelete: (id: string) => void;
}

export default function NotesList({ notes, onDelete }: NotesListProps) {
  return (
    <div className="space-y-2">
      {notes.map((note) => (
        <div
          key={note.id}
          className="p-3 bg-gray-50 rounded-lg border border-gray-100 group hover:bg-gray-100 transition-colors"
        >
          <div className="flex justify-between items-start gap-2">
            <p className="text-sm text-gray-600 whitespace-pre-wrap line-clamp-2">
              {note.content}
            </p>
            <button
              onClick={() => onDelete(note.id)}
              className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-500 rounded transition-all"
              title="Excluir anotação"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <span className="text-xs text-gray-400 mt-1 block">
            {note.timestamp}
          </span>
        </div>
      ))}
    </div>
  );
}