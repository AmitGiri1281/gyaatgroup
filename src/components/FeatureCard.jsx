import { motion } from 'framer-motion';

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      className="card hover:scale-105 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 rounded-full bg-accent-100 text-primary mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default FeatureCard;