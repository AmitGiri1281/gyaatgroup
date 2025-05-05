import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiMapPin, FiCreditCard, FiVideo, 
  FiBell, FiShield, FiArrowRight, FiCheck
} from 'react-icons/fi';
import { motion } from 'framer-motion';

// Features data with updated images using free placeholder illustrations
// In a real implementation, replace these with actual images from Undraw or Storyset
const features = [
  {
    icon: <FiMapPin />,
    title: "Real-Time Tracking",
    description: "Live GPS tracking with route optimization and arrival alerts",
    image: "placeholder-1.png" // Replace with actual tracking illustration
  },
  {
    icon: <FiShield />,
    title: "Safety First",
    description: "360° camera monitoring and emergency response system",
    image: "placeholder-2.png" // Replace with actual safety illustration
  },
  {
    icon: <FiVideo />,
    title: "Ride Monitoring",
    description: "Live video feed access for parents and school administrators",
    image: "placeholder-3.png" // Replace with actual monitoring illustration
  },
  {
    icon: <FiCreditCard />,
    title: "Easy Payments",
    description: "Flexible payment options with automatic billing",
    image: "placeholder-4.png" // Replace with actual payment illustration
  },
  {
    icon: <FiBell />,
    title: "Smart Alerts",
    description: "Instant notifications for delays, route changes, and emergencies",
    image: "placeholder-5.png" // Replace with actual alerts illustration
  }
];
// Testimonials with actual avatars
const testimonials = [
  {
    text: "GreenRide gave me peace of mind...",
    name: "Sarah Johnson",
    role: "Parent of 2 students",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=SarahJohnson" 
  },
  {
    text: "The eco-friendly approach combined...",
    name: "Michael Chen",
    role: "School Administrator",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=MichaelChen"
  },
  {
    text: "My kids love the comfortable rides...",
    name: "Emma Wilson",
    role: "Working Mother",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=EmmaWilson"
  }
];

// Stats section images
const stats = [
  { 
    value: "92%", 
    label: "Parent Satisfaction",
    icon: "https://undraw.co/api/illustrations/satisfaction" 
  },
  { 
    value: "85%", 
    label: "Reduced Carbon Footprint",
    icon: "https://undraw.co/api/illustrations/carbon" 
  },
  { 
    value: "15+", 
    label: "School Districts",
    icon: "https://undraw.co/api/illustrations/school" 
  },
  { 
    value: "10K+", 
    label: "Daily Riders",
    icon: "https://undraw.co/api/illustrations/transport" 
  }
];

