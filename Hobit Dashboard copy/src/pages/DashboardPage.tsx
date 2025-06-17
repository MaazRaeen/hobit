import React from 'react';
import MetricsCards from '../components/Dashboard/MetricsCards';
import CampaignTable from '../components/Dashboard/CampaignTable';
import AnalyticsCharts from '../components/Dashboard/AnalyticsCharts';
import SystemStats from '../components/Dashboard/SystemStats';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">Monitor your campaigns and track performance in real-time</p>
        </div>

        <div className="space-y-8">
          <MetricsCards />
          <AnalyticsCharts />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CampaignTable />
            </div>
            <div>
              <SystemStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;