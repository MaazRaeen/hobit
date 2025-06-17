import React from 'react';
import { Monitor, Smartphone, BarChart3, Megaphone, Shield, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and responsive design.',
      features: ['React & TypeScript', 'Responsive Design', 'Performance Optimized'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['iOS & Android', 'Cross-Platform', 'App Store Optimization'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Tracking',
      description: 'Comprehensive tracking solutions to monitor performance and user engagement.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Conversion Tracking'],
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns to grow your audience and increase conversions.',
      features: ['SEO Optimization', 'Social Media', 'PPC Campaigns'],
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Robust security measures and compliance with industry standards and regulations.',
      features: ['Data Protection', 'GDPR Compliance', 'Security Audits'],
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your systems run smoothly and efficiently.',
      features: ['Live Chat Support', 'Phone Support', 'Email Support'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business succeed in the modern marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;