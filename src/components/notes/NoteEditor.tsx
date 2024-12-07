import React from 'react';

interface NoteEditorProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function NoteEditor({ value, onChange }: NoteEditorProps) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder="Digite suas anotações aqui..."
      className="flex-1 p-3 rounded-lg border resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}