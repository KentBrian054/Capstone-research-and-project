import React, { useState } from 'react';
import { Search, User, PieChartIcon, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const stats = [
    { name: 'Pre-Review', value: 75, color: '#3B82F6' },
    { name: 'Double-Blind', value: 60, color: '#10B981' },
    { name: 'Published', value: 40, color: '#14B8A6' },
    { name: 'Rejected', value: 20, color: '#EF4444' },
  ];

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'pre-review':
      case 'double-blind':
      case 'published':
      case 'rejected':
        return <div className="text-center text-gray-500 mt-8">No content available</div>;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <StatCard key={stat.name} title={stat.name} value={`${stat.value}%`} color={stat.color} />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Mindanao Journal</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`block w-full text-left py-2 px-4 rounded hover:bg-blue-700 transition duration-200 ${activeTab === 'dashboard' ? 'bg-blue-700' : ''}`}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('pre-review')}
                className={`block w-full text-left py-2 px-4 rounded hover:bg-blue-700 transition duration-200 ${activeTab === 'pre-review' ? 'bg-blue-700' : ''}`}
              >
                Pre-Review
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('double-blind')}
                className={`block w-full text-left py-2 px-4 rounded hover:bg-blue-700 transition duration-200 ${activeTab === 'double-blind' ? 'bg-blue-700' : ''}`}
              >
                Double-Blind
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('published')}
                className={`block w-full text-left py-2 px-4 rounded hover:bg-blue-700 transition duration-200 ${activeTab === 'published' ? 'bg-blue-700' : ''}`}
              >
                Published
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('rejected')}
                className={`block w-full text-left py-2 px-4 rounded hover:bg-blue-700 transition duration-200 ${activeTab === 'rejected' ? 'bg-blue-700' : ''}`}
              >
                Rejected
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-10 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h2>
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

const StatCard: React.FC<{ title: string; value: string; color: string }> = ({ title, value, color }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md border-l-4`} style={{ borderColor: color }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <div className={`p-3 rounded-full`} style={{ backgroundColor: `${color}20`, color: color }}>
          <PieChartIcon size={24} />
        </div>
      </div>
      <p className="text-3xl font-bold" style={{ color }}>{value}</p>
      <div className="mt-4 h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 rounded-full"
          style={{ width: value, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default Dashboard;