"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

interface ServiceCardProps {
  service: {
    name: string;
    description: string;
    icon: React.ReactNode;
    slug: string;
    features?: string[];
  };
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/services/${service.slug}`}>
        <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:shadow-lg hover:border-blue-200 transition-all duration-300 group-hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-xl group-hover:bg-blue-100 transition-colors duration-300">
              {service.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {service.name}
              </h3>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {service.description}
          </p>

          {service.features && (
            <ul className="space-y-2 mb-4">
              {service.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center justify-between mt-auto pt-4">
            <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
              Learn More
            </span>
            <FaArrowRight className="text-blue-600 text-sm group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;