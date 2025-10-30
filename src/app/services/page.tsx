"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { 
  FaShippingFast, FaIndustry, FaTrain, FaWarehouse,
  FaSolarPanel, FaTruck, FaShip, FaBoxes,
  FaFlask, FaShieldAlt, FaMapMarkedAlt, FaArrowRight
} from "react-icons/fa";

const ServicesPage = () => {
  const serviceCategories = [
    {
      id: "container-logistics",
      title: "Container Logistics Solutions",
      description: "Complete containerized cargo management with end-to-end solutions for all your container transportation needs.",
      color: "bg-blue-50 border-blue-200",
      gradient: "from-blue-500 to-blue-600",
      services: [
        {
          name: "Empty Container Transportation (ECT)",
          description: "Comprehensive empty container services for both Exim and domestic requirements with efficient positioning and repositioning.",
          icon: <FaBoxes className="text-blue-600" />,
          slug: "empty-container-transportation",
          features: [
            "Exim empty containers (shipping lines)",
            "Domestic empty containers (sale/lease)",
            "Efficient positioning and repositioning"
          ]
        },
        {
          name: "Export Import Containers",
          description: "Specialized ExIm transport services facilitating seamless international trade operations.",
          icon: <FaShippingFast className="text-blue-600" />,
          slug: "export-import-containers",
          features: [
            "Export container logistics",
            "Import container logistics", 
            "Customs clearance support"
          ]
        },
        {
          name: "Domestic Cargo In Our Containers",
          description: "Secured cargo transportation in our owned ISO containers for domestic shipments.",
          icon: <FaTruck className="text-blue-600" />,
          slug: "domestic-cargo-containers",
          features: [
            "Containerized domestic transportation",
            "Secured cargo in owned ISO containers",
            "Door-to-door delivery"
          ]
        }
      ]
    },
    {
      id: "specialized-cargo",
      title: "Specialized Cargo Solutions", 
      description: "Custom solutions for unique cargo requirements with specialized handling and transportation expertise.",
      color: "bg-amber-50 border-amber-200",
      gradient: "from-amber-500 to-amber-600",
      services: [
        {
          name: "Solar Panel & Parts Transportation",
          description: "Specialized logistics for renewable energy components with careful handling of fragile solar equipment.",
          icon: <FaSolarPanel className="text-amber-600" />,
          slug: "solar-panel-transportation",
          features: [
            "Solar modules and photovoltaic panels",
            "Renewable energy components",
            "Temperature-controlled transport"
          ]
        },
        {
          name: "Over Dimension Cargo (ODC)",
          description: "Expert handling of oversized machinery and project cargo with specialized equipment and permits.",
          icon: <FaIndustry className="text-amber-600" />,
          slug: "over-dimension-cargo",
          features: [
            "Oversized machinery and equipment",
            "Project cargo management",
            "Route surveys and permits"
          ]
        },
        {
          name: "Bulk Cargo Transportation",
          description: "Efficient transportation of bulk materials including steel coils, grains, and construction materials.",
          icon: <FaWarehouse className="text-amber-600" />,
          slug: "bulk-cargo-transportation",
          features: [
            "Steel coils and metal products",
            "Grains and agricultural products",
            "Construction materials"
          ]
        },
        {
          name: "Chemical Transportation",
          description: "Safe and compliant transportation of chemicals in specialized tank containers.",
          icon: <FaFlask className="text-amber-600" />,
          slug: "chemical-transportation",
          features: [
            "Hazardous and non-hazardous chemicals",
            "ISO tank containers",
            "Safety compliance and documentation"
          ]
        }
      ]
    },
    {
      id: "multimodal-transport",
      title: "Multimodal Transport Solutions",
      description: "Integrated transportation across multiple modes for optimized logistics and cost-effective solutions.",
      color: "bg-emerald-50 border-emerald-200",
      gradient: "from-emerald-500 to-emerald-600",
      services: [
        {
          name: "Rail Services",
          description: "Comprehensive rail transportation for containers and bulk cargo with integrated rail-road solutions.",
          icon: <FaTrain className="text-emerald-600" />,
          slug: "rail-services",
          features: [
            "Container by rail",
            "Bulk cargo by rail",
            "Integrated rail-road solutions"
          ]
        },
        {
          name: "Coastal Services",
          description: "Maritime shipping services across 10 major Indian ports providing cost-effective alternatives to road transport.",
          icon: <FaShip className="text-emerald-600" />,
          slug: "coastal-services",
          features: [
            "Coastal shipping across major ports",
            "Maritime alternative to road transport",
            "Port-to-port connectivity"
          ]
        }
      ]
    },
    {
      id: "value-added-services",
      title: "Value-Added Logistics Services",
      description: "Enhanced services for optimal supply chain management with comprehensive storage and specialized handling.",
      color: "bg-violet-50 border-violet-200", 
      gradient: "from-violet-500 to-violet-600",
      services: [
        {
          name: "LCL Consolidation",
          description: "Less-than-Container-Load cargo optimization for small shipments with cost-effective solutions.",
          icon: <FaBoxes className="text-violet-600" />,
          slug: "lcl-consolidation",
          features: [
            "Less-than-Container-Load cargo clubbing",
            "Small shipment optimization",
            "Cost-effective solutions"
          ]
        },
        {
          name: "High Value Goods Transportation",
          description: "Premium cargo services with GPS tracking and armed escort for valuable and sensitive shipments.",
          icon: <FaShieldAlt className="text-violet-600" />,
          slug: "high-value-goods",
          features: [
            "GPS-tracked premium cargo",
            "Armed escort services",
            "Enhanced security solutions"
          ]
        },
        {
          name: "Storage and Warehousing",
          description: "Comprehensive storage solutions including container parks, warehousing, and specialized storage facilities.",
          icon: <FaWarehouse className="text-violet-600" />,
          slug: "storage-warehousing",
          features: [
            "Empty container parks",
            "Loaded container storage",
            "Cold storage and specialized facilities"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Nisha Roadways Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive logistics solutions across container management, specialized cargo, 
              multimodal transport, and value-added services for all your transportation needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.section 
                key={category.id} 
                id={category.id} 
                className="scroll-mt-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`rounded-2xl border-2 overflow-hidden ${category.color}`}>
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.gradient} p-8 text-white`}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {category.title}
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  
                  {/* Services Grid */}
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.services.map((service, serviceIndex) => (
                        <ServiceCard 
                          key={service.slug} 
                          service={service} 
                          index={serviceIndex}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Logistics Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our logistics experts are ready to design a tailored solution for your unique transportation requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-semibold text-lg"
              >
                Get Custom Quote
                <FaArrowRight className="text-sm" />
              </a>
              <a 
                href="tel:+91-9876543210" 
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
              >
                Call Now: +91-9876543210
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;