// Animation variants for reuse
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Home() {
  return (
    <div className="font-[Poppins] overflow-hidden bg-gradient-to-b from-emerald-50/30 to-white">
      {/* Hero Section - Enhanced with better gradients and animations */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute top-40 left-0 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Smarter, Safer & 
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                  {" Greener "}
                </span> 
                Rides
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Our eco-friendly fleet provides safe, reliable transportation with real-time tracking and monitoring for your peace of mind.
              </p>
              <div className="flex flex-wrap gap-5">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/subscription" 
                    className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-emerald-200/50 hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                  >
                    Explore Plans
                    <FiArrowRight className="text-white" />
                  </Link>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/signup" 
                    className="px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-500 rounded-xl font-semibold shadow-md hover:bg-emerald-50 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
              
              {/* Trust badges */}
              <motion.div 
                className="mt-10 flex flex-wrap gap-6 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <FiCheck className="text-emerald-600" />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">Eco-friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <FiCheck className="text-emerald-600" />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">Safety certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <FiCheck className="text-emerald-600" />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">24/7 support</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
<<<<<<< HEAD
              <div className="relative z-10">
                <motion.img 
                  src="hero.png" // Replace with actual hero image of electric school bus
                  alt="Electric School Bus" 
                  className="rounded-3xl shadow-2xl w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -left-6 -bottom-6 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <FiMapPin className="text-emerald-600 text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Live tracking</p>
                    <p className="font-semibold text-sm">Real-time updates</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -right-2 top-10 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <FiShield className="text-emerald-600 text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Safety rated</p>
                    <p className="font-semibold text-sm">5-star service</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Background blur effects */}
              <div className="absolute inset-0 bg-emerald-100 opacity-20 blur-3xl -z-0" />
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-200/50 rounded-full blur-3xl -z-10" />
=======
              <img 
                src="/hero.png" 
                alt="Electric School Bus" 
                className="rounded-xl shadow-lg w-full"
              />
>>>>>>> 5b7d2763fee249e9561d05544447396b9f761035
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - New addition */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-3xl shadow-xl p-8 md:p-10 relative overflow-hidden"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={fadeInUp}
              >
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
            
            {/* Background gradient for stats section */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent opacity-40 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Features Section - Enhanced with better cards and animations */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-40 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Why Choose 
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                {" GreenRide"}
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Eco-friendly transportation meets cutting-edge technology for the safest school commute
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-50 group"
              >
                <div className="relative mb-8 overflow-hidden rounded-2xl">
                  <motion.img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-52 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-emerald-400 px-5 py-3 rounded-full shadow-lg">
                    {React.cloneElement(feature.icon, { className: "text-white text-xl" })}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced with better cards and avatars */}
      <section className="py-24 bg-gradient-to-b from-emerald-50/70 to-white relative overflow-hidden">
        <div className="absolute top-40 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Trusted by
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                {" Parents"}
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Hear from families who trust GreenRide with their children's transportation
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-50"
              >
                {/* Quotation mark */}
                <div className="text-emerald-200 text-6xl font-serif absolute top-4 left-6">"</div>
                
                <div className="mb-8 flex items-center">
                  <div className="mr-4 w-16 h-16 rounded-full overflow-hidden border-4 border-emerald-100 shadow-md">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-emerald-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
                
                {/* Star rating */}
                <div className="mt-6 flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section - New addition */}
      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              How 
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                {" GreenRide "}
              </span>
              Works
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Simple steps to start your eco-friendly transportation journey
            </motion.p>
          </div>
          
          <div className="relative mt-20">
            {/* Connection line */}
            <div className="absolute top-1/4 left-0 right-0 h-2 bg-emerald-100 hidden md:block" />
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Step 1 */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Sign Up</h3>
                <p className="text-gray-600">Create your account and tell us about your transportation needs</p>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Choose Plan</h3>
                <p className="text-gray-600">Select the transportation plan that works best for your family</p>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Ride Green</h3>
                <p className="text-gray-600">Enjoy safe, eco-friendly transportation with real-time monitoring</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* CTA Section - Enhanced with better visuals */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400" />
        
        {/* Decorative shapes */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-300/30 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 md:p-16 shadow-2xl border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-3/5">
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Ready to Go Green?
                </motion.h2>
                <motion.p 
                  className="text-xl text-white/90 mb-8 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Join thousands of families trusting GreenRide for eco-friendly transportation. Start your journey today and give your children the safest ride to school.
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link 
                      to="/subscription" 
                      className="inline-block px-10 py-5 bg-white text-emerald-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-emerald-900/20 hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                    >
                      Start Safe Journey Now
                      <FiArrowRight className="text-emerald-600" />
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link 
                      to="/contact" 
                      className="inline-block px-10 py-5 bg-transparent text-white border-2 border-white/60 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
              
              <motion.div 
                className="md:w-2/5"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <img 
                  src="placeholder-6.png" // Replace with actual CTA illustration
                  alt="Green Transportation" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
=======
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Go Green?</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of families who trust GreenRide for safe, eco-friendly student transportation.
          </p>
          <Link to="/subscription" className="btn bg-white text-primary hover:bg-gray-100 btn-lg">
            View Our Plans
          </Link>        
>>>>>>> 5b7d2763fee249e9561d05544447396b9f761035
        </div>
      </section>
    </div>
  );
}

export default Home;
