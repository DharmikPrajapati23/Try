import React from 'react';
import PageLayout from './PageLayout';

const Logout = () => {
  return (
    <PageLayout title="Logout">
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
        <p className="text-gray-500 text-lg text-center">Logout</p>
      </div>
    </PageLayout>
  );
};

export default Logout;
