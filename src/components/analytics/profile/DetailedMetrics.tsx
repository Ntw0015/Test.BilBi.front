import React from 'react';
import { LineChart, Share2, MessageCircle, Bookmark } from 'lucide-react';

interface DetailedMetricProps {
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

function DetailedMetric({ label, value, change, icon }: DetailedMetricProps) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="font-semibold">{value}</p>
        </div>
      </div>
      <span className="text-sm text-green-600 font-medium">+{change}</span>
    </div>
  );
}

export default function DetailedMetrics() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-700">Métricas Detalhadas</h3>
      <div className="space-y-2 bg-white rounded-lg">
        <DetailedMetric
          label="Taxa de Impressões"
          value="45.2k visualizações"
          change="15%"
          icon={<LineChart className="w-5 h-5 text-blue-600" />}
        />
        <DetailedMetric
          label="Compartilhamentos"
          value="2.1k shares"
          change="8%"
          icon={<Share2 className="w-5 h-5 text-blue-600" />}
        />
        <DetailedMetric
          label="Comentários"
          value="1.8k comentários"
          change="12%"
          icon={<MessageCircle className="w-5 h-5 text-blue-600" />}
        />
        <DetailedMetric
          label="Salvos"
          value="3.2k salvos"
          change="10%"
          icon={<Bookmark className="w-5 h-5 text-blue-600" />}
        />
      </div>
    </div>
  );
}