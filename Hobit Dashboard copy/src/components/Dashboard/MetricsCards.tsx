import React from 'react';
import { TrendingUp, MousePointer, Target, Users, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const MetricsCards = () => {
  const metrics = [
    {
      title: 'Total Impressions',
      value: '2.1M',
      change: '+12.5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'blue',
    },
    {
      title: 'Total Clicks',
      value: '145K',
      change: '+8.2%',
      trend: 'up',
      icon: MousePointer,
      color: 'purple',
    },
    {
      title: 'Conversions',
      value: '3,247',
      change: '+15.3%',
      trend: 'up',
      icon: Target,
      color: 'teal',
    },
    {
      title: 'Bounce Rate',
      value: '24.6%',
      change: '-3.1%',
      trend: 'down',
      icon: Users,
      color: 'orange',
    },
    {
      title: 'ROI',
      value: '342%',
      change: '+22.7%',
      trend: 'up',
      icon: DollarSign,
      color: 'green',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      teal: 'bg-teal-50 text-teal-600 border-teal-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200',
      green: 'bg-green-50 text-green-600 border-green-200',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-lg ${getColorClasses(metric.color)}`}>
              <metric.icon className="w-5 h-5" />
            </div>
            <div className={`flex items-center text-sm font-medium ${
              metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {metric.trend === 'up' ? (
                <ArrowUpRight className="w-4 h-4 mr-1" />
              ) : (
                <ArrowDownRight className="w-4 h-4 mr-1" />
              )}
              {metric.change}
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
            <div className="text-sm text-gray-600">{metric.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsCards;