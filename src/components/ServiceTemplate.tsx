import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Phone,
  Container,
  Zap,
  Target,
  Shield,
  CheckCircle,
  Wrench,
  ClipboardCheck,
  Award,
  Globe
} from "lucide-react";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { ServiceData } from "@/data/services";

interface ServiceTemplateProps {
  service: ServiceData;
}

export default function ServiceTemplate({ service }: ServiceTemplateProps) {
  // Function to get appropriate icon for different sections
  const getIconForSection = (sectionType: string, index?: number) => {
    switch (sectionType) {
      case 'benefit':
        const benefitIcons = [Award, Zap, Target, Globe];
        return benefitIcons[index! % benefitIcons.length];
      case 'technical':
        return Wrench;
      case 'equipment':
        return Container;
      case 'process':
        return ClipboardCheck;
      case 'compliance':
        return Shield;
      default:
        return CheckCircle;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Premium Service
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {service.subtitle}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 overflow-hidden">
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0  bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <span className="relative flex items-center gap-2">
                    {service.ctaText}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </span>
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Expert
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-30"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - First Content Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Section Title */}
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {service.about.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mx-auto"></div>
            </div>
            
            {/* Description */}
            <div className="mb-10">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium max-w-4xl mx-auto">
                {service.about.description}
              </p>
            </div>
            
            {/* Stats Cards - Only show if stats exist */}
            {service.about.stats && service.about.stats.length > 0 && (
              <div className="flex flex-wrap justify-center items-center gap-4 mt-12 max-w-4xl mx-auto">
                {service.about.stats.map((stat, index) => (
                  <div key={index} className="group relative overflow-hidden bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 p-6 text-center w-[180px] h-[140px] flex flex-col justify-center items-center">
                    <div className="relative z-10">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Benefits - Why Choose Our Service */}
      <section className="py-20 bg-white">
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Why Choose Our Service
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.keyBenefits.map((benefit, index) => {
              const IconComponent = getIconForSection('benefit', index);
              return (
                <div key={index} className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-green-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Technical Specifications & Details
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.technicalSpecs.map((spec, index) => {
              const IconComponent = getIconForSection('technical');
              return (
                <div key={index} className="group p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{spec.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{spec.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Process - How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              How It Works
            </h2>
          </div>
          
          {/* Modern Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {service.process.map((step, index) => {
              const IconComponent = getIconForSection('process');
              const isEven = index % 2 === 1;
              return (
                <div key={index} className="group relative">
                  <div className="relative h-full p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:border-blue-300 hover:-translate-y-1 overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/30 transition-all duration-300 rounded-2xl"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Step Number Badge */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {index + 1}
                          </div>
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10"></div>
                        </div>
                      </div>
                      
                      {/* Step Content */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Decorative element */}
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>





      <CtaBanner />
      <Footer />
    </div>
  );
}