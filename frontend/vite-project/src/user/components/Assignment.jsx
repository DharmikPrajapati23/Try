import React from 'react';
import PageLayout from './PageLayout';

const Assignment = () => {
  return (
    <PageLayout title="Assignment">
      <div className="flex items-center justify-center h-[80vh]">
        <p className="text-gray-500 text-lg">Assignment content goes here</p>
      </div>
    </PageLayout>
  );
};

export default Assignment;
