import React, { useState, useEffect, useRef } from 'react';
import PageLayout from './PageLayout';
import { FaClock, FaCalendarAlt } from 'react-icons/fa';

const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;
  
const API_BASE_URL = `${BACKEND_API_URL}/api/attendance`;

const TimeTable = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const dateInputRef = useRef(null);

  // Set today's date as default
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
  }, []);

  // Fetch records when date changes
  useEffect(() => {
    if (selectedDate) {
      fetchRecords();
    }
  }, [selectedDate]);

  const fetchRecords = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_BASE_URL);
      const data = await res.json();
      
      // Filter by selected date
      const filtered = data.filter(record => record.date === selectedDate);
      
      // Sort by time
      filtered.sort((a, b) => a.time_from.localeCompare(b.time_from));
      
      setRecords(filtered);
    } catch (err) {
      console.error('Error fetching timetable:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDateDisplay = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr + 'T00:00:00');
    const day = String(date.getDate()).padStart(2, '0');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleDateClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };



  const getStatusText = (attendance) => {
    return attendance === 'Present' ? 'Conducted' : attendance || 'Pending';
  };

  return (
    <PageLayout title="Time Table">
      <div className="bg-gray-50 min-h-screen">
        {/* Date Picker */}
        <div className="px-4 pt-2 pb-3">
          <div 
            onClick={handleDateClick}
            className="relative bg-white rounded-lg border-2 border-gray-300 shadow-sm cursor-pointer hover:border-gray-400 transition-colors"
          >
            {/* Calendar Icon */}
            <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
            
            {/* Date Display */}
            <div className="w-full px-12 py-3 text-gray-700 text-base">
              {formatDateDisplay(selectedDate)}
            </div>
            
            {/* Hidden Date Input */}
            <input
              ref={dateInputRef}
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
            />
          </div>
        </div>

        {/* Timetable List */}
        <div className="px-4 pb-4 space-y-4">
          {loading && (
            <div className="text-center py-8">
              <p className="text-gray-500">Loading...</p>
            </div>
          )}

          {!loading && records.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No classes scheduled for this date</p>
            </div>
          )}

          {!loading && records.map((record, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500 relative"
            >
                {/* Status Badge */}
               <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Conducted
                  </span>
                </div>

              {/* Time */}
              <div className="flex items-center text-gray-600 text-sm mb-2">
                <FaClock className="w-4 h-4 mr-2" />
                <span>{record.time_from} - {record.time_to}</span>
              </div>

              {/* Subject Name */}
              <h3 className="text-gray-900 text-lg font-bold mb-3 pr-20">
                {record.subject_name}
              </h3>

              {/* Static Course and Class Info */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                  iMSc (IT)
                </span>
                <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                  First Year-A
                </span>
              </div>

              {/* Faculty Name */}
              <div className="text-gray-700 text-sm">
                <span className="font-medium">By : </span>
                <span className="font-semibold">{record.faculty_name}</span>
              </div>

              {/* Room Number (Static) */}
              <div className="text-gray-600 text-sm mt-1">
                Room No. :
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default TimeTable;




// import React, { useState, useEffect } from 'react';
// import PageLayout from './PageLayout';
// import { FaClock, FaCalendarAlt } from 'react-icons/fa';

// const API_BASE_URL = 'http://localhost:5000/api/attendance';

// const TimeTable = () => {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Set today's date as default
//   useEffect(() => {
//     const today = new Date().toISOString().split('T')[0];
//     setSelectedDate(today);
//   }, []);

//   // Fetch records when date changes
//   useEffect(() => {
//     if (selectedDate) {
//       fetchRecords();
//     }
//   }, [selectedDate]);

//   const fetchRecords = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(API_BASE_URL);
//       const data = await res.json();
      
//       // Filter by selected date
//       const filtered = data.filter(record => record.date === selectedDate);
      
//       // Sort by time
//       filtered.sort((a, b) => a.time_from.localeCompare(b.time_from));
      
//       setRecords(filtered);
//     } catch (err) {
//       console.error('Error fetching timetable:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatDateDisplay = (dateStr) => {
//     if (!dateStr) return '';
//     const date = new Date(dateStr + 'T00:00:00');
//     const day = String(date.getDate()).padStart(2, '0');
//     const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
//                         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     const month = monthNames[date.getMonth()];
//     const year = date.getFullYear();
//     return `${day}-${month}-${year}`;
//   };



//   const getStatusText = (attendance) => {
//     return attendance === 'Present' ? 'Conducted' : attendance || 'Pending';
//   };

//   return (
//     <PageLayout title="Time Table">
//       <div className="bg-gray-50 min-h-screen">
//         {/* Date Picker */}
//         <div className="px-4 pt-2 pb-3">
//           <div className="relative bg-white rounded-lg border-2 border-gray-300 shadow-sm">
//             {/* Calendar Icon */}
//             <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 z-10 pointer-events-none" />
            
//             {/* Date Display (Visible) */}
//             <div className="w-full px-12 py-3 text-gray-700 text-base">
//               {formatDateDisplay(selectedDate)}
//             </div>
            
//             {/* Hidden Date Input (for picker functionality) */}
//             <input
//               type="date"
//               value={selectedDate}
//               onChange={(e) => setSelectedDate(e.target.value)}
//               className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//             />
//           </div>
//         </div>

//         {/* Timetable List */}
//         <div className="px-4 pb-4 space-y-4">
//           {loading && (
//             <div className="text-center py-8">
//               <p className="text-gray-500">Loading...</p>
//             </div>
//           )}

//           {!loading && records.length === 0 && (
//             <div className="text-center py-8">
//               <p className="text-gray-500">No classes scheduled for this date</p>
//             </div>
//           )}

//           {!loading && records.map((record, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500 relative"
//             >
//                {/* Status Badge */}
//                <div className="absolute top-4 right-4">
//                  <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
//                    Conducted
//                  </span>
//                </div>

//               {/* Time */}
//               <div className="flex items-center text-gray-600 text-sm mb-2">
//                 <FaClock className="w-4 h-4 mr-2" />
//                 <span>{record.time_from} - {record.time_to}</span>
//               </div>

//               {/* Subject Name */}
//               <h3 className="text-gray-900 text-lg font-bold mb-3 pr-20">
//                 {record.subject_name}
//               </h3>

//               {/* Static Course and Class Info */}
//               <div className="flex flex-wrap gap-2 mb-3">
//                 <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
//                   iMSc (IT)
//                 </span>
//                 <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
//                   First Year-A
//                 </span>
//               </div>

//               {/* Faculty Name */}
//               <div className="text-gray-700 text-sm">
//                 <span className="font-medium">By : </span>
//                 <span className="font-semibold">{record.faculty_name}</span>
//               </div>

//               {/* Room Number (Static) */}
//               <div className="text-gray-600 text-sm mt-1">
//                 Room No. :
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </PageLayout>
//   );
// };

// export default TimeTable;



// // import React, { useState, useEffect } from 'react';
// // import PageLayout from './PageLayout';
// // import { FaClock } from 'react-icons/fa';

// // const API_BASE_URL = 'http://localhost:5000/api/attendance';

// // const TimeTable = () => {
// //   const [selectedDate, setSelectedDate] = useState('');
// //   const [records, setRecords] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   // Set today's date as default
// //   useEffect(() => {
// //     const today = new Date().toISOString().split('T')[0];
// //     setSelectedDate(today);
// //   }, []);

// //   // Fetch records when date changes
// //   useEffect(() => {
// //     if (selectedDate) {
// //       fetchRecords();
// //     }
// //   }, [selectedDate]);

// //   const fetchRecords = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await fetch(API_BASE_URL);
// //       const data = await res.json();
      
// //       // Filter by selected date
// //       const filtered = data.filter(record => record.date === selectedDate);
      
// //       // Sort by time
// //       filtered.sort((a, b) => a.time_from.localeCompare(b.time_from));
      
// //       setRecords(filtered);
// //     } catch (err) {
// //       console.error('Error fetching timetable:', err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const formatDate = (dateStr) => {
// //     const date = new Date(dateStr);
// //     const day = String(date.getDate()).padStart(2, '0');
// //     const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
// //                         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// //     const month = monthNames[date.getMonth()];
// //     const year = date.getFullYear();
// //     return `${day}-${month}-${year}`;
// //   };

// //   // const getStatusColor = (attendance) => {
// //   //   if (attendance === 'Present') return 'bg-green-600';
// //   //   if (attendance === 'Absent') return 'bg-red-600';
// //   //   if (attendance === 'Late') return 'bg-yellow-600';
// //   //   return 'bg-gray-600';
// //   // };

// //   const getStatusText = (attendance) => {
// //     return attendance || 'Pending';
// //   };

// //   return (
// //     <PageLayout title="Time Table">
// //       <div className="bg-gray-50 min-h-screen">
// //         {/* Date Picker */}
// //         <div className="px-4 pt-2 pb-3">
// //           <div className="relative bg-white rounded-lg border-2 border-gray-300 shadow-sm">
// //             <input
// //               type="date"
// //               value={selectedDate}
// //               onChange={(e) => setSelectedDate(e.target.value)}
// //               className="w-full px-4 py-3 rounded-lg bg-white focus:outline-none focus:border-gray-400 text-gray-700"
// //             />
// //             <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
// //               <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
// //                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
// //               </svg>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Timetable List */}
// //         <div className="px-4 pb-4 space-y-4">
// //           {loading && (
// //             <div className="text-center py-8">
// //               <p className="text-gray-500">Loading...</p>
// //             </div>
// //           )}

// //           {!loading && records.length === 0 && (
// //             <div className="text-center py-8">
// //               <p className="text-gray-500">No classes scheduled for this date</p>
// //             </div>
// //           )}

// //           {!loading && records.map((record, index) => (
// //             <div
// //               key={index}
// //               className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500 relative"
// //             >
// //               {/* Status Badge */}
// //               <div className="absolute top-4 right-4">
// //                 <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
// //                   Conducted
// //                 </span>
// //               </div>

// //               {/* Time */}
// //               <div className="flex items-center text-gray-600 text-sm mb-2">
// //                 <FaClock className="w-4 h-4 mr-2" />
// //                 <span>{record.time_from} - {record.time_to}</span>
// //               </div>

// //               {/* Subject Name */}
// //               <h3 className="text-gray-900 text-lg font-bold mb-3 pr-20">
// //                 {record.subject_name}
// //               </h3>

// //               {/* Static Course and Class Info */}
// //               <div className="flex flex-wrap gap-2 mb-3">
// //                 <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
// //                   iMSc (IT)
// //                 </span>
// //                 <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
// //                   First Year-A
// //                 </span>
// //               </div>

// //               {/* Faculty Name */}
// //               <div className="text-gray-700 text-sm">
// //                 <span className="font-medium">By : </span>
// //                 <span className="font-semibold">{record.faculty_name}</span>
// //               </div>

// //               {/* Room Number (Static) */}
// //               <div className="text-gray-600 text-sm mt-1">
// //                 Room No. :
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </PageLayout>
// //   );
// // };

// // export default TimeTable;


// // // import React from 'react';
// // // import PageLayout from './PageLayout';

// // // const TimeTable = () => {
// // //   return (
// // //     <PageLayout title="Time Table">
// // //       <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
// // //         <p className="text-gray-500 text-lg text-center">Time Table content goes here</p>
// // //       </div>
// // //     </PageLayout>
// // //   );
// // // };

// // // export default TimeTable;
