"use client";

import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  const handlePlayVideo = () => {
    // Open YouTube video in new tab
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                About Our Company
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Decades of Excellence. <span className="text-blue-600">Built on Trust.</span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Since 1982, Nisha Roadways has moved over 2.3 million shipments across India. We're not just moving cargo we're orchestrating supply chains that work.
              </p>
            </div>
            
            

            {/* Feature Points */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                    43 years of logistics expertise
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    43 years of logistics expertise serving 300+ active clients across every major industry sector.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                    Pan-India network
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pan-India network with 20+ offices connecting ports, ICDs, warehouses, and factories from Mundra to Kolkata.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative aspect-[6/5] overflow-hidden rounded-3xl">
                {/* Video Thumbnail Image */}
                <Image 
                  src="/images/about-us/about.png" 
                  alt="From 80 Square Feet to Pan-India Success"
                  width={600}
                  height={600}
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <button
                    onClick={handlePlayVideo}
                    className="relative w-16 h-16 lg:w-18 lg:h-18 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm text-blue-600 shadow-xl transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-2xl group"
                    aria-label="Play video"
                  >
                    <svg className="w-6 h-6 lg:w-7 lg:h-7 ml-0.5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
