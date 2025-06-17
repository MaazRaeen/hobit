import React from 'react';
import { Activity, Server, Zap, Shield, Clock, CheckCircle, AlertTriangle, Globe } from 'lucide-react';

const SystemStats = () => {
  const systemMetrics = [
    {
      label: 'System Uptime',
      value: '99.9%',
      status: 'excellent',
      icon: Activity,
      description: '30 days average'
    },
    {
      label: 'Response Time',
      value: '45ms',
      status: 'good',
      icon: Zap,
      description: 'Average API response'
    },
    {
      label: 'Active Campaigns',
      value: '12',
      status: 'normal',
      icon: Globe,
      description: 'Currently running'
    },
    {
      label: 'Data Processing',
      value: '2.1M',
      status: 'excellent',
      icon: Server,
      description: 'Events per day'
    }
  ];

  const recentActivity = [
    {
      action: 'Campaign "Holiday Sale" started',
      time: '2 minutes ago',
      status: 'success',
      icon: CheckCircle
    },
    {
      action: 'High spend alert triggered',
      time: '15 minutes ago',
      status: 'warning',
      icon: AlertTriangle
    },
    {
      action: 'Monthly report generated',
      time: '1 hour ago',
      status: 'success',
      icon: CheckCircle
    },
    {
      action: 'New integration connected',
      time: '3 hours ago',
      status: 'success',
      icon: CheckCircle
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      excellent: 'text-green-600 bg-green-100',
      good: 'text-blue-600 bg-blue-100',
      normal: 'text-gray-600 bg-gray-100',
      warning: 'text-yellow-600 bg-yellow-100',
      error: 'text-red-600 bg-red-100'
    };
    return colors[status as keyof typeof colors] || colors.normal;
  };

  const getActivityStatusColor = (status: string) => {
    const colors = {
      success: 'text-green-600',
      warning: 'text-yellow-600',
      error: 'text-red-600'
    };
    return colors[status as keyof typeof colors] || colors.success;
  };

  return (
    <div className="space-y-6">
      {/* System Status */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">All systems operational</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {systemMetrics.map((metric, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${getStatusColor(metric.status)}`}>
                  <metric.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{metric.label}</div>
                  <div className="text-xs text-gray-500">{metric.description}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-gray-900">{metric.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Active Integrations</span>
            <span className="text-sm font-semibold text-gray-900">15+</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Monitoring Since</span>
            <span className="text-sm font-semibold text-gray-900">Jan 2024</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Data Retention</span>
            <span className="text-sm font-semibold text-gray-900">24 months</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Security Level</span>
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-600">High</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <Clock className="w-5 h-5 text-gray-400" />
        </div>

        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3">
              <activity.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${getActivityStatusColor(activity.status)}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">{activity.action}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View all activity →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemStats;