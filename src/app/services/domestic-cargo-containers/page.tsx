"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTruck, FaShieldAlt, FaMapMarkedAlt, FaBoxes, 
  FaCheckCircle, FaArrowRight, FaPhone, FaClock,
  FaRoute, FaLock, FaChartLine, FaHeadset
} from 'react-icons/fa';
import Image from 'next/image';

const DomesticCargoContainersPage = () => {
  const features = [
    {
      icon: <FaBoxes />,
      title: "ISO Container Fleet",
      description: "Modern fleet of owned ISO containers ensuring cargo safety and security during transportation."
    },
    {
      icon: <FaShieldAlt />,
      title: "Secured Transportation",
      description: "Advanced security measures including GPS tracking and sealed container systems for maximum protection."
    },
    {
      icon: <FaRoute />,
      title: "Door-to-Door Service",
      description: "Complete logistics solution from pickup to delivery with real-time tracking and updates."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Pan-India Coverage",
      description: "Extensive network covering all major cities and industrial hubs across India."
    },
    {
      icon: <FaClock />,
      title: "Time-Definite Delivery",
      description: "Committed delivery schedules with on-time performance guarantee for your business needs."
    },
    {
      icon: <FaLock />,
      title: "Cargo Insurance",
      description: "Comprehensive insurance coverage protecting your valuable cargo throughout the journey."
    }
  ];

  const benefits = [
    {
      title: "Cost-Effective Solutions",
      description: "Competitive pricing with transparent cost structure and no hidden charges for domestic containerized cargo."
    },
    {
      title: "Enhanced Security",
      description: "Sealed containers with tamper-proof systems ensuring cargo integrity from origin to destination."
    },
    {
      title: "Flexible Scheduling",
      description: "Customized pickup and delivery schedules aligned with your business operations and requirements."
    },
    {
      title: "Real-Time Visibility",
      description: "Advanced tracking systems providing complete visibility of your cargo throughout the transportation process."
    },
    {
      title: "Damage-Free Delivery",
      description: "Specialized handling procedures and equipment ensuring zero damage to your valuable cargo."
    },
    {
      title: "Expert Support",
      description: "Dedicated customer support team providing assistance and updates throughout the shipping process."
    }
  ];

  const process = [
    {
      step: 1,
      title: "Cargo Assessment",
      description: "Detailed evaluation of your cargo requirements and selection of appropriate container type."
    },
    {
      step: 2,
      title: "Container Loading",
      description: "Professional loading with proper securing and documentation at your facility."
    },
    {
      step: 3,
      title: "Secure Transport",
      description: "GPS-tracked transportation with real-time monitoring and route optimization."
    },
    {
      step: 4,
      title: "Safe Delivery",
      description: "Careful unloading and delivery confirmation with complete documentation."
    }
  ];

  const stats = [
    { number: "5000+", label: "Containers Delivered" },
    { number: "99.8%", label: "On-Time Delivery" },
    { number: "Zero", label: "Damage Claims" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Domestic Cargo In Our Containers
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed">
                Secured cargo transportation in our owned ISO containers for domestic shipments
              </p>
              <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                Experience the reliability and security of containerized domestic transportation with our modern fleet of ISO containers, ensuring your cargo reaches its destination safely and on time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
                >
                  Get Quote Now
                  <FaArrowRight className="text-sm" />
                </a>
                <a 
                  href="tel:+91-9876543210" 
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg"
                >
                  <FaPhone className="text-sm" />
                  Call Expert
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/use-everywhere/images1.png"
                  alt="Domestic Cargo Containers"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Key Features & Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive features that make our containerized domestic cargo service the preferred choice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Benefits You'll Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our containerized domestic cargo service delivers tangible value to your business operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-white text-sm" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A streamlined approach that ensures efficiency and reliability at every step of your cargo journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Cargo?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact our logistics experts today for a customized containerized cargo solution that meets your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
              >
                Get Custom Quote
                <FaArrowRight className="text-sm" />
              </a>
              <a 
                href="tel:+91-9876543210" 
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
              >
                <FaPhone className="text-sm" />
                Call: +91-9876543210
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DomesticCargoContainersPage;