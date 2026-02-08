import React from 'react';
import PageLayout from './PageLayout';

const Quiz = () => {
  return (
    <PageLayout title="Quiz">
      <div className="flex items-center justify-center h-[80vh]">
        <p className="text-gray-500 text-lg text-center">Dear User,<br />Quiz is not scheduled at the moment</p>
      </div>
    </PageLayout>
  );
};

export default Quiz;
