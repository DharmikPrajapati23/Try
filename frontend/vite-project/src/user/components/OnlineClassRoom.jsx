import React, { useState } from 'react';
import PageLayout from './PageLayout';
import { FaSearch, FaPause } from 'react-icons/fa';

const OnlineClassRoom = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample course data - replace with API data from Flask/MongoDB
  const courses = [
    {
      title: "English & Communication Skills (AEC240101)",
      type: "Theory - Practical",
      code: "-",
      instructor: "Miss Akshara Prabhakaran"
    },
    {
      title: "Database Management System Practical",
      type: "Practical",
      code: "BSC240203",
      instructor: "Miss Meenakshi Malla"
    },
    {
      title: "Foundation in Statistical Methods",
      type: "Theory",
      code: "MDC240201",
      instructor: "Ms. Shreya Pota"
    },
    {
      title: "Social Media Marketing",
      type: "Theory",
      code: "AEC240201",
      instructor: "Mr. Shreyas Trivedi"
    },
    {
      title: "Soft skills",
      type: "Theory",
      code: "SEC240201",
      instructor: "Ms. Kiran Issrani"
    },
    {
      title: "Office Automation",
      type: "Theory - Practical",
      code: "SEC250101",
      instructor: "Mr. Shreyas Trivedi"
    },
    {
      title: "Indian Knowledge System – I",
      type: "Theory",
      code: "IKS2501",
      instructor: "Ms. Shreya Pota"
    },
    {
      title: "Programming Language (BSC240101)",
      type: "Theory - Practical",
      code: "-",
      instructor: "Miss Akshara Prabhakaran"
    },
    {
      title: "Foundation in Computational Mathematics (MDC240101)",
      type: "Theory - Practical",
      code: "-",
      instructor: "Miss Akshara Prabhakaran"
    },
    {
      title: "Indian Knowledge System - I (IKS2401)",
      type: "Theory - Practical",
      code: "-",
      instructor: "Miss Akshara Prabhakaran"
    },
    {
      title: "Programming Language",
      type: "Theory",
      code: "BSC250101",
      instructor: "Mr. Saksham Jain"
    },
    {
      title: "Programming Language Practical",
      type: "Practical",
      code: "BSC250102",
      instructor: "Mr. Sanket Acharya"
    },
    {
      title: "Information Technologies Practical",
      type: "Practical",
      code: "BSC250103",
      instructor: "Mr. Saksham Jain"
    },
    {
      title: "Foundation in Computational Mathematics",
      type: "Theory",
      code: "MDC250101",
      instructor: "Ms. Shreya Pota"
    },
    {
      title: "English & Communication Skills – I",
      type: "Theory",
      code: "AEC250101",
      instructor: "Ms. Soumya Nair"
    }
  ];

  // Filter courses based on search query
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageLayout title="Online Class Room">
      {/* Search Bar - Reduced top padding */}
      {/* <div className="px-4 pt-2 pb-2 bg-gray-50">
        <div className="relative bg-white rounded-lg border-2 border-gray-300 shadow-sm">
          <input
            type="text"
            placeholder="Search Subject"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pr-12 rounded-lg bg-white focus:outline-none focus:border-gray-400 text-gray-700 placeholder-gray-400"
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
      </div> */}

      {/* Course List */}
      <div className="px-4 pb-4 space-y-4 overflow-y-auto bg-gray-50">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 relative"
          >
            {/* Pause Icon */}
            <div className="absolute top-4 right-4 bg-pink-100 rounded-full p-2">
              <FaPause className="text-pink-600 w-4 h-4" />
            </div>

            {/* Course Title */}
            <h3 className="text-gray-900 text-base font-semibold mb-2 pr-10">
              {course.title}
            </h3>

            {/* Course Type and Code */}
            <p className="text-gray-600 text-sm mb-3">
              {course.type} | {course.code}
            </p>

            {/* Instructor Name */}
            <div className="inline-block bg-gray-200 rounded-full px-4 py-1">
              <span className="text-gray-700 text-sm">{course.instructor}</span>
            </div>
          </div>
        ))}

        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">No courses found</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default OnlineClassRoom;




// import React, { useState } from 'react';



// import PageLayout from './PageLayout';
// import { FaSearch, FaPause } from 'react-icons/fa';

