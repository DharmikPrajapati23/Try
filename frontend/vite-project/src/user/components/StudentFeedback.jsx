import React from 'react';
import PageLayout from './PageLayout';

const StudentFeedback = () => {
  return (
    <PageLayout title="Student Feedback">
      <div className="flex items-center justify-center h-[80vh]">
        <p className="text-gray-500 text-lg">Student Feedback content goes here</p>
      </div>
    </PageLayout>
  );
};

export default StudentFeedback;
