"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaWarehouse, FaShieldAlt, FaBarcode, FaCog, 
  FaCheckCircle, FaArrowRight, FaPhone, FaTruck,
  FaClipboardList, FaMapMarkedAlt, FaTools, FaHeadset,
  FaBoxes, FaThermometerHalf, FaLock
} from 'react-icons/fa';
import Image from 'next/image';

const WarehousingPage = () => {
  const features = [
    {
      icon: <FaWarehouse />,
      title: "Modern Facilities",
      description: "State-of-the-art warehousing facilities with advanced security and climate control systems."
    },
    {
      icon: <FaBarcode />,
      title: "Inventory Management",
      description: "Advanced WMS with real-time tracking, barcode scanning, and automated inventory control."
    },
    {
      icon: <FaThermometerHalf />,
      title: "Climate Control",
      description: "Temperature and humidity controlled storage for sensitive goods and pharmaceuticals."
    },
    {
      icon: <FaLock />,
      title: "Security Systems",
      description: "24/7 security monitoring with CCTV surveillance and access control systems."
    },
    {
      icon: <FaBoxes />,
      title: "Cross Docking",
      description: "Efficient cross-docking services to minimize storage time and reduce handling costs."
    },
    {
      icon: <FaClipboardList />,
      title: "Order Fulfillment",
      description: "Complete order processing, picking, packing, and dispatch services for e-commerce."
    }
  ];

  const benefits = [
    {
      title: "Cost Efficiency",
      description: "Reduce operational costs with our shared warehousing model and optimized storage solutions."
    },
    {
      title: "Scalable Storage",
      description: "Flexible storage capacity that scales with your business needs and seasonal demands."
    },
    {
      title: "Strategic Locations",
      description: "Warehouses located at key logistics hubs for optimal distribution and reduced transit times."
    },
    {
      title: "Technology Integration",
      description: "Advanced WMS integration with your systems for seamless inventory management."
    },
    {
      title: "Quality Assurance",
      description: "Strict quality control processes ensuring product integrity throughout storage period."
    },
    {
      title: "Value-Added Services",
      description: "Additional services like labeling, packaging, kitting, and quality inspection."
    }
  ];

  const process = [
    {
      step: 1,
      title: "Goods Receipt",
      description: "Professional receiving with quality checks, documentation, and system entry."
    },
    {
      step: 2,
      title: "Storage Management",
      description: "Optimal placement using advanced WMS for efficient space utilization and retrieval."
    },
    {
      step: 3,
      title: "Order Processing",
      description: "Accurate picking, packing, and preparation for dispatch with quality verification."
    },
    {
      step: 4,
      title: "Dispatch & Delivery",
      description: "Timely dispatch with complete documentation and tracking information."
    }
  ];

  const stats = [
    { number: "50K+", label: "Sq Ft Space" },
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "24/7", label: "Operations" },
    { number: "15+", label: "Locations" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Warehousing Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed">
                Modern storage and distribution facilities
              </p>
              <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                Comprehensive warehousing solutions with advanced technology, strategic locations, and value-added services to optimize your supply chain operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
                >
                  Get Quote Now
                  <FaArrowRight className="text-sm" />
                </a>
                <a 
                  href="tel:+91-9876543210" 
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
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
                  src="/images/use-everywhere/images3.png"
                  alt="Warehousing Solutions"
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
              Comprehensive Warehousing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced facilities and technology-driven solutions for all your storage and distribution needs.
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
              Why Choose Our Warehousing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of partnering with a technology-driven warehousing provider.
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
              Our Warehousing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Streamlined operations ensuring efficient handling from receipt to dispatch.
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
      <section className="bg-gradient-to-r from-blue-600 to-indigo-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Optimize Your Storage Operations
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Partner with us for efficient, secure, and technology-driven warehousing solutions that scale with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
              >
                Get Storage Quote
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

export default WarehousingPage;