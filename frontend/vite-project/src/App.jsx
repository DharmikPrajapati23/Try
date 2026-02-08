import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './user/Home';
import Navbar from './user/Navbar';

import About from './user/components/About';
import Assignment from './user/components/Assignment';
import Attendance from './user/components/Attendance';
import CommitteeManagement from './user/components/CommitteeManagement';
import Details from './user/components/Details';
import DigitalRepository from './user/components/DigitalRepository';
import Fees from './user/components/Fees';
import Notices from './user/components/Notices';
import OnlineClassRoom from './user/components/OnlineClassRoom';
import OPAC from './user/components/OPAC';
import PageLayout from './user/components/PageLayout';
import QualCampusMeet from './user/components/QualCampusMeet';
import Quiz from './user/components/Quiz';
import StudentFeedback from './user/components/StudentFeedback';
import TimeTable from './user/components/TimeTable';
import Logout from './user/components/Logout';

import AdminAttendance from './admin/Attendance';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/timetable" element={<TimeTable />} />

          <Route path="/about" element={<About />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/committeemanagement" element={<CommitteeManagement />} />
          <Route path="/digitalrepository" element={<DigitalRepository />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/onlineclassroom" element={<OnlineClassRoom />} />
          <Route path="/opac" element={<OPAC />} />
          <Route path="/pagelayout" element={<PageLayout />} />
          <Route path="/qualcampusmeet" element={<QualCampusMeet />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/studentfeedback" element={<StudentFeedback />} />
          <Route path="/logout" element={<Logout />} />

          {/* Admin Routes */}
          <Route path="/admin/attendance" element={<AdminAttendance />} />


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
