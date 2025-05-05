import { FiTruck } from 'react-icons/fi';

function Logo({ className }) {
  return (
    <div className={`text-primary ${className}`}>
      <FiTruck size={28} strokeWidth={2.5} />
    </div>
  );
}

export default Logo;