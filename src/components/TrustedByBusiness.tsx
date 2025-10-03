"use client";

import Image from "next/image";
import { useState } from "react";

const items = [
  {
    title: "99% On Time Delivery",
    content:
      "Our network and processes are built for precision so your shipments arrive when they should—without hassle.",
  },
  {
    title: "AI‑Powered Tracker",
    content:
      "Live location, ETA predictions, and proactive alerts so you always know where your shipment is.",
  },
  {
    title: "Cost‑Effective Solution",
    content:
      "Optimized routing and consolidated loads help reduce costs while keeping reliability high.",
  },
  {
    title: "24/7 Customer Support",
    content:
      "A responsive team ready to assist any time of day with updates and quick resolutions.",
  },
];

export default function TrustedByBusiness() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section aria-label="Trusted by business" className="py-14 sm:py-16 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left content */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Trusted by Business
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl text-sm sm:text-base">
              We deliver reliable, on‑time logistics with modern tracking and customer‑first support, trusted by teams across industries.
            </p>

            <div className="mt-6 divide-y divide-gray-200 rounded-2xl bg-white shadow-sm">
              {items.map((it, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={it.title} className="p-4 sm:p-5">
                    <div className="flex items-start justify-between">
                      <button
                        className="text-left"
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        aria-controls={`trusted-item-${idx}`}
                      >
                        <p className="text-base sm:text-lg font-semibold text-gray-900">{it.title}</p>
                      </button>
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        aria-label={isOpen ? "Collapse" : "Expand"}
                        className="ml-4 h-7 w-7 shrink-0 rounded-full bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab] text-white flex items-center justify-center text-base leading-none transition-transform hover:from-[#1e7aa8] hover:via-[#7a4a72] hover:to-[#b8393f]"
                      >
                        {isOpen ? "−" : "+"}
                      </button>
                    </div>
                    <div
                      id={`trusted-item-${idx}`}
                      className={`grid transition-all duration-200 ${isOpen ? 'grid-rows-[1fr] mt-2' : 'grid-rows-[0fr]'} overflow-hidden`}
                    >
                      <div className="min-h-0">
                        <p className="text-sm text-gray-600 max-w-lg">{it.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/our-solution/ship.avif"
                alt="Container ship at sea"
                width={1200}
                height={800}
                className="w-full h-115 object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-10 sm:mt-12">
          <div className="rounded-2xl bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab] text-white shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
              <div className="p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold">150+</div>
                <div className="mt-1 text-xs sm:text-sm opacity-90">Projects Delivered</div>
              </div>
              <div className="p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold">50+</div>
                <div className="mt-1 text-xs sm:text-sm opacity-90">Clients Happys</div>
              </div>
              <div className="p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold">1,000 M</div>
                <div className="mt-1 text-xs sm:text-sm opacity-90">Social Media Base</div>
              </div>
              <div className="p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold">6+</div>
                <div className="mt-1 text-xs sm:text-sm opacity-90">Year Experiences</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
