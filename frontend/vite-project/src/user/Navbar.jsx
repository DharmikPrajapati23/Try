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

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        // { icon: <FaSignOutAlt />, label: 'LogOut', link: '/logout' }/admin/attendance
        { icon: <FaSignOutAlt />, label: 'LogOut', link: '/admin/attendance' }
    ];

    const toggleDrawer = () => {
        setIsOpen(prev => !prev);
        console.log('drawer toggled');
    };

    return (
        <>
            {/* Top Navigation Bar */}
            <nav className="bg-[#4AAED9] h-14 flex items-center justify-between px-4 shadow-md fixed top-0 left-0 right-0 z-50">
                {/* Hamburger Menu Button */}
                <button
                    type="button"
                    onClick={toggleDrawer}
                    className="text-white focus:outline-none"
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

                {/* Welcome Text */}
                <h1 className="text-white text-lg font-medium">Welcome!</h1>

                {/* Notification Bell */}
                <button className="text-yellow-300 focus:outline-none">
                    <FaBell className="w-5 h-5" />
                </button>
            </nav>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleDrawer}
                ></div>
            )}

            {/* Side Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Drawer Header */}
                <div className="bg-[#4AAED9] p-4 text-white">
                    <h2 className="text-base font-normal leading-tight">
                        Welcome Barot Yugank Rahulkumar!!
                    </h2>
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

            {/* Spacer for fixed navbar */}
            <div className="h-14"></div>
        </>
    );
};

export default Navbar;
