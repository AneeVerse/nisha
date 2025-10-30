"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartLine, FaShieldAlt, FaCog, FaUsers, 
  FaCheckCircle, FaArrowRight, FaPhone, FaTruck,
  FaClipboardList, FaMapMarkedAlt, FaTools, FaHeadset,
  FaBullseye, FaLightbulb, FaRocket, FaHandshake
} from 'react-icons/fa';
import Image from 'next/image';

const LogisticsConsultingPage = () => {
  const features = [
    {
      icon: <FaChartLine />,
      title: "Supply Chain Analysis",
      description: "Comprehensive analysis of your supply chain to identify bottlenecks and optimization opportunities."
    },
    {
      icon: <FaBullseye />,
      title: "Strategic Planning",
      description: "Development of strategic logistics plans aligned with your business objectives and growth targets."
    },
    {
      icon: <FaCog />,
      title: "Process Optimization",
      description: "Streamlining logistics processes to improve efficiency, reduce costs, and enhance performance."
    },
    {
      icon: <FaLightbulb />,
      title: "Technology Solutions",
      description: "Implementation of cutting-edge logistics technologies and digital transformation strategies."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Network Design",
      description: "Optimal distribution network design for improved coverage and reduced transportation costs."
    },
    {
      icon: <FaRocket />,
      title: "Performance Metrics",
      description: "Development of KPIs and performance measurement systems for continuous improvement."
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      description: "Identify and eliminate inefficiencies to achieve significant cost savings across your logistics operations."
    },
    {
      title: "Expert Guidance",
      description: "Leverage our decades of industry experience and expertise to make informed strategic decisions."
    },
    {
      title: "Scalable Solutions",
      description: "Develop logistics strategies that can scale with your business growth and market expansion."
    },
    {
      title: "Risk Mitigation",
      description: "Identify potential risks and develop contingency plans to ensure business continuity."
    },
    {
      title: "Competitive Advantage",
      description: "Gain competitive edge through optimized logistics operations and superior customer service."
    },
    {
      title: "ROI Focused",
      description: "All recommendations are designed to deliver measurable return on investment and business value."
    }
  ];

  const process = [
    {
      step: 1,
      title: "Assessment",
      description: "Comprehensive evaluation of current logistics operations, processes, and performance metrics."
    },
    {
      step: 2,
      title: "Analysis",
      description: "Deep dive analysis to identify gaps, opportunities, and areas for improvement."
    },
    {
      step: 3,
      title: "Strategy Development",
      description: "Creation of customized logistics strategy with actionable recommendations and roadmap."
    },
    {
      step: 4,
      title: "Implementation Support",
      description: "Ongoing support during implementation phase to ensure successful execution of recommendations."
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "30%", label: "Avg Cost Savings" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Happy Clients" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Logistics Consulting
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-6 leading-relaxed">
                Strategic guidance for supply chain excellence
              </p>
              <p className="text-lg text-purple-200 mb-8 leading-relaxed">
                Transform your logistics operations with expert consulting services. We help businesses optimize their supply chain, reduce costs, and improve efficiency through strategic planning and implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
                >
                  Get Consultation
                  <FaArrowRight className="text-sm" />
                </a>
                <a 
                  href="tel:+91-9876543210" 
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
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
                  alt="Logistics Consulting"
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
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
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
              Comprehensive Consulting Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert guidance across all aspects of logistics and supply chain management to drive business success.
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
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl">
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
              Why Choose Our Consulting
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Partner with experienced consultants who understand the complexities of modern logistics operations.
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
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
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
              Our Consulting Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach to understanding your needs and delivering actionable solutions.
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
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
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
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Logistics Operations
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Ready to optimize your supply chain? Let our experts help you achieve operational excellence and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
              >
                Schedule Consultation
                <FaArrowRight className="text-sm" />
              </a>
              <a 
                href="tel:+91-9876543210" 
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
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

export default LogisticsConsultingPage;