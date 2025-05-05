import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { FiClock, FiMapPin } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for the Leaflet default icon issue in webpack/vite
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom bus icon
const busIcon = L.divIcon({
  className: 'custom-bus-icon',
  html: `<div style="background-color: #00C853; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px;">B</div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

// Custom school icon
const schoolIcon = L.divIcon({
  className: 'custom-school-icon',
  html: `<div style="background-color: #1976D2; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px;">S</div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

// Custom home icon
const homeIcon = L.divIcon({
  className: 'custom-home-icon',
  html: `<div style="background-color: #E64A19; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px;">H</div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

function LiveTracking() {
  const { currentUser } = useAuth();
  const [busLocation, setBusLocation] = useState([37.7749, -122.4194]); // Mock starting position
  const [destination, setDestination] = useState([37.7849, -122.4094]); // Mock school position
  const [home, setHome] = useState([37.7649, -122.4294]); // Mock home position
  const [routePath, setRoutePath] = useState([]);
  const [eta, setEta] = useState('10 minutes');
  const [updateInterval, setUpdateInterval] = useState(null);
  
  // Generate a mock route path between home, bus, and destination
  useEffect(() => {
    // Generate a mock route with intermediate points
    const generateRoute = () => {
      const numPoints = 10;
      const route = [];
      
      for (let i = 0; i <= numPoints; i++) {
        const factor = i / numPoints;
        const lat = home[0] + (destination[0] - home[0]) * factor;
        const lng = home[1] + (destination[1] - home[1]) * factor;
        route.push([lat, lng]);
      }
      
      setRoutePath(route);
    };
    
    generateRoute();
    
    // Simulate bus movement
    const interval = setInterval(() => {
      setBusLocation(prev => {
        // Move the bus a little bit towards the destination
        const newLat = prev[0] + (destination[0] - prev[0]) * 0.05;
        const newLng = prev[1] + (destination[1] - prev[1]) * 0.05;
        
        // Update ETA based on proximity
        const distanceFactor = Math.sqrt(
          Math.pow(destination[0] - newLat, 2) + 
          Math.pow(destination[1] - newLng, 2)
        ) / Math.sqrt(
          Math.pow(destination[0] - home[0], 2) + 
          Math.pow(destination[1] - home[1], 2)
        );
        
        const etaMinutes = Math.max(1, Math.round(distanceFactor * 15));
        setEta(`${etaMinutes} minutes`);
        
        return [newLat, newLng];
      });
    }, 1000);
    
    setUpdateInterval(interval);
    
    return () => clearInterval(interval);
  }, [destination, home]);
  
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-6">Live Bus Tracking</h2>
      
      <div className="relative">
        {/* Map Container */}
        <div className="h-[70vh] rounded-xl overflow-hidden shadow-lg z-10">
          <MapContainer 
            center={busLocation} 
            zoom={14} 
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            
            {/* Bus marker */}
            <Marker position={busLocation} icon={busIcon}>
              <Popup>
                <b>Bus GR-103</b><br />
                Route 24<br />
                Current Speed: 25 mph
              </Popup>
            </Marker>
            
            {/* School marker */}
            <Marker position={destination} icon={schoolIcon}>
              <Popup>
                <b>Green Valley High School</b><br />
                Destination
              </Popup>
            </Marker>
            
            {/* Home marker */}
            <Marker position={home} icon={homeIcon}>
              <Popup>
                <b>Pickup/Dropoff Location</b><br />
                Maple Street Station
              </Popup>
            </Marker>
            
            {/* Route line */}
            <Polyline 
              positions={routePath} 
              color="#00C853" 
              weight={4} 
              opacity={0.7} 
              dashArray="10,10" 
            />
          </MapContainer>
        </div>
        
        {/* ETA Box */}
        <div className="absolute top-4 right-4 bg-white shadow-lg rounded-lg p-4 z-20">
          <div className="flex items-center mb-2">
            <FiClock className="text-primary mr-2" size={20} />
            <h3 className="font-semibold">Estimated Time</h3>
          </div>
          <div className="text-2xl font-bold text-primary mb-1">{eta}</div>
          <div className="text-sm text-gray-500">Arriving at destination</div>
        </div>
      </div>
      
      {/* Journey Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Journey Details</h3>
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-start">
              <div className="p-2 bg-accent-100 rounded-full mr-3">
                <FiMapPin className="text-primary" size={18} />
              </div>
              <div>
                <p className="font-medium">Current Location</p>
                <p className="text-gray-600">Market Street, Downtown</p>
              </div>
            </div>
            
            <div className="w-0.5 h-6 bg-gray-200 ml-4"></div>
            
            <div className="flex items-start">
              <div className="p-2 bg-blue-100 rounded-full mr-3">
                <FiMapPin className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="font-medium">Destination</p>
                <p className="text-gray-600">Green Valley High School</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-accent-100 rounded-lg">
            <p className="text-sm">
              <span className="font-medium">Bus Number:</span> GR-103
            </p>
            <p className="text-sm">
              <span className="font-medium">Driver:</span> Michael Johnson
            </p>
            <p className="text-sm">
              <span className="font-medium">Vehicle Type:</span> Electric Mini Bus
            </p>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Safety Information</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Vehicle Information</p>
              <p className="text-sm text-gray-600">
                This bus is equipped with GPS tracking, CCTV cameras, and emissions monitoring systems.
              </p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="font-medium text-green-800 mb-1">Environmental Impact</p>
              <p className="text-sm text-gray-600">
                By using GreenRide, you're helping reduce carbon emissions by up to 70% compared to individual car trips.
              </p>
            </div>
          </div>
          
          <button className="btn btn-primary w-full mt-6">
            Contact Driver
          </button>
        </div>
      </div>
    </div>
  );
}

export default LiveTracking;