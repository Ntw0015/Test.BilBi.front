import React, { useState } from 'react';
import { Plus, X, Calendar as CalendarIcon } from 'lucide-react';
import CalendarGrid from './calendar/CalendarGrid';
import CalendarNoteForm from './calendar/CalendarNoteForm';
import CalendarNotesList from './calendar/CalendarNotesList';

interface CalendarNote {
  id: string;
  date: number;
  text: string;
  color: string;
}

export default function CalendarTab() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [notes, setNotes] = useState<CalendarNote[]>([]);

  const addNote = (text: string, color: string) => {
    if (selectedDate) {
      const newNote = {
        id: Date.now().toString(),
        date: selectedDate,
        text,
        color
      };
      setNotes([...notes, newNote]);
      setShowNoteForm(false);
    }
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold">Calendário</h3>
        </div>
        {selectedDate && (
          <button
            onClick={() => setShowNoteForm(true)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Nova Nota</span>
          </button>
        )}
      </div>

      <div className="grid md:grid-cols-[1fr,300px] gap-6">
        <div>
          <CalendarGrid
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
            notes={notes}
          />
        </div>

        <div className="space-y-4">
          {selectedDate && (
            <>
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Notas do dia {selectedDate}</h4>
                {notes.filter(n => n.date === selectedDate).length > 0 && (
                  <span className="text-sm text-gray-500">
                    {notes.filter(n => n.date === selectedDate).length} notas
                  </span>
                )}
              </div>
              <CalendarNotesList
                notes={notes.filter(n => n.date === selectedDate)}
                onDelete={deleteNote}
              />
            </>
          )}
        </div>
      </div>

      {showNoteForm && selectedDate && (
        <CalendarNoteForm
          onClose={() => setShowNoteForm(false)}
          onSave={addNote}
          selectedDate={selectedDate}
        />
      )}
    </div>
  );
}