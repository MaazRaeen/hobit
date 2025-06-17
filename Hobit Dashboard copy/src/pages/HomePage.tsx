import React from 'react';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import Testimonials from '../components/Home/Testimonials';
import Stats from '../components/Home/Stats';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Services />
      <FeaturedProjects />
      <Testimonials />
    </div>
  );
};

export default HomePage;