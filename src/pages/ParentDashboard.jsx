import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { FiVideo, FiAlertTriangle, FiClock, FiCheck, FiMapPin } from 'react-icons/fi';

function ParentDashboard() {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('cctv');
  
  // Mock data
  const child = {
    name: 'Alex',
    school: 'Green Valley High School',
    grade: '10th',
    route: 'Route 24',
    busNumber: 'GR-103',
    status: 'In Transit'
  };
  
  const checkInLogs = [
    { time: '07:32 AM', type: 'Boarded', location: 'Maple Street Station' },
    { time: '08:15 AM', type: 'Arrived', location: 'Green Valley High School' },
    { time: '03:45 PM', type: 'Boarded', location: 'Green Valley High School' },
    { time: '04:21 PM', type: 'Arrived', location: 'Maple Street Station' }
  ];
  
  const alerts = [
    { type: 'info', message: 'Alex boarded the bus at Maple Street Station', time: '07:32 AM' },
    { type: 'info', message: 'Bus arrived at Green Valley High School', time: '08:15 AM' },
    { type: 'warning', message: 'Slight delay due to traffic on Main Street', time: '08:05 AM' }
  ];
  
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-6">Parent Dashboard</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Child info and alerts */}
        <div className="lg:col-span-1">
          <div className="card mb-6">
            <h3 className="text-xl font-semibold mb-4">Your Child</h3>
            
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-xl">
                {child.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">{child.name}</h4>
                <p className="text-gray-500">{child.school} - {child.grade}</p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Route:</span>
                <span className="font-medium">{child.route}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Bus Number:</span>
                <span className="font-medium">{child.busNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-medium text-primary">{child.status}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Link to="/parent/track" className="btn btn-primary w-full">
                Track Bus
              </Link>
            </div>
          </div>
          
          {/* Alerts */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Recent Alerts</h3>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded flex items-start ${
                    alert.type === 'warning' 
                      ? 'bg-yellow-50 border-l-4 border-yellow-400' 
                      : 'bg-blue-50 border-l-4 border-blue-400'
                  }`}
                >
                  <div className={`p-1 rounded-full mr-3 ${
                    alert.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                  }`}>
                    {alert.type === 'warning' 
                      ? <FiAlertTriangle className="text-yellow-500" /> 
                      : <FiClock className="text-blue-500" />
                    }
                  </div>
                  <div>
                    <p className="font-medium">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">Today at {alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right column - CCTV and logs */}
        <div className="lg:col-span-2">
          {/* Tabs for CCTV and Check-in Logs */}
          <div className="flex border-b mb-6">
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'cctv' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
              onClick={() => setActiveTab('cctv')}
            >
              Live CCTV
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'logs' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
              onClick={() => setActiveTab('logs')}
            >
              Check-in Logs
            </button>
          </div>
          
          {/* CCTV Feed */}
          {activeTab === 'cctv' && (
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">CCTV Feed</h3>
                <div className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-sm font-medium">Live</span>
                </div>
              </div>
              
              <div className="aspect-video bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <FiVideo size={48} className="text-gray-500 mx-auto mb-2" />
                  <p className="text-gray-400">Bus GR-103 - Route 24</p>
                  <p className="text-xs text-gray-500">Video feed will appear when the bus is in service</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="btn btn-secondary">
                  <FiVideo className="mr-2" /> View Recordings
                </button>
                <button className="btn btn-secondary">
                  Request Clip
                </button>
              </div>
            </div>
          )}
          
          {/* Check-in Logs */}
          {activeTab === 'logs' && (
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Today's Activity</h3>
              
              <div className="space-y-4">
                {checkInLogs.map((log, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-accent-100 p-2 rounded-full mr-3">
                      {log.type === 'Boarded' ? (
                        <FiMapPin className="text-primary" size={18} />
                      ) : (
                        <FiCheck className="text-primary" size={18} />
                      )}
                    </div>
                    <div className="flex-1 border-b pb-3">
                      <div className="flex justify-between">
                        <p className="font-medium">
                          {log.type === 'Boarded' ? 'Boarded the bus' : 'Arrived at destination'}
                        </p>
                        <p className="text-sm text-gray-500">{log.time}</p>
                      </div>
                      <p className="text-sm text-gray-600">{log.location}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-primary hover:text-primary-dark font-medium">
                  View Past Activity
                </button>
              </div>
            </div>
          )}
          
          {/* Safety Reminders */}
          <div className="card mt-6">
            <h3 className="text-xl font-semibold mb-4">Safety Reminders</h3>
            <div className="p-4 bg-accent-100 rounded-lg">
              <p className="text-sm">
                <span className="font-medium">📱 Stay Connected:</span> Make sure your child's contact information is up to date.
              </p>
            </div>
            <div className="p-4 mt-2 bg-yellow-50 rounded-lg">
              <p className="text-sm">
                <span className="font-medium">⏰ Punctuality:</span> Please ensure your child is at the pickup location 5 minutes before the scheduled time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentDashboard;