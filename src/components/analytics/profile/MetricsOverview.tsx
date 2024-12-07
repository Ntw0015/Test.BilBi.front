import React from 'react';
import { TrendingUp, Users, Heart, BarChart2 } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  percentage: string;
  icon: React.ReactNode;
  trend: 'up' | 'down';
}

function MetricCard({ title, value, percentage, icon, trend }: MetricCardProps) {
  return (
    <div className="p-4 bg-blue-50 rounded-lg">
      <div className="flex justify-between items-start mb-2">
        <div className="p-2 bg-white rounded-lg">
          {icon}
        </div>
        <span className={`text-sm font-medium ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          {trend === 'up' ? '↑' : '↓'} {percentage}
        </span>
      </div>
      <h4 className="text-sm text-gray-600 mb-1">{title}</h4>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
}

export default function MetricsOverview() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <MetricCard
        title="Engajamento"
        value="8.5%"
        percentage="12%"
        icon={<Heart className="w-5 h-5 text-blue-600" />}
        trend="up"
      />
      <MetricCard
        title="Crescimento"
        value="+2.1k"
        percentage="8%"
        icon={<TrendingUp className="w-5 h-5 text-blue-600" />}
        trend="up"
      />
      <MetricCard
        title="Alcance"
        value="45.2k"
        percentage="15%"
        icon={<BarChart2 className="w-5 h-5 text-blue-600" />}
        trend="up"
      />
      <MetricCard
        title="Seguidores"
        value="12.8k"
        percentage="5%"
        icon={<Users className="w-5 h-5 text-blue-600" />}
        trend="up"
      />
    </div>
  );
}