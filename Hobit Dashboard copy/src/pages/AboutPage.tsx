import React from 'react';
import { Users, Award, Target, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Ojasvi vats',
      role: 'CEO & Founder',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGurD0dTnt7jA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691538110835?e=1755734400&v=beta&t=s_vzDRN90Ape9VVPdZhqIWt0-5NmiwpIrF56kOcOpFo',
      bio: 'Serial entrepreneur with 7+ years in digital transformation. Previously led product at Multi startups.',
      skills: ['Strategy', 'Leadership', 'Product Vision']
    },
    {
      name: 'Nishtha Afrawal',
      role: 'HR & CMO',
      image: 'https://thehobit.in/wp-content/uploads/2024/12/nishthapic-400x400.jpg',
      bio: 'Former  engineer with expertise in scalable systems and machine learning. .',
      skills: ['Architecture', 'ML/AI', 'Scalability']
    },
    {
      name: 'Nishank Chakraborty',
      role: 'Co-Founder',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      bio: 'Connecting Professionals | Building Strong Networks for Collaboration and Growth.',
      skills: ['Human Capital Management', 'Start-up Leadership','Start-up Strategy']
    },
    {
      name: 'Maaz Raeen',
      role: 'Frontend developer',
      image: '/src/pages/EC7C9C64-B1A7-4ECA-98A7-79B22E839AB0_1_105_c.jpeg',
      bio: 'Intern as a frontend developer with a focus on React and modern web technologies. Passionate about creating intuitive user interfaces.',
      skills: ['HTML/CSS', 'JavaScript', 'React']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We pursue perfection in every project, setting the highest standards for quality and innovation.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in our work. Every project is a chance to create something amazing.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe the best results come from working closely with our clients as true partners.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We stay ahead of the curve, constantly exploring new technologies and methodologies.'
    }
  ];

  const achievements = [
    { metric: '500+', label: 'Projects Completed' },
    { metric: '150+', label: 'Happy Clients' },
    { metric: '25+', label: 'Industry Awards' },
    { metric: '99.9%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PortfolioTrack</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate creators, innovators, and problem-solvers dedicated to helping businesses 
              build exceptional digital experiences and track their success with precision.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2019, Hobit Technilogies began with a simple observation: businesses were creating 
                  beautiful digital experiences but struggling to understand their impact. We saw companies 
                  investing heavily in design and development, only to lack the insights needed to optimize 
                  and improve their results.
                </p>
                <p>
                  Our founders, coming from backgrounds at Higher studies and leading startups, combined their 
                  expertise in technology, design, and analytics to create a comprehensive solution. We don't 
                  just build portfolios—we create intelligent systems that help businesses understand and 
                  improve their digital presence.
                </p>
                <p>
                  Today, we've helped over 500 companies transform their digital strategy, from early-stage 
                  startups to Fortune 500 enterprises. Our approach combines cutting-edge technology with 
                  human-centered design to deliver measurable results.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-gray-900">7+ Years</div>
                <div className="text-sm text-gray-600">of Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind PortfolioTrack's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {achievement.metric}
                </div>
                <div className="text-blue-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work Together?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your digital presence and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;