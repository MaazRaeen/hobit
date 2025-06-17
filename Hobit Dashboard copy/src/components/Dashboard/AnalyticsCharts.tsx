import React from 'react';
import { LineChart, Line, PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, FunnelChart, Funnel, LabelList } from 'recharts';

const AnalyticsCharts = () => {
  const performanceData = [
    { month: 'Jan', impressions: 180000, clicks: 12000, conversions: 480 },
    { month: 'Feb', impressions: 220000, clicks: 15000, conversions: 620 },
    { month: 'Mar', impressions: 280000, clicks: 18500, conversions: 740 },
    { month: 'Apr', impressions: 320000, clicks: 22000, conversions: 890 },
    { month: 'May', impressions: 380000, clicks: 26500, conversions: 1050 },
    { month: 'Jun', impressions: 420000, clicks: 29000, conversions: 1180 },
  ];

  const platformData = [
    { name: 'Google Ads', value: 35, color: '#3B82F6' },
    { name: 'Facebook', value: 28, color: '#8B5CF6' },
    { name: 'LinkedIn', value: 20, color: '#14B8A6' },
    { name: 'Twitter', value: 10, color: '#F59E0B' },
    { name: 'Email', value: 7, color: '#EF4444' },
  ];

  const deviceData = [
    { device: 'Mobile', sessions: 45000, conversions: 1200 },
    { device: 'Desktop', sessions: 32000, conversions: 1800 },
    { device: 'Tablet', sessions: 18000, conversions: 450 },
  ];

  const funnelData = [
    { name: 'Impressions', value: 420000, fill: '#3B82F6' },
    { name: 'Clicks', value: 29000, fill: '#8B5CF6' },
    { name: 'Leads', value: 4200, fill: '#14B8A6' },
    { name: 'Conversions', value: 1180, fill: '#F59E0B' },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Performance Over Time */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Performance Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="month" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="impressions" 
              stroke="#3B82F6" 
              strokeWidth={3}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="clicks" 
              stroke="#8B5CF6" 
              strokeWidth={3}
              dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#8B5CF6', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="conversions" 
              stroke="#14B8A6" 
              strokeWidth={3}
              dot={{ fill: '#14B8A6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#14B8A6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Traffic by Platform */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic by Platform</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={platformData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {platformData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: any) => [`${value}%`, 'Share']}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Device Performance */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={deviceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="device" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="sessions" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="conversions" fill="#14B8A6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Conversion Funnel */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Funnel</h3>
        <ResponsiveContainer width="100%" height={300}>
          <FunnelChart>
            <Tooltip 
              formatter={(value: any, name: any) => [value.toLocaleString(), name]}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Funnel
              dataKey="value"
              data={funnelData}
              isAnimationActive
            >
              <LabelList position="center" fill="white" stroke="none" fontSize={12} />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsCharts;