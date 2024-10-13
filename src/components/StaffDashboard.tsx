import React, { useState } from 'react';
import { Search, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StaffDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'pre-review':
      case 'double-blind':
      case 'upload':
      case 'published':
      case 'rejected':
      case 'reviewers-info':
        return <div className="text-center text-gray-500 mt-8">Content for {activeTab} goes here</div>;
      default:
        return <div className="text-center text-gray-500 mt-8">Select a tab</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-navy-blue text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Mindanao Journal of Science of Technology</h1>
        <nav>
          <ul className="space-y-2">
            {['Dashboard', 'Pre-Review', 'Double-Blind', 'Upload', 'Published', 'Rejected', 'Reviewers Info'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActiveTab(item.toLowerCase().replace(' ', '-'))}
                  className={`block w-full text-left py-2 px-4 rounded hover:bg-blue-700 transition duration-200 ${activeTab === item.toLowerCase().replace(' ', '-') ? 'bg-blue-700' : ''}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-10 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Staff's Dashboard</h2>
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search for..."
                className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            <div className="relative">
              <button 
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-200"
                onClick={() => setShowLogout(!showLogout)}
              >
                <User size={24} />
              </button>
              {showLogout && (
                <button
                  className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg py-2 px-4 flex items-center text-gray-700 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  <LogOut size={18} className="mr-2" />
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

const DashboardContent: React.FC = () => {
  const cards = [
    { title: 'Pre-Review', color: 'bg-yellow-400' },
    { title: 'Double-Blind', color: 'bg-purple-600' },
    { title: 'Upload', color: 'bg-blue-500' },
    { title: 'Published', color: 'bg-green-500' },
    { title: 'Rejected', color: 'bg-red-500' },
    { title: 'Reviewers Info', color: 'bg-yellow-600' },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div key={index} className={`${card.color} p-6 rounded-lg shadow-md text-white`}>
          <h3 className="text-xl font-bold mb-4">{card.title}</h3>
          {/* Add content for each card here */}
          <p>Content for {card.title}</p>
        </div>
      ))}
      <div className="col-span-2 bg-gray-200 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Statistics</h3>
        {/* Add pie charts or other statistics here */}
        <p>Pie charts and statistics go here</p>
      </div>
    </div>
  );
};

export default StaffDashboard;