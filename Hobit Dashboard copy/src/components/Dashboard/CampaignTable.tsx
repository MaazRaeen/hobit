import React, { useState } from 'react';
import { Edit2, Eye, Play, Pause, MoreVertical, TrendingUp, TrendingDown } from 'lucide-react';

const CampaignTable = () => {
  const [campaigns] = useState([
    {
      id: 1,
      name: 'Q4 Holiday Campaign',
      platform: 'Google Ads',
      status: 'active',
      budget: 15000,
      spent: 8750,
      impressions: 245000,
      clicks: 1250,
      conversions: 125,
      roi: 320,
      ctr: 0.51,
      trend: 'up'
    },
    {
      id: 2,
      name: 'Social Media Boost',
      platform: 'Facebook Ads',
      status: 'active',
      budget: 8000,
      spent: 6200,
      impressions: 180000,
      clicks: 890,
      conversions: 89,
      roi: 245,
      ctr: 0.49,
      trend: 'up'
    },
    {
      id: 3,
      name: 'LinkedIn B2B Campaign',
      platform: 'LinkedIn',
      status: 'paused',
      budget: 5000,
      spent: 3800,
      impressions: 95000,
      clicks: 420,
      conversions: 34,
      roi: 180,
      ctr: 0.44,
      trend: 'down'
    },
    {
      id: 4,
      name: 'Email Newsletter',
      platform: 'Email',
      status: 'active',
      budget: 2000,
      spent: 450,
      impressions: 75000,
      clicks: 1200,
      conversions: 67,
      roi: 890,
      ctr: 1.6,
      trend: 'up'
    },
    {
      id: 5,
      name: 'Retargeting Campaign',
      platform: 'Google Ads',
      status: 'active',
      budget: 4500,
      spent: 2100,
      impressions: 120000,
      clicks: 680,
      conversions: 45,
      roi: 215,
      ctr: 0.57,
      trend: 'up'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredCampaigns = campaigns.filter(campaign => 
    filter === 'all' || campaign.status === filter
  );

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-800 border-green-200',
      paused: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      ended: 'bg-red-100 text-red-800 border-red-200'
    };
    return `px-3 py-1 rounded-full text-sm font-medium border ${styles[status as keyof typeof styles]}`;
  };

  const getPlatformIcon = (platform: string) => {
    const icons = {
      'Google Ads': '🟢',
      'Facebook Ads': '🔵', 
      'LinkedIn': '🔷',
      'Email': '📧',
      'Twitter': '🐦'
    };
    return icons[platform as keyof typeof icons] || '📊';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-0">Campaign Performance</h3>
          
          <div className="flex items-center space-x-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Campaigns</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="ended">Ended</option>
            </select>
            
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              New Campaign
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCampaigns.map((campaign) => (
              <tr key={campaign.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{getPlatformIcon(campaign.platform)}</span>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                      <div className="text-sm text-gray-500">{campaign.platform}</div>
                    </div>
                  </div>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={getStatusBadge(campaign.status)}>
                    {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                  </span>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    ${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {Math.round((campaign.spent / campaign.budget) * 100)}% spent
                  </div>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="space-y-1">
                    <div className="flex items-center text-sm">
                      <span className="text-gray-500 w-20">Impressions:</span>
                      <span className="font-medium">{campaign.impressions.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-gray-500 w-20">Clicks:</span>
                      <span className="font-medium">{campaign.clicks.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-gray-500 w-20">CTR:</span>
                      <span className="font-medium">{campaign.ctr}%</span>
                    </div>
                  </div>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <div className="text-lg font-semibold text-gray-900">{campaign.roi}%</div>
                    {campaign.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                  <div className="text-sm text-gray-500">{campaign.conversions} conversions</div>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 p-1 rounded hover:bg-gray-50 transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 p-1 rounded hover:bg-gray-50 transition-colors">
                      {campaign.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 p-1 rounded hover:bg-gray-50 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Showing {filteredCampaigns.length} of {campaigns.length} campaigns</span>
          <div className="flex items-center space-x-4">
            <span>Total Budget: ${campaigns.reduce((sum, c) => sum + c.budget, 0).toLocaleString()}</span>
            <span>Total Spent: ${campaigns.reduce((sum, c) => sum + c.spent, 0).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignTable;