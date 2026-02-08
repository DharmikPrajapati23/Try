import React, { useState, useEffect, useRef } from 'react';
import PageLayout from './PageLayout';
import { FaCalendarAlt, FaChartBar, FaCalendarCheck, FaList } from 'react-icons/fa';

const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;
const API_BASE_URL = `${BACKEND_API_URL}/api/attendance`;


const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('daily');
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
      console.error('Error fetching attendance:', err);
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

  const getAttendanceBadge = (attendance) => {
    if (attendance === 'Present') {
      return { letter: 'P', bgColor: 'bg-green-600' };
    } else if (attendance === 'Absent') {
      return { letter: 'A', bgColor: 'bg-red-600' };
    } else if (attendance === 'Late') {
      return { letter: 'L', bgColor: 'bg-yellow-600' };
    }
    return { letter: 'A', bgColor: 'bg-red-600' };
  };

  return (
    <PageLayout title="Attendance">
      <div className="bg-white min-h-screen pb-20">
        {/* Date Picker */}
        <div className="px-4 pt-4 pb-4">
          <div 
            onClick={handleDateClick}
            className="relative bg-white rounded-lg border-2 border-gray-300 cursor-pointer hover:border-gray-400 transition-colors"
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

        {/* Attendance List */}
        <div className="border-l-4 border-red-600 ml-4">
          {loading && (
            <div className="text-center py-8">
              <p className="text-gray-500">Loading...</p>
            </div>
          )}

          {!loading && records.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No attendance records for this date</p>
            </div>
          )}

          {!loading && records.map((record, index) => {
            const badge = getAttendanceBadge(record.attendance);
            return (
              <div
                key={index}
                className="bg-white flex items-center justify-between py-4 px-4 border-b border-gray-200"
              >
                {/* Left Content */}
                <div className="flex-1">
                  {/* Time */}
                  <p className="text-gray-700 text-base mb-1">
                    {record.time_from}
                  </p>
                  
                  {/* Subject Name */}
                  <h3 className="text-gray-900 text-lg font-bold mb-1">
                    {record.subject_name}
                  </h3>
                  
                  {/* Time and Faculty */}
                  <p className="text-gray-700 text-base">
                    {record.time_from} {record.faculty_name}
                  </p>
                </div>

                {/* Right Badge */}
                <div className="ml-4">
                  <div className={`${badge.bgColor} w-14 h-16 flex items-center justify-center rounded`}>
                    <span className="text-white text-3xl font-bold">
                      {badge.letter}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation Tabs */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center justify-around py-2 z-50">
        <button
          onClick={() => setActiveTab('daily')}
          className={`flex flex-col items-center justify-center py-2 ${
            activeTab === 'daily' ? 'text-[#4AAED9]' : 'text-gray-500'
          }`}
        >
          <FaCalendarCheck className="w-7 h-7 mb-1" />
          <span className="text-sm">Daily</span>
        </button>

        <button
          onClick={() => setActiveTab('summary')}
          className={`flex flex-col items-center justify-center py-2 ${
            activeTab === 'summary' ? 'text-[#4AAED9]' : 'text-gray-500'
          }`}
        >
          <FaList className="w-7 h-7 mb-1" />
          <span className="text-sm">Summary</span>
        </button>

        <button
          onClick={() => setActiveTab('yearly')}
          className={`flex flex-col items-center justify-center py-2 ${
            activeTab === 'yearly' ? 'text-[#4AAED9]' : 'text-gray-500'
          }`}
        >
          <FaChartBar className="w-7 h-7 mb-1" />
          <span className="text-sm">Yearly Analytics</span>
        </button>
      </div>
    </PageLayout>
  );
};

export default Attendance;

