"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSolarPanel, FaShieldAlt, FaThermometerHalf, FaLeaf, 
  FaCheckCircle, FaArrowRight, FaPhone, FaTruck,
  FaRoute, FaLock, FaChartLine, FaHeadset
} from 'react-icons/fa';
import Image from 'next/image';

const SolarPanelTransportationPage = () => {
  const features = [
    {
      icon: <FaSolarPanel />,
      title: "Specialized Handling",
      description: "Expert handling of solar modules and photovoltaic panels with specialized equipment and trained personnel."
    },
    {
      icon: <FaThermometerHalf />,
      title: "Temperature Control",
      description: "Climate-controlled transportation maintaining optimal temperature conditions for sensitive solar equipment."
    },
    {
      icon: <FaShieldAlt />,
      title: "Damage Prevention",
      description: "Advanced packaging and securing systems designed specifically for fragile renewable energy components."
    },
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly Transport",
      description: "Sustainable logistics solutions supporting the renewable energy sector with environmentally conscious practices."
    },
    {
      icon: <FaTruck />,
      title: "Specialized Vehicles",
      description: "Custom-designed trailers and vehicles equipped for safe transportation of solar panels and components."
    },
    {
      icon: <FaRoute />,
      title: "Route Optimization",
      description: "Carefully planned routes avoiding rough terrain and ensuring smooth transportation for delicate equipment."
    }
  ];

  const benefits = [
    {
      title: "Zero Damage Guarantee",
      description: "Comprehensive protection protocols ensuring your valuable solar equipment arrives in perfect condition."
    },
    {
      title: "Industry Expertise",
      description: "Deep understanding of renewable energy logistics with specialized knowledge of solar panel requirements."
    },
    {
      title: "Flexible Solutions",
      description: "Customized transportation solutions for different types of solar equipment and project requirements."
    },
    {
      title: "Timely Delivery",
      description: "Reliable delivery schedules supporting your renewable energy project timelines and installation plans."
    },
    {
      title: "Cost Efficiency",
      description: "Optimized logistics solutions reducing transportation costs while maintaining highest quality standards."
    },
    {
      title: "Complete Support",
      description: "End-to-end logistics support from pickup to installation site with dedicated project management."
    }
  ];

  const process = [
    {
      step: 1,
      title: "Equipment Assessment",
      description: "Detailed evaluation of solar panels and components to determine optimal packaging and transport method."
    },
    {
      step: 2,
      title: "Specialized Packaging",
      description: "Custom packaging using protective materials designed for fragile renewable energy equipment."
    },
    {
      step: 3,
      title: "Climate Transport",
      description: "Temperature-controlled transportation with real-time monitoring of environmental conditions."
    },
    {
      step: 4,
      title: "Safe Installation",
      description: "Careful delivery and positioning at installation site with proper handling procedures."
    }
  ];

  const stats = [
    { number: "2000+", label: "Solar Projects" },
    { number: "99.9%", label: "Damage-Free Rate" },
    { number: "500MW+", label: "Capacity Transported" },
    { number: "15+", label: "States Covered" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-amber-500 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Solar Panel & Parts Transportation
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 mb-6 leading-relaxed">
                Specialized logistics for renewable energy components with careful handling
              </p>
              <p className="text-lg text-amber-200 mb-8 leading-relaxed">
                Trust our expertise in transporting solar modules, photovoltaic panels, and renewable energy components with temperature-controlled, damage-free logistics solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
                >
                  Get Quote Now
                  <FaArrowRight className="text-sm" />
                </a>
                <a 
                  href="tel:+91-9876543210" 
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-amber-600 transition-all duration-300 font-semibold text-lg"
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
                  src="/images/use-everywhere/images2.png"
                  alt="Solar Panel Transportation"
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
                <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
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
              Specialized Solar Logistics Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive capabilities designed specifically for renewable energy component transportation.
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
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl">
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
              Why Choose Our Solar Logistics
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of working with renewable energy logistics specialists.
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
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
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
              Our Solar Transport Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A specialized approach ensuring the safe handling of your valuable renewable energy equipment.
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
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
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
      <section className="bg-gradient-to-r from-amber-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Power Your Solar Project
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              Partner with us for reliable, damage-free transportation of your renewable energy components.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
              >
                Get Solar Quote
                <FaArrowRight className="text-sm" />
              </a>
              <a 
                href="tel:+91-9876543210" 
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-amber-600 transition-all duration-300 font-semibold text-lg"
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

export default SolarPanelTransportationPage;