// const OnlineClassRoom = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   // Sample course data - replace with API data from Flask/MongoDB
//   const courses = [
//     {
//       title: "English & Communication Skills (AEC240101)",
//       type: "Theory - Practical",
//       code: "-",
//       instructor: "Miss Akshara Prabhakaran"
//     },
//     {
//       title: "Database Management System Practical",
//       type: "Practical",
//       code: "BSC240203",
//       instructor: "Miss Meenakshi Malla"
//     },
//     {
//       title: "Foundation in Statistical Methods",
//       type: "Theory",
//       code: "MDC240201",
//       instructor: "Ms. Shreya Pota"
//     },
//     {
//       title: "Social Media Marketing",
//       type: "Theory",
//       code: "AEC240201",
//       instructor: "Mr. Shreyas Trivedi"
//     },
//     {
//       title: "Soft skills",
//       type: "Theory",
//       code: "SEC240201",
//       instructor: "Ms. Kiran Issrani"
//     },
//     {
//       title: "Office Automation",
//       type: "Theory - Practical",
//       code: "SEC250101",
//       instructor: "Mr. Shreyas Trivedi"
//     },
//     {
//       title: "Indian Knowledge System – I",
//       type: "Theory",
//       code: "IKS2501",
//       instructor: "Ms. Shreya Pota"
//     },
//     {
//       title: "Programming Language (BSC240101)",
//       type: "Theory - Practical",
//       code: "-",
//       instructor: "Miss Akshara Prabhakaran"
//     },
//     {
//       title: "Foundation in Computational Mathematics (MDC240101)",
//       type: "Theory - Practical",
//       code: "-",
//       instructor: "Miss Akshara Prabhakaran"
//     },
//     {
//       title: "Indian Knowledge System - I (IKS2401)",
//       type: "Theory - Practical",
//       code: "-",
//       instructor: "Miss Akshara Prabhakaran"
//     },
//     {
//       title: "Programming Language",
//       type: "Theory",
//       code: "BSC250101",
//       instructor: "Mr. Saksham Jain"
//     },
//     {
//       title: "Programming Language Practical",
//       type: "Practical",
//       code: "BSC250102",
//       instructor: "Mr. Sanket Acharya"
//     },
//     {
//       title: "Information Technologies Practical",
//       type: "Practical",
//       code: "BSC250103",
//       instructor: "Mr. Saksham Jain"
//     },
//     {
//       title: "Foundation in Computational Mathematics",
//       type: "Theory",
//       code: "MDC250101",
//       instructor: "Ms. Shreya Pota"
//     },
//     {
//       title: "English & Communication Skills – I",
//       type: "Theory",
//       code: "AEC250101",
//       instructor: "Ms. Soumya Nair"
//     }
//   ];

//   // Filter courses based on search query
//   const filteredCourses = courses.filter(course =>
//     course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     course.code.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <PageLayout title="Online Class Room">
//       {/* Search Bar */}
//       <div className="px-4 pt-2 pb-2 bg-gray-50">
//         <div className="relative bg-white rounded-lg border-2 border-gray-300 shadow-sm">
//           <input
//             type="text"
//             placeholder="Search Subject"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full px-4 py-3 pr-12 rounded-lg bg-white focus:outline-none focus:border-gray-400 text-gray-700 placeholder-gray-400"
//           />
//           <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
//         </div>
//       </div>

//       {/* Course List */}
//       <div className="px-4 pb-4 space-y-4 overflow-y-auto bg-gray-50">
//         {filteredCourses.map((course, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-md p-4 relative"
//           >
//             {/* Pause Icon */}
//             <div className="absolute top-4 right-4 bg-pink-100 rounded-full p-2">
//               <FaPause className="text-pink-600 w-4 h-4" />
//             </div>

//             {/* Course Title */}
//             <h3 className="text-gray-900 text-base font-semibold mb-2 pr-10">
//               {course.title}
//             </h3>

//             {/* Course Type and Code */}
//             <p className="text-gray-600 text-sm mb-3">
//               {course.type} | {course.code}
//             </p>

//             {/* Instructor Name */}
//             <div className="inline-block bg-gray-200 rounded-full px-4 py-1">
//               <span className="text-gray-700 text-sm">{course.instructor}</span>
//             </div>
//           </div>
//         ))}

//         {/* No Results Message */}
//         {filteredCourses.length === 0 && (
//           <div className="text-center py-8">
//             <p className="text-gray-500 text-lg">No courses found</p>
//           </div>
//         )}
//       </div>
//     </PageLayout>
//   );
// };

// export default OnlineClassRoom;
