import React, { useState } from 'react';
import { Users, Calendar as CalendarIcon } from 'lucide-react';
import CalendarTab from './analytics/CalendarTab';
import ProfileTab from './analytics/ProfileTab';

export default function Analytics() {
  const [activeTab, setActiveTab] = useState('calendar');

  const tabs = [
    { id: 'calendar', icon: CalendarIcon, label: 'Calendário' },
    { id: 'profile', icon: Users, label: 'Análise de Perfil' }
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-2 bg-white p-2 rounded-xl shadow-lg">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-blue-50 text-gray-600'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {activeTab === 'calendar' && <CalendarTab />}
      {activeTab === 'profile' && <ProfileTab />}
    </div>
  );
}