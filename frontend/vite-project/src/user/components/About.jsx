import React from 'react';
import PageLayout from './PageLayout';

const About = () => {
  return (
    <PageLayout title="About">
      <div className="flex items-center justify-center h-[80vh]">
        <p className="text-gray-500 text-lg">About content goes here</p>
      </div>
    </PageLayout>
  );
};

export default About;
