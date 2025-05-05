import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import DashboardNavbar from '../DashboardNavbar';
import Sidebar from '../Sidebar';
import { useState } from 'react';

function DashboardLayout() {
  const { currentUser } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="flex h-screen bg-secondary">
      {/* Sidebar for desktop */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar role={currentUser?.role} />
      </div>
      
      {/* Main content */}
      <div className="flex flex-col flex-1 md:ml-64">
        <DashboardNavbar 
          username={currentUser?.name} 
          role={currentUser?.role}
          toggleSidebar={toggleSidebar}
        />
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;