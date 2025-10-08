import React from 'react';
import { ArrowRight, BookOpen, Users, Award, MapPin, Phone, Mail, Globe, CheckCircle, Star, TrendingUp, Clock, Target, Shield, Zap } from 'lucide-react';

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-bg/logistics-bg.jpg')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Nisha Academy
            </h1>
            <p className="text-xl md:text-2xl font-light mb-4 text-blue-100">
              Where Logistics Excellence Begins
            </p>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-blue-200 leading-relaxed">
              Transform your career with India's most comprehensive logistics education platform. 
              Learn from industry leaders with 43 years of real-world experience. 
              Master the skills that drive India's $200 billion logistics industry forward.
            </p>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-sm md:text-base text-blue-200">Industry Partners sharing real-world insights</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">30+</div>
              <div className="text-sm md:text-base text-blue-200">Branch Network providing hands-on training</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">16+</div>
              <div className="text-sm md:text-base text-blue-200">Industry Sectors covered in curriculum</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">43</div>
              <div className="text-sm md:text-base text-blue-200">Years of logistics expertise distilled into learning</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Start Your Logistics Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center">
              Explore Course Catalog
              <BookOpen className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Academy Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building India's Next Generation of Logistics Leaders
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Nisha Academy, we believe that exceptional logistics professionals aren't born—they're developed through the right combination of industry knowledge, practical experience, and mentorship. Founded on the principles that built Nisha Roadways into India's logistics leader, our academy transforms theoretical learning into career-defining expertise.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our unique advantage lies in real-world application. Every concept taught has been tested on India's highways, refined in our warehouses, and proven across 1,500+ successful projects. When you learn at Nisha Academy, you're not just studying logistics—you're mastering the craft from practitioners who've shaped the industry.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">1,500+</div>
                    <div className="text-sm">Successful Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
                    <div className="text-sm">Damage-Free Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                    <div className="text-sm">Safety Record</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">30%</div>
                    <div className="text-sm">Avg. Salary Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Nisha Way of Learning
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kaizen-Driven Education</h3>
              <p className="text-gray-700">
                Inspired by our corporate culture of continuous improvement, our learning methodology emphasizes gradual mastery through consistent practice and regular feedback.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry-First Approach</h3>
              <p className="text-gray-700">
                Every course module directly addresses real challenges faced by logistics professionals, ensuring immediate applicability in workplace scenarios.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="bg-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mentorship Model</h3>
              <p className="text-gray-700">
                Learn directly from Nisha Roadways' leadership team and operations experts who've built India's most trusted logistics network.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="bg-orange-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Learning</h3>
              <p className="text-gray-700">
                Hands-on training at our 30+ branches provides unparalleled exposure to live logistics operations across diverse industry sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Course Categories & Programs
            </h2>
          </div>

          {/* Foundation Programs */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Foundation Programs</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                  <h4 className="text-2xl font-bold text-white mb-2">Logistics Fundamentals Certification</h4>
                  <div className="flex items-center text-blue-100">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>3 Months | Hybrid Learning</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    Comprehensive introduction to logistics and supply chain management covering transportation modes, warehousing principles, inventory management, and industry regulations.
                  </p>
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Learning Outcomes:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Master fundamental logistics concepts and terminology</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Understand transportation economics and route optimization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Learn warehouse operations and inventory control</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Develop skills in logistics planning and coordination</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-blue-800">
                      <strong>Who Should Enroll:</strong> Fresh graduates, career changers, and professionals new to logistics industry
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">₹25,000 - ₹45,000</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6">
                  <h4 className="text-2xl font-bold text-white mb-2">Supply Chain Management Essentials</h4>
                  <div className="flex items-center text-green-100">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>4 Months | Online + Field Training</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    End-to-end supply chain understanding from procurement to delivery, focusing on integration, optimization, and stakeholder management across the value chain.
                  </p>
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Modules:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Supply chain strategy and design</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Vendor management and procurement</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Demand forecasting and planning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Risk management and contingency planning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Technology integration in supply chains</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-green-800">
                      <strong>Industry Applications:</strong> Real case studies from Nisha Roadways' 16+ industry sectors including chemicals, pharmaceuticals, steel, and construction.
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">₹35,000 - ₹55,000</span>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specialized Certifications */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Specialized Certifications</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-600 to-violet-600 p-6">
                  <h4 className="text-xl font-bold text-white mb-2">Container Operations Mastery</h4>
                  <div className="flex items-center text-purple-100">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">2 Months | Intensive Workshop</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 text-sm">
                    Deep-dive into container logistics covering empty container optimization, import/export procedures, port operations, and multimodal transportation strategies.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-purple-800">
                      Learn from the pioneers of empty container transportation by road in India.
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-purple-600">₹35,000 - ₹50,000</span>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition-colors">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6">
                  <h4 className="text-xl font-bold text-white mb-2">Project Cargo Specialist</h4>
                  <div className="flex items-center text-orange-100">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">6 Weeks | Field-Intensive</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 text-sm">
                    Specialized training in oversized and heavy cargo transportation including route surveys, permit management, and specialized equipment operation.
                  </p>
                  <div className="bg-orange-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-orange-800">
                      Train on actual project cargo movements handling equipment up to 120 tons.
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-orange-600">₹45,000 - ₹65,000</span>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm transition-colors">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-red-600 to-pink-600 p-6">
                  <h4 className="text-xl font-bold text-white mb-2">Chemical Transport Safety</h4>
                  <div className="flex items-center text-red-100">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">4 Weeks | Safety-Focused</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 text-sm">
                    Comprehensive safety training for hazardous and non-hazardous chemical transportation covering ADR regulations and emergency response.
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-red-800">
                      Learn from a company with zero major incidents record in chemical transportation.
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-red-600">₹40,000 - ₹55,000</span>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm transition-colors">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Programs */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Advanced Programs</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                  <h4 className="text-2xl font-bold text-white mb-2">Logistics Management Leadership</h4>
                  <div className="flex items-center text-indigo-100">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>6 Months | Executive Program</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    Strategic logistics management program designed for senior professionals and managers focusing on business development, team leadership, and operational excellence.
                  </p>
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Leadership Development:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Strategic planning and business development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Team building and performance management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Financial analysis and cost optimization</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-indigo-800">
                      <strong>Mentorship:</strong> Direct access to Nisha Roadways' leadership team including CEO Navin Agarwal and senior management.
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-indigo-600">₹75,000 - ₹1,25,000</span>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-6">
                  <h4 className="text-2xl font-bold text-white mb-2">Warehouse Management Systems Expert</h4>
                  <div className="flex items-center text-teal-100">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>8 Weeks | Technology-Intensive</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    Advanced training in modern warehouse management systems, inventory optimization, and automated storage solutions.
                  </p>
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Technology Focus:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">WMS implementation and configuration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Inventory optimization algorithms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Analytics and performance measurement</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-teal-800">
                      <strong>Practical Application:</strong> Hands-on training at Nisha Roadways' warehouse facilities with live WMS operations.
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-teal-600">₹60,000 - ₹85,000</span>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming Careers, Building Futures
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The Logistics Fundamentals program gave me the foundation I needed to start my career in logistics. Within 18 months of graduation, I was promoted to operations manager at a leading 3PL company."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Priya Sharma</p>
                <p className="text-sm text-gray-600">Operations Manager, Major 3PL Company</p>
                <p className="text-xs text-blue-600 mt-1">Logistics Fundamentals Certification, 2023</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "After 10 years in IT, I wanted to switch to logistics. The Supply Chain Management Essentials program provided comprehensive industry knowledge, and I secured a senior role with 40% salary increase."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                <p className="text-sm text-gray-600">Supply Chain Manager, Manufacturing Company</p>
                <p className="text-xs text-green-600 mt-1">Supply Chain Management Essentials, 2024</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The Project Cargo Specialist program transformed my understanding of heavy cargo logistics. The hands-on training with 120-ton equipment movements gave me confidence to handle the most complex projects."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Amit Patel</p>
                <p className="text-sm text-gray-600">Project Cargo Manager, Infrastructure Company</p>
                <p className="text-xs text-purple-600 mt-1">Project Cargo Specialist Program, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty & Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Learn from India's Logistics Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                    NA
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Navin Agarwal</h3>
                    <p className="text-blue-600 font-semibold">CEO & Strategic Advisor</p>
                    <p className="text-sm text-gray-600">MBA, K.J. Somaiya Institute of Management Studies</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Teaches strategic logistics management, business development, and industry leadership. Brings 25+ years of experience in scaling logistics operations from 4 to 30+ branches nationwide.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-800">Business Strategy</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-800">Technology Integration</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-800">Partnership Development</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-800">Team Leadership</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Operations Leadership Team</h3>
                <p className="text-lg mb-6">Collective 100+ Years of Industry Experience</p>
                <p className="text-indigo-100 mb-6">
                  Senior operations managers from across Nisha Roadways' network providing specialized instruction in:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                    <span>Container operations and port logistics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                    <span>Project cargo management and execution</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                    <span>Chemical transportation and safety protocols</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                    <span>Warehouse management and optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                    <span>Fleet management and vehicle operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Start Your Logistics Journey Today
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Foundation Programs</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Graduation from recognized university or equivalent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Basic English proficiency (written and spoken)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Interest in logistics and supply chain careers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">No prior logistics experience required</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-600 text-white rounded-lg text-center">
                <p className="text-2xl font-bold">₹25,000 - ₹45,000</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Specialized Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Minimum 1-2 years relevant industry experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Foundation-level logistics knowledge preferred</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Specific technical requirements based on specialization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Professional references from current employers</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-green-600 text-white rounded-lg text-center">
                <p className="text-2xl font-bold">₹35,000 - ₹65,000</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Programs</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">5+ years logistics industry experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Management or supervisory experience preferred</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Leadership potential and career advancement goals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Commitment to program duration and requirements</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-purple-600 text-white rounded-lg text-center">
                <p className="text-2xl font-bold">₹75,000 - ₹1,25,000</p>
              </div>
            </div>
          </div>

          {/* Enrollment Process */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Enrollment Process</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Application Submission</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>Online application form with basic details</li>
                  <li>Educational qualification documents</li>
                  <li>Work experience certificates (if applicable)</li>
                  <li>Statement of purpose for program selection</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Assessment & Counseling</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>Personal interview with admissions counselor</li>
                  <li>Career goal assessment and program alignment</li>
                  <li>Financial planning and payment structure discussion</li>
                  <li>Learning path customization based on objectives</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Program Commencement</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>Welcome orientation and program introduction</li>
                  <li>Learning material access and platform setup</li>
                  <li>Peer group formation and mentor assignment</li>
                  <li>Learning schedule finalization and commitment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Payment Options */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Flexible Payment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple payment solutions to make quality education accessible for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">EMI Facilities</h3>
              <p className="text-gray-600">Available for all programs with flexible tenure options</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Corporate Sponsorship</h3>
              <p className="text-gray-600">Coordination with employers for sponsored training</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Educational Loans</h3>
              <p className="text-gray-600">Assistance and guidance for loan applications</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Early Bird Discounts</h3>
              <p className="text-gray-600">Special pricing for advance enrollment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Value Proposition</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Invest in your future with measurable returns and career advancement opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">30%</h3>
              <p className="text-gray-300">Average salary increase post-certification</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-gray-300">Corporate partners for career opportunities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Practical Skills</h3>
              <p className="text-gray-300">Real-world application ensuring immediate workplace value</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Lifetime Learning</h3>
              <p className="text-gray-300">Alumni access to continuous learning and skill updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Training Solutions */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Elevate Your Team's Logistics Expertise</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tailored training solutions for organizations looking to enhance their logistics capabilities and team performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Program Customization */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Program Customization</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>Industry-specific curriculum development</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>On-site training at client locations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>Flexible scheduling for minimal business disruption</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>Performance measurement and improvement tracking</span>
                </div>
              </div>
            </div>

            {/* Corporate Benefits */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Corporate Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Team skill enhancement and productivity improvement</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Reduced logistics costs through optimized operations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Enhanced safety protocols and compliance adherence</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Strategic advantage through logistics excellence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Success Metrics</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
                <p className="text-sm text-gray-300">Average improvement in logistics efficiency post-training</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                <p className="text-sm text-gray-300">Reduction in operational errors and delays</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">30%</div>
                <p className="text-sm text-gray-300">Enhancement in customer satisfaction scores</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">20%</div>
                <p className="text-sm text-gray-300">Cost optimization through improved processes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Enrollment Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple three-step process to begin your logistics career transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-blue-50 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">1</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Submission</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Online application form with basic details</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Educational qualification documents</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Work experience certificates (if applicable)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Statement of purpose for program selection</span>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-blue-500" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-green-50 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">2</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Assessment & Counseling</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Personal interview with admissions counselor</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Career goal assessment and program alignment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Financial planning and payment structure discussion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Learning path customization based on objectives</span>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-green-500" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-purple-50 rounded-2xl p-8 h-full">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">3</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Commencement</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Welcome orientation and program introduction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Learning material access and platform setup</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Peer group formation and mentor assignment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Learning schedule finalization and commitment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Network & Community */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join India's Premier Logistics Professional Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with a thriving network of logistics professionals and continue your growth journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Alumni Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Alumni Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Lifetime Learning</h4>
                    <p className="text-gray-600">Access to new courses and skill updates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Professional Network</h4>
                    <p className="text-gray-600">Connection with 1,000+ logistics professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Career Support</h4>
                    <p className="text-gray-600">Ongoing job placement and advancement assistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry Insights</h4>
                    <p className="text-gray-600">Regular updates on logistics trends and opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Engagement */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Engagement</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Monthly Meetups</h4>
                    <p className="text-gray-600">Regional alumni gatherings and networking events</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry Conferences</h4>
                    <p className="text-gray-600">Exclusive access to logistics trade shows and seminars</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Knowledge Sharing</h4>
                    <p className="text-gray-600">Alumni-led workshops and experience sharing sessions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Mentorship Opportunities</h4>
                    <p className="text-gray-600">Senior alumni mentoring new students and recent graduates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Logistics Career Transformation Begins Now
            </h2>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto">
              Ready to join India's most comprehensive logistics education platform? Whether you're starting your logistics journey or advancing your expertise, Nisha Academy provides the knowledge, skills, and network to accelerate your career success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Immediate Next Steps:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 mt-0.5" />
                  <span className="text-blue-100">Explore Programs: Review our comprehensive course catalog and select your path</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 mt-0.5" />
                  <span className="text-blue-100">Schedule Consultation: Book a free career counseling session with our advisors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 mt-0.5" />
                  <span className="text-blue-100">Apply Now: Submit your application and begin your transformation journey</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 mt-0.5" />
                  <span className="text-blue-100">Start Learning: Begin your path to logistics excellence with industry-leading education</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information:</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-yellow-400 mr-3" />
                  <span className="text-blue-100">+91-22-41632222</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-yellow-400 mr-3" />
                  <span className="text-blue-100">academy@nisharoadways.com</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-yellow-400 mr-3" />
                  <span className="text-blue-100">academy.nisharoadways.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-yellow-400 mr-3 mt-0.5" />
                  <span className="text-blue-100">909, Mayuresh Cosmos, CBD Belapur, Navi Mumbai</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-12 py-4 rounded-lg text-xl transition-all duration-300 transform hover:scale-105">
              Enroll in Your Future Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}