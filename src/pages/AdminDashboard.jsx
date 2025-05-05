import { useState } from 'react';
import { 
  FiUsers, FiTruck, FiMap, 
  FiMessageSquare, FiEdit2, FiTrash2, FiPlus 
} from 'react-icons/fi';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('routes');
  
  // Mock data for routes
  const routes = [
    { id: 1, name: 'Route 24 - Green Valley High', stops: 12, buses: 3, status: 'Active' },
    { id: 2, name: 'Route 17 - Oak Ridge Academy', stops: 8, buses: 2, status: 'Active' },
    { id: 3, name: 'Route 9 - Central School', stops: 15, buses: 4, status: 'Active' },
    { id: 4, name: 'Route 33 - Westside Elementary', stops: 10, buses: 2, status: 'Inactive' },
  ];
  
  // Mock data for buses
  const buses = [
    { id: 'GR-101', driver: 'John Smith', route: 'Route 24', capacity: 30, status: 'In Service' },
    { id: 'GR-102', driver: 'Maria Garcia', route: 'Route 17', capacity: 30, status: 'In Service' },
    { id: 'GR-103', driver: 'Michael Johnson', route: 'Route 24', capacity: 30, status: 'In Service' },
    { id: 'GR-104', driver: 'Sarah Williams', route: 'Route 9', capacity: 30, status: 'Maintenance' },
  ];
  
  // Mock data for users
  const users = [
    { id: 1, name: 'Alex Johnson', role: 'Student', school: 'Green Valley High', plan: 'Quarterly' },
    { id: 2, name: 'Emily Smith', role: 'Student', school: 'Oak Ridge Academy', plan: 'Yearly' },
    { id: 3, name: 'David Williams', role: 'Parent', children: 2, plan: 'Monthly' },
    { id: 4, name: 'Sophia Brown', role: 'Parent', children: 1, plan: 'Quarterly' },
  ];
  
  // Handle tabbing
  const renderTabContent = () => {
    switch(activeTab) {
      case 'routes':
        return (
          <div>
            <div className="flex justify-between mb-4">
              <h3 className="text-xl font-semibold">Route Management</h3>
              <button className="btn btn-primary flex items-center">
                <FiPlus className="mr-2" /> Add Route
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Route Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stops
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Buses
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {routes.map((route) => (
                    <tr key={route.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{route.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{route.stops}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{route.buses}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          route.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {route.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <FiEdit2 />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <FiTrash2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'buses':
        return (
          <div>
            <div className="flex justify-between mb-4">
              <h3 className="text-xl font-semibold">Bus Management</h3>
              <button className="btn btn-primary flex items-center">
                <FiPlus className="mr-2" /> Add Bus
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bus ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Driver
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Route
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Capacity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {buses.map((bus) => (
                    <tr key={bus.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{bus.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{bus.driver}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{bus.route}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{bus.capacity} students</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          bus.status === 'In Service' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {bus.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <FiEdit2 />
                          </button>
                          <button className="text-blue-600 hover:text-blue-900">
                            Track
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'users':
        return (
          <div>
            <div className="flex justify-between mb-4">
              <h3 className="text-xl font-semibold">User Management</h3>
              <div className="flex space-x-2">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search users..." 
                    className="form-input pl-8 py-1 text-sm"
                  />
                  <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <button className="btn btn-primary flex items-center text-sm py-1">
                  <FiPlus className="mr-1" /> Add User
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subscription
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          user.role === 'Student' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {user.role === 'Student' 
                            ? `${user.school}` 
                            : `${user.children} ${user.children > 1 ? 'children' : 'child'}`}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.plan}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <FiEdit2 />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <FiTrash2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'messages':
        return (
          <div>
            <div className="flex justify-between mb-4">
              <h3 className="text-xl font-semibold">Broadcast Messages</h3>
              <button className="btn btn-primary flex items-center">
                <FiPlus className="mr-2" /> New Message
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card">
                <h4 className="font-semibold mb-2">New Message</h4>
                <div className="space-y-4">
                  <div>
                    <label className="form-label">Recipients</label>
                    <select className="form-input">
                      <option>All Users</option>
                      <option>Students Only</option>
                      <option>Parents Only</option>
                      <option>Route 24 Users</option>
                      <option>Route 17 Users</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Message Type</label>
                    <select className="form-input">
                      <option>Informational</option>
                      <option>Alert</option>
                      <option>Emergency</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Message</label>
                    <textarea className="form-input h-32" placeholder="Enter your message here..."></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button className="btn btn-primary">Send Message</button>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h4 className="font-semibold mb-4">Recent Messages</h4>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex justify-between">
                      <p className="font-medium">Route 24 Schedule Change</p>
                      <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Route 24 will be delayed by 15 minutes tomorrow due to road construction.</p>
                    <p className="text-xs text-gray-500 mt-1">Sent to: Route 24 Users</p>
                  </div>
                  
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <div className="flex justify-between">
                      <p className="font-medium">Weather Alert</p>
                      <span className="text-xs text-gray-500">Yesterday</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Due to expected heavy rain, please ensure students have appropriate rain gear.</p>
                    <p className="text-xs text-gray-500 mt-1">Sent to: All Users</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between">
                      <p className="font-medium">Holiday Schedule</p>
                      <span className="text-xs text-gray-500">3 days ago</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">No service on Monday, May 30th due to Memorial Day.</p>
                    <p className="text-xs text-gray-500 mt-1">Sent to: All Users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card bg-blue-50 border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <FiUsers className="text-blue-500" size={24} />
            </div>
            <div>
              <p className="text-gray-600">Total Users</p>
              <p className="text-2xl font-bold">1,248</p>
            </div>
          </div>
        </div>
        
        <div className="card bg-green-50 border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 mr-4">
              <FiTruck className="text-green-500" size={24} />
            </div>
            <div>
              <p className="text-gray-600">Active Buses</p>
              <p className="text-2xl font-bold">32</p>
            </div>
          </div>
        </div>
        
        <div className="card bg-purple-50 border-l-4 border-purple-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 mr-4">
              <FiMap className="text-purple-500" size={24} />
            </div>
            <div>
              <p className="text-gray-600">Routes</p>
              <p className="text-2xl font-bold">18</p>
            </div>
          </div>
        </div>
        
        <div className="card bg-yellow-50 border-l-4 border-yellow-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 mr-4">
              <FiMessageSquare className="text-yellow-500" size={24} />
            </div>
            <div>
              <p className="text-gray-600">Support Tickets</p>
              <p className="text-2xl font-bold">7</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tab navigation */}
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="border-b">
          <nav className="flex space-x-4 px-4" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('routes')}
              className={`py-4 px-2 font-medium text-sm border-b-2 ${
                activeTab === 'routes' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Route Management
            </button>
            <button
              onClick={() => setActiveTab('buses')}
              className={`py-4 px-2 font-medium text-sm border-b-2 ${
                activeTab === 'buses' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Active Buses
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`py-4 px-2 font-medium text-sm border-b-2 ${
                activeTab === 'users' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              User Management
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`py-4 px-2 font-medium text-sm border-b-2 ${
                activeTab === 'messages' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Broadcast Messages
            </button>
          </nav>
        </div>
        
        {/* Tab content */}
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;