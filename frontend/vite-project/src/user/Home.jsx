import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-start pt-8 px-4">
        {/* University Logo */}
        <div className="w-full max-w-md mb-6">
          <img 
            src="https://eequeuestorage.blob.core.windows.net/staticfiles/jguni2/ee-form-widget/form-1/loginlogo.png" 
            alt="JG University Logo" 
            className="w-full h-auto"
          />
        </div>
        
        {/* University Name */}
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          JG UNIVERSITY
        </h1>
      </div>
    </div>
  );
};

export default Home;
