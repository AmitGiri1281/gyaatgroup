import { useState } from 'react';
import { Link } from 'react-router-dom';
import PlanCard from '../components/PlanCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { FiCheck, FiInfo, FiArrowRight } from 'react-icons/fi';

function Subscription() {
  const { currentUser } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activeFAQ, setActiveFAQ] = useState(null);
  
  const plans = [
    {
      id: 'monthly',
      title: 'Monthly',
      price: '1,499',
      duration: 'month',
      features: [
        'Daily pickup and drop-off',
        'Live bus tracking',
        'Basic notifications',
        'QR code access',
        'Customer support'
      ],
      recommended: false,
      color: 'from-blue-100 to-blue-50'
    },
    {
      id: 'quarterly',
      title: 'Quarterly',
      price: '3,999',
      duration: '3 months',
      features: [
        'Daily pickup and drop-off',
        'Live bus tracking',
        'CCTV access for parents',
        'All notifications and alerts',
        'Priority customer support',
        '10% discount on yearly renewal'
      ],
      recommended: true,
      color: 'from-green-100 to-green-50'
    },
    {
      id: 'yearly',
      title: 'Yearly',
      price: '14,999',
      duration: 'year',
      features: [
        'Daily pickup and drop-off',
        'Live bus tracking',
        'CCTV access for parents',
        'All notifications and alerts',
        'Priority customer support',
        'Free companion app',
        '2 months free (compared to monthly)',
        'Flexible pickup/drop locations'
      ],
      recommended: false,
      color: 'from-purple-100 to-purple-50'
    }
  ];

  const faqs = [
    {
      question: 'Can I switch plans mid-subscription?',
      answer: 'Yes, you can upgrade to a higher plan at any time. The price difference will be prorated based on the remaining days in your current subscription.'
    },
    {
      question: 'How do refunds work?',
      answer: 'We offer prorated refunds for unused portions of your subscription. Please contact our customer support for assistance with cancellations and refunds.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, UPI, net banking, and digital wallets.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'We offer a 3-day free trial for new users to experience our service. Contact our customer support to arrange your trial.'
    }
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    
    if (!currentUser) {
      toast.info(
        <div>
          Please <Link to="/login" className="font-semibold underline">login</Link> to subscribe
        </div>
      );
    } else {
      toast.success(`${planId.charAt(0).toUpperCase() + planId.slice(1)} plan selected. Redirecting to payment...`);
    }
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience safe, reliable, and eco-friendly school transportation with flexible 
            subscription options tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-1 rounded-full text-sm font-semibold shadow-md">
                  Most Popular
                </div>
              )}
              <PlanCard
                {...plan}
                onSelect={handlePlanSelect}
                isSelected={selectedPlan === plan.id}
              />
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <FiInfo className="mr-3 text-primary" />
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: activeFAQ === index ? 180 : 0 }}
                    className="text-gray-600"
                  >
                    <FiArrowRight />
                  </motion.span>
                </button>
                
                <AnimatePresence>
                  {activeFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 overflow-hidden"
                    >
                      <p className="py-4 text-gray-600 border-t">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-1 rounded-2xl inline-block">
            <div className="bg-white rounded-xl px-8 py-6">
              <h3 className="text-2xl font-bold mb-4">Need Personalized Assistance?</h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Our support team is available 24/7 to help you choose the perfect plan 
                for your child's transportation needs.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Contact Support
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Subscription;