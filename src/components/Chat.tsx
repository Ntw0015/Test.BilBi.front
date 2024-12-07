import React, { useState } from 'react';
import { Send, Bot, History, X, Search, Plus, MoreVertical } from 'lucide-react';

interface ChatHistory {
  id: string;
  title: string;
  timestamp: string;
}

export default function Chat() {
  const [message, setMessage] = useState('');
  const [showHistory, setShowHistory] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [history] = useState<ChatHistory[]>([
    {
      id: '1',
      title: 'Estratégias de Marketing',
      timestamp: '10:30'
    },
    {
      id: '2',
      title: 'Análise de Métricas',
      timestamp: '09:15'
    },
    {
      id: '3',
      title: 'Planejamento de Conteúdo',
      timestamp: '08:45'
    }
  ]);

  const filteredHistory = history.filter(chat => 
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-lg h-[500px] flex">
      {/* History Sidebar */}
      <div 
        className={`w-72 border-r border-gray-200 flex flex-col transition-all duration-300 ${
          showHistory ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">Conversas</h3>
            <button 
              onClick={() => setShowHistory(false)}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar conversa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2">
          <button className="w-full flex items-center gap-2 p-3 hover:bg-blue-50 rounded-lg text-blue-600 mb-2">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Nova conversa</span>
          </button>
          
          <div className="space-y-1">
            {filteredHistory.map((chat) => (
              <button
                key={chat.id}
                className="w-full p-3 text-left hover:bg-gray-50 rounded-lg group relative"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-medium truncate">{chat.title}</div>
                    <div className="text-xs text-gray-500">{chat.timestamp}</div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded-full transition-opacity">
                    <MoreVertical className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col p-4">
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg font-semibold">Chat IA</h2>
          </div>
          {!showHistory && (
            <button
              onClick={() => setShowHistory(true)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <History className="w-5 h-5 text-gray-600" />
            </button>
          )}
        </div>
        
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          <div className="flex gap-2">
            <div className="bg-blue-100 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm">Como posso ajudar você hoje?</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}