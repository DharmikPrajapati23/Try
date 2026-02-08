import React from 'react';
import PageLayout from './PageLayout';
import { FaRupeeSign, FaCalendarAlt, FaHistory } from 'react-icons/fa';

const Fees = () => {
  const feeOptions = [
    {
      title: 'Fees',
      icon: <FaRupeeSign className="w-16 h-16 text-gray-800" />
    },
    {
      title: 'Installment',
      icon: <FaCalendarAlt className="w-16 h-16 text-gray-800" />
    },
    {
      title: 'History',
      icon: <FaHistory className="w-16 h-16 text-gray-800" />
    }
  ];

  return (
    <PageLayout title="Fees">
      <div className="px-2 py-4">
        {/* First Row - 2 Cards */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {feeOptions.slice(0, 2).map((option, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow min-h-[180px]"
            >
              {/* Icon */}
              <div className="mb-4">
                {option.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-gray-700 text-lg font-medium text-center">
                {option.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Second Row - 1 Card */}
        <div className="grid grid-cols-2 gap-4">
          <div 
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow min-h-[180px]"
          >
            {/* Icon */}
            <div className="mb-4">
              {feeOptions[2].icon}
            </div>
            
            {/* Title */}
            <h3 className="text-gray-700 text-lg font-medium text-center">
              {feeOptions[2].title}
            </h3>
          </div>
          
          {/* Empty space for layout */}
          <div></div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Fees;
