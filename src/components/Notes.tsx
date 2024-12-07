import React, { useState } from 'react';
import { PenLine, Save, Trash2 } from 'lucide-react';
import NoteEditor from './notes/NoteEditor';
import NotesList from './notes/NotesList';

interface Note {
  id: string;
  content: string;
  timestamp: string;
}

export default function Notes() {
  const [currentNote, setCurrentNote] = useState('');
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      content: 'Exemplo de anotação anterior',
      timestamp: '10:30 AM'
    }
  ]);

  const saveNote = () => {
    if (currentNote.trim()) {
      const newNote = {
        id: Date.now().toString(),
        content: currentNote,
        timestamp: new Date().toLocaleTimeString('pt-BR', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };
      setNotes(prev => [newNote, ...prev]);
      setCurrentNote('');
    }
  };

  const deleteNote = (id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 h-[300px]">
      <div className="flex h-full gap-4">
        {/* Left Sidebar with Notes List */}
        <div className="w-64 border-r border-gray-200 pr-4 overflow-y-auto">
          <div className="sticky top-0 bg-white pb-2 mb-2 border-b border-gray-100">
            <h3 className="text-sm font-medium text-gray-600">Anotações Salvas</h3>
          </div>
          <NotesList notes={notes} onDelete={deleteNote} />
        </div>

        {/* Main Note Editor Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <PenLine className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-semibold">Nova Anotação</h2>
            </div>
            <button
              onClick={saveNote}
              disabled={!currentNote.trim()}
              className={`flex items-center gap-1 px-3 py-1 text-sm rounded-lg transition-colors ${
                currentNote.trim()
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Save className="w-4 h-4" />
              <span>Salvar</span>
            </button>
          </div>
          
          <NoteEditor
            value={currentNote}
            onChange={(e) => setCurrentNote(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}