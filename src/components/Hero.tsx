import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tighter mb-4 sm:mb-6">
            One Platform to Manage All
            <br />
            Your Ship {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2489be] via-[#89517f] to-[#cb4147]">Inspections</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Connect ship owners with qualified inspectors to simplify compliance and maintenance processes.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          {/* Outer wrapper keeps shadows and border, inner wrapper clips the image and notch */}
          <div className="relative rounded-[2.5rem] border border-black/5 shadow-2xl shadow-gray-300/50">
            <div className="relative overflow-hidden rounded-[2.5rem]">
              {/* Notch cut inside the top center of the image */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[74px] bg-white rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-10"
              />

              {/* Image */}
              <Image
                src="/images/hero-bg/hero.jpg"
                alt="Ship Inspection"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover select-none"
                priority
              />
            </div>

            {/* Floating CTA group sits above the outer wrapper so it is not clipped */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="flex flex-col sm:flex-row items-center gap-2 bg-white rounded-full p-1">
                <Button className="px-4 sm:px-5 py-2 text-xs sm:text-sm w-full sm:w-auto">Get Started</Button>
                <Button variant="outline" className="px-4 sm:px-5 py-2 text-xs sm:text-sm bg-white w-full sm:w-auto">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
