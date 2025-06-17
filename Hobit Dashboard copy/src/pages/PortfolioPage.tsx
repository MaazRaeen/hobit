import React, { useState } from 'react';
import { ExternalLink, Github, Play, Filter, Search, Calendar, Users, TrendingUp } from 'lucide-react';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Projects', count: 24 },
    { id: 'web', name: 'Web Development', count: 12 },
    { id: 'mobile', name: 'Mobile Apps', count: 6 },
    { id: 'ecommerce', name: 'E-commerce', count: 4 },
    { id: 'saas', name: 'SaaS', count: 8 },
    { id: 'analytics', name: 'Analytics', count: 5 }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechFlow E-commerce Platform',
      category: 'ecommerce',
      description: 'Complete e-commerce solution with advanced analytics, inventory management, and real-time order tracking.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'TechFlow Inc.',
      duration: '6 months',
      team: 5,
      results: {
        metric1: { label: 'Conversion Rate', value: '+145%' },
        metric2: { label: 'Page Speed', value: '1.2s' },
        metric3: { label: 'User Engagement', value: '+89%' }
      },
      featured: true,
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'HealthTrack Mobile App',
      category: 'mobile',
      description: 'Cross-platform health tracking app with wearable integration and AI-powered insights.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      tags: ['React Native', 'TypeScript', 'Firebase', 'ML'],
      client: 'HealthTech Solutions',
      duration: '8 months',
      team: 4,
      results: {
        metric1: { label: 'Daily Active Users', value: '25K+' },
        metric2: { label: 'App Store Rating', value: '4.8★' },
        metric3: { label: 'Retention Rate', value: '78%' }
      },
      featured: true,
      link: '#'
    },
    {
      id: 3,
      title: 'DataViz Analytics Dashboard',
      category: 'analytics',
      description: 'Real-time analytics dashboard with advanced data visualization and custom reporting.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      tags: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      client: 'DataCorp',
      duration: '4 months',
      team: 3,
      results: {
        metric1: { label: 'Data Processing', value: '10M+ events/day' },
        metric2: { label: 'Query Speed', value: '<100ms' },
        metric3: { label: 'Cost Reduction', value: '60%' }
      },
      featured: false,
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'CloudSync SaaS Platform',
      category: 'saas',
      description: 'Enterprise-grade cloud synchronization platform with real-time collaboration features.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
      tags: ['Angular', 'Node.js', 'Redis', 'AWS'],
      client: 'CloudSync Technologies',
      duration: '10 months',
      team: 8,
      results: {
        metric1: { label: 'Enterprise Clients', value: '500+' },
        metric2: { label: 'Uptime', value: '99.9%' },
        metric3: { label: 'Data Sync Speed', value: '5x faster' }
      },
      featured: true,
      link: '#'
    },
    {
      id: 5,
      title: 'EduTech Learning Portal',
      category: 'web',
      description: 'Interactive learning management system with gamification and progress tracking.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      tags: ['React', 'GraphQL', 'PostgreSQL', 'Docker'],
      client: 'EduTech Academy',
      duration: '5 months',
      team: 6,
      results: {
        metric1: { label: 'Student Engagement', value: '+200%' },
        metric2: { label: 'Course Completion', value: '85%' },
        metric3: { label: 'User Satisfaction', value: '4.9/5' }
      },
      featured: false,
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'FinanceFlow Mobile Banking',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication and instant transfers.',
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
      tags: ['Flutter', 'Dart', 'Firebase', 'Biometrics'],
      client: 'FinanceFlow Bank',
      duration: '12 months',
      team: 7,
      results: {
        metric1: { label: 'Downloads', value: '100K+' },
        metric2: { label: 'Security Score', value: 'A+' },
        metric3: { label: 'Transaction Speed', value: '<2s' }
      },
      featured: true,
      link: '#'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of successful projects that demonstrate our expertise in creating 
              exceptional digital experiences with measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most impactful work showcasing innovation, technical excellence, and outstanding results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 mb-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center space-x-4">
                        {project.link && (
                          <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                            <ExternalLink className="w-5 h-5" />
                          </button>
                        )}
                        {project.github && (
                          <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                            <Github className="w-5 h-5" />
                          </button>
                        )}
                        <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                          <Play className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {project.team} team members
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                    {Object.entries(project.results).map(([key, result]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{result.value}</div>
                        <div className="text-sm text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our complete portfolio of successful projects across different industries and technologies.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 space-y-4 lg:space-y-0">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full lg:w-64"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 group">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-4 right-4 flex space-x-2">
                      {project.link && (
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      )}
                      {project.github && (
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                          <Github className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{project.client}</span>
                    <span>{project.duration}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    {Object.entries(project.results).slice(0, 2).map(([key, result]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-semibold text-gray-900 flex items-center justify-center">
                          <TrendingUp className="w-3 h-3 mr-1 text-green-600" />
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how we can bring your vision to life and achieve exceptional results together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;