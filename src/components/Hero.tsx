import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Truck, MapPin, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 via-transparent to-blue-100/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(249,115,22,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 lg:mb-16">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            India's Most Trusted Logistics Partner
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
            India's Most Trusted <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-blue-600 to-orange-500">
              Logistics Partner
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-700 font-semibold">
              for 35+ Years
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            From containers to project cargo, we move what matters most to your business. 
            <span className="block mt-2 font-medium text-gray-800">
              Pan-India coverage • Zero damage guarantee • 24/7 tracking
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Instant Quote
            </Button>
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
              Track Your Shipment
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <Truck className="w-6 h-6 text-orange-600" />
              <span className="font-semibold text-gray-800">500+ Companies</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-gray-800">Pan-India Network</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="font-semibold text-gray-800">Zero Damage</span>
            </div>
          </div>
        </div>

        {/* Hero Video/Image Section */}
        <div className="relative">
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
            {/* Video Placeholder with Play Button */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
              <Image
                src="/images/hero-bg/hero.jpg"
                alt="Nisha Roadways Fleet - Trucks moving across India's highways"
                width={1920}
                height={1080}
                className="w-full h-full object-cover opacity-80"
                priority
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-6 lg:p-8 transition-all duration-300 transform hover:scale-110">
                  <Play className="w-8 h-8 lg:w-12 lg:h-12 text-white ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Video Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 lg:p-6">
                  <h3 className="text-white text-lg lg:text-xl font-bold mb-2">
                    Driving Forward Your Business
                  </h3>
                  <p className="text-gray-200 text-sm lg:text-base">
                    Watch our fleet in action across India's diverse landscapes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-1">35+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-1">1,500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-1">30+</div>
                  <div className="text-sm text-gray-600">Branch Network</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
