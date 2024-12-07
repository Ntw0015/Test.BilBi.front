import React from 'react';
import UserProfile from './profile/UserProfile';
import MetricsOverview from './profile/MetricsOverview';
import DetailedMetrics from './profile/DetailedMetrics';

export default function ProfileTab() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <div className="space-y-6">
        {/* User Profile Section */}
        <UserProfile
          username="@Nathan"
          name="Nathan BilBi"
        />

        {/* Metrics Overview Cards */}
        <MetricsOverview />

        {/* Detailed Metrics */}
        <DetailedMetrics />
      </div>
    </div>
  );
}