import React from 'react';
import PageLayout from './PageLayout';

const Notices = () => {
  return (
    <PageLayout title="Notices">
      <div className="flex items-center justify-center h-[80vh]">
        <p className="text-gray-500 text-lg text-center">Dear User,<br />Notices are not available at the moment</p>
      </div>
    </PageLayout>
  );
};

export default Notices;
