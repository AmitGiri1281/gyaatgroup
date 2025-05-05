import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiCalendar } from 'react-icons/fi';
import QRCodeCard from '../components/QRCodeCard';

function StudentDashboard() {
  const { currentUser } = useAuth();
  
  // Mock data for the dashboard
  const busSchedule = {
    routeName: "Route 24 - Green Valley High",
    pickupTime: "7:30 AM",
    pickupLocation: "Maple Street Station",
    dropoffTime: "4:15 PM",
    driverName: "Michael Johnson",
    busNumber: "GR-103"
  };
  
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-6">Student Dashboard</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Student info and QR code */}
        <div className="lg:col-span-1">
          <div className="card mb-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-xl">
                {currentUser?.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{currentUser?.name}</h3>
                <p className="text-gray-500">{currentUser?.school}</p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Student ID:</span>
                <span className="font-medium">{currentUser?.studentId}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Grade:</span>
                <span className="font-medium">{currentUser?.grade}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Plan:</span>
                <span className="font-medium text-primary">{currentUser?.subscription?.plan || 'None'}</span>
              </div>
            </div>
          </div>
          
          {/* QR Code */}
          <QRCodeCard 
            studentId={currentUser?.studentId}
            name={currentUser?.name}
            school={currentUser?.school}
            validUntil={currentUser?.subscription?.expiresAt || 'No active plan'}
          />
        </div>
        
        {/* Right column - Schedule and tracking */}
        <div className="lg:col-span-2">
          {/* Today's Bus info */}
          <div className="card mb-6">
            <h3 className="text-xl font-semibold mb-4">Today's Bus</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="bg-accent-100 p-2 rounded-full mr-3">
                  <FiMapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-gray-600">Route</p>
                  <p className="font-medium">{busSchedule.routeName}</p>
                  <p className="text-sm text-gray-500">Bus #{busSchedule.busNumber}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-accent-100 p-2 rounded-full mr-3">
                  <FiClock className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-gray-600">Pickup Time</p>
                  <p className="font-medium">{busSchedule.pickupTime}</p>
                  <p className="text-sm text-gray-500">{busSchedule.pickupLocation}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-accent-100 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center mr-3">
                  <FiCalendar size={20} />
                </div>
                <div>
                  <p className="font-medium">Return Trip</p>
                  <p className="text-sm">Today at {busSchedule.dropoffTime}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Link to="/student/track" className="btn btn-primary w-full">
                Track My Bus
              </Link>
            </div>
          </div>
          
          {/* Announcements */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Announcements</h3>
            <div className="space-y-4">
              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="font-medium">Holiday Schedule</p>
                <p className="text-sm text-gray-600">No service on Monday, May 30th due to Memorial Day.</p>
                <p className="text-xs text-gray-500 mt-1">Posted on May 20, 2025</p>
              </div>
              
              <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                <p className="font-medium">Route Change Notice</p>
                <p className="text-sm text-gray-600">Route 24 will be slightly modified starting next week due to road construction.</p>
                <p className="text-xs text-gray-500 mt-1">Posted on May 18, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;