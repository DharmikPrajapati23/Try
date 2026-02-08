import React from 'react';
import PageLayout from './PageLayout';

const DigitalRepository = () => {
  const categories = [
    {
      title: 'Syllabus',
      count: 1,
      icon: (
        <svg className="w-16 h-16 text-[#4AAED9]" viewBox="0 0 64 64" fill="none">
          {/* Monitor/Screen */}
          <rect x="8" y="16" width="48" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="8" y="48" width="48" height="4" rx="1" fill="currentColor"/>
          <line x1="32" y1="48" x2="32" y2="52" stroke="currentColor" strokeWidth="2"/>
          
          {/* Book Pages */}
          <path d="M20 22 L44 22 L44 42 L20 42 Z" fill="white" stroke="currentColor" strokeWidth="2"/>
          <path d="M32 22 L32 42" stroke="currentColor" strokeWidth="2"/>
          <line x1="24" y1="26" x2="28" y2="26" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="24" y1="30" x2="28" y2="30" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="24" y1="34" x2="28" y2="34" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="36" y1="26" x2="40" y2="26" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="36" y1="30" x2="40" y2="30" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="36" y1="34" x2="40" y2="34" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      title: 'Textbook',
      count: 12,
      icon: (
        <svg className="w-16 h-16 text-[#4AAED9]" viewBox="0 0 64 64" fill="none">
          {/* Monitor/Screen */}
          <rect x="8" y="16" width="48" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="8" y="48" width="48" height="4" rx="1" fill="currentColor"/>
          <line x1="32" y1="48" x2="32" y2="52" stroke="currentColor" strokeWidth="2"/>
          
          {/* Book Pages */}
          <path d="M20 22 L44 22 L44 42 L20 42 Z" fill="white" stroke="currentColor" strokeWidth="2"/>
          <path d="M32 22 L32 42" stroke="currentColor" strokeWidth="2"/>
          <line x1="24" y1="26" x2="28" y2="26" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="24" y1="30" x2="28" y2="30" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="24" y1="34" x2="28" y2="34" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="36" y1="26" x2="40" y2="26" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="36" y1="30" x2="40" y2="30" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="36" y1="34" x2="40" y2="34" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    }
  ];

  return (
    <PageLayout title="Digital Repository">
      <div className="grid grid-cols-2 gap-4 px-2 py-4">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
          >
            {/* Icon */}
            <div className="mb-4">
              {category.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-gray-800 text-lg font-medium mb-2 text-center">
              {category.title}
            </h3>
            
            {/* Count */}
            <p className="text-red-600 text-xl font-semibold">
              ({category.count})
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default DigitalRepository;
