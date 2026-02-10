import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaGraduationCap,
  FaClock,
  FaUserCheck,
  FaSchool,
  FaBook,
  FaVideo,
  FaCheckSquare,
  FaBell,
  FaLaptop,
  FaUsers,
  FaRupeeSign,
  FaComment,
  FaInfoCircle,
  FaSignOutAlt
} from 'react-icons/fa';

const PageLayout = ({ title, children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    { icon: <FaGraduationCap />, label: 'Student Information', link: '/details' },
    { icon: <FaClock />, label: 'Time Table', link: '/timetable' },
    { icon: <FaUserCheck />, label: 'Attendance', link: '/attendance' },
    { icon: <FaSchool />, label: 'Assignment', link: '/assignment' },
    { icon: <FaBook />, label: 'Digital Repository', link: '/digitalrepository' },
    { icon: <FaVideo />, label: 'QualCampus Meet', link: '/qualcampusmeet' },
    { icon: <FaVideo />, label: 'Online Class Room', link: '/onlineclassroom' },
    { icon: <FaCheckSquare />, label: 'Quiz', link: '/quiz' },
    { icon: <FaBell />, label: 'Notices', link: '/notices', highlight: true },
    { icon: <FaLaptop />, label: 'OPAC', link: '/opac' },
    { icon: <FaUsers />, label: 'Committee Management', link: '/committeemanagement' },
    { icon: <FaRupeeSign />, label: 'Fees', link: '/fees' },
    { icon: <FaComment />, label: 'Student Feedback', link: '/studentfeedback' },
    { icon: <FaInfoCircle />, label: 'About', link: '/about' },
    { icon: <FaInfoCircle />, label: 'Page Layout', link: '/pagelayout' },
    { icon: <FaSignOutAlt />, label: 'LogOut', link: '/admin/attendance' }
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen((s) => !s);
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      {/* Top Navigation Bar */}
      <nav className="bg-[#4AAED9] h-14 flex items-center justify-between px-4 shadow-md fixed top-0 left-0 right-0 z-50 w-full">
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleDrawer}
          className="text-white focus:outline-none bg-transparent p-0 border-0"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Page Title */}
        <h1 className="text-white text-lg font-medium">{title}</h1>

        {/* Empty div for spacing */}
        <div className="w-6"></div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-14"></div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Drawer Header */}
        <div className="bg-[#4AAED9] p-4 text-white">
          <h2 className="text-base font-normal leading-tight">Welcome!</h2>
          <p className="text-sm opacity-90">(2025-2026)</p>
        </div>

        {/* Menu Items */}
        <div className="overflow-y-auto h-[calc(100%-80px)]">
          <ul className="py-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors"
                  onClick={toggleDrawer}
                >
                  <span className={`text-xl mr-4 ${item.highlight ? 'text-yellow-500' : 'text-gray-600'}`}>
                    {item.icon}
                  </span>
                  <span className="text-base text-gray-800">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 py-6">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//     FaGraduationCap,
//     FaClock,
//     FaUserCheck,
//     FaSchool,
//     FaBook,
//     FaVideo,
//     FaCheckSquare,
//     FaBell,
//     FaLaptop,
//     FaUsers,
//     FaRupeeSign,
//     FaComment,
//     FaInfoCircle,
//     FaSignOutAlt
// } from 'react-icons/fa';

// const PageLayout = ({ title, children }) => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const menuItems = [
//     { icon: <FaGraduationCap />, label: 'Student Information', link: '/details' },
//     { icon: <FaClock />, label: 'Time Table', link: '/timetable' },
//     { icon: <FaUserCheck />, label: 'Attendance', link: '/attendance' },
//     { icon: <FaSchool />, label: 'Assignment', link: '/assignment' },
//     { icon: <FaBook />, label: 'Digital Repository', link: '/digitalrepository' },
//     { icon: <FaVideo />, label: 'QualCampus Meet', link: '/qualcampusmeet' },
//     { icon: <FaVideo />, label: 'Online Class Room', link: '/onlineclassroom' },
//     { icon: <FaCheckSquare />, label: 'Quiz', link: '/quiz' },
//     { icon: <FaBell />, label: 'Notices', link: '/notices', highlight: true },
//     { icon: <FaLaptop />, label: 'OPAC', link: '/opac' },
//     { icon: <FaUsers />, label: 'Committee Management', link: '/committeemanagement' },
//     { icon: <FaRupeeSign />, label: 'Fees', link: '/fees' },
//     { icon: <FaComment />, label: 'Student Feedback', link: '/studentfeedback' },
//     { icon: <FaInfoCircle />, label: 'About', link: '/about' },
//     { icon: <FaInfoCircle />, label: 'Page Layout', link: '/pagelayout' },
//     { icon: <FaSignOutAlt />, label: 'LogOut', link: '/logout' }
//   ];

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
//       {/* Top Navigation Bar */}
//       <nav className="bg-[#4AAED9] h-14 flex items-center justify-between px-4 shadow-md fixed top-0 left-0 right-0 z-50 w-full">
//         {/* Hamburger Menu Button */}
//         <button 
//           onClick={toggleDrawer}
//           className="text-white focus:outline-none bg-transparent p-0 border-0"
//           aria-label="Menu"
//         >
//           <svg 
//             className="w-6 h-6" 
//             fill="none" 
//             stroke="currentColor" 
//             viewBox="0 0 24 24"
//           >
//             <path 
//               strokeLinecap="round" 
//               strokeLinejoin="round" 
//               strokeWidth={2} 
//               d="M4 6h16M4 12h16M4 18h16" 
//             />
//           </svg>
//         </button>

//         {/* Page Title */}
//         <h1 className="text-white text-lg font-medium">{title}</h1>

//         {/* Empty div for spacing */}
//         <div className="w-6"></div>
//       </nav>

//       {/* Overlay */}
//       {isDrawerOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={toggleDrawer}
//         ></div>
//       )}

//       {/* Side Drawer */}
//       <div
//         className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
//           }`}
//       >
//         {/* Drawer Header */}
//         <div className="bg-[#4AAED9] p-4 text-white">
//           <h2 className="text-base font-normal leading-tight">
//             Welcome Barot Yugank Rahulkumar!!
//           </h2>
//           <p className="text-sm opacity-90">(2025-2026)</p>
//         </div>

//         {/* Menu Items */}
//         <div className="overflow-y-auto h-[calc(100%-80px)]">
//           <ul className="py-2">
//             {menuItems.map((item, index) => (
//               <li key={index}>
//                 <Link
//                   to={item.link}
//                   className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors"
//                   onClick={toggleDrawer}
//                 >
//                   <span className={`text-xl mr-4 ${item.highlight ? 'text-yellow-500' : 'text-gray-600'}`}>
//                     {item.icon}
//                   </span>
//                   <span className="text-base text-gray-800">{item.label}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Spacer for fixed navbar */}
//       <div className="h-14"></div>

//       {/* Main Content */}
//       <div className="w-full px-4 py-6">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default PageLayout;
