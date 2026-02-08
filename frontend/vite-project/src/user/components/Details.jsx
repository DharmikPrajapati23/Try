import React from 'react';

const Details = () => {
  // Student data - you can replace this with API data
  const studentData = {
    name: "Barot Yugank Rahulkumar",
    enrollmentNo: "2501261008",
    class: "First Year-A",
    academicYear: "2025-2026",
    rollNo: "252008",
    universityPRN: "",
    course: "iMSc (IT)",
    gender: "Male",
    nationality: "Indian",
    dob: "14-Oct-2007",
    profileImage: "/assets/profile-placeholder.png" // Add your image path
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Content assumes global Navbar from App provides the fixed top bar */}

      {/* Main Content */}
      <div className="px-4 py-6">
        {/* Profile Section */}
        <div className="flex items-start mb-6">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full border-4 border-gray-300 bg-white flex-shrink-0 overflow-hidden">
            <img 
              src={studentData.profileImage} 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Enrollment */}
          <div className="ml-6 flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {studentData.name}
            </h2>
            <span className="inline-block bg-[#4AAED9] text-white px-4 py-1 rounded-md text-base font-medium">
              {studentData.enrollmentNo}
            </span>
          </div>
        </div>

        {/* Student Details */}
        <div className="space-y-3 mb-6">
          <div className="flex">
            <span className="text-gray-700 font-medium w-40">Class</span>
            <span className="text-gray-700">: {studentData.class}</span>
          </div>
          
          <div className="flex">
            <span className="text-gray-700 font-medium w-40">Academic Year</span>
            <span className="text-gray-700">: {studentData.academicYear}</span>
            <span className="text-gray-700 ml-8">Roll No. : {studentData.rollNo}</span>
          </div>
          
          <div className="flex">
            <span className="text-gray-700 font-medium w-40">University PRN No.</span>
            <span className="text-gray-700">:</span>
          </div>
        </div>

        {/* Course Button */}
        <div className="mb-6">
          <button className="w-full bg-[#4AAED9] text-white text-lg font-medium py-3 rounded-lg">
            {studentData.course}
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-3 gap-3">
          {/* Male Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center border border-gray-200">
            <svg className="w-12 h-12 text-gray-700 mb-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 9c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm3 5c-3.9 0-7 1.6-7 3.6V20h14v-2.4c0-2-3.1-3.6-7-3.6z"/>
              <path d="M17 4l-2 2 1.3 1.3L15 8.6V12h1V9.4l1.3 1.3L19 9l-2-2V4z" transform="translate(0, -2)"/>
            </svg>
            <span className="text-gray-800 font-medium">{studentData.gender}</span>
          </div>

          {/* Nationality Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center border border-gray-200">
            <svg className="w-12 h-12 text-gray-700 mb-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="text-gray-800 font-medium">{studentData.nationality}</span>
          </div>

          {/* DOB Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center border border-gray-200">
            <svg className="w-12 h-12 text-gray-700 mb-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/>
            </svg>
            <span className="text-gray-800 font-medium text-sm">{studentData.dob}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
