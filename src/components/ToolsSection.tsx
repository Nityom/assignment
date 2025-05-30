"use client"
import React, { useState } from 'react';
import Image from 'next/image';

// Feature data to avoid repetition
const features = [
  {
    id: 1,
    icon: "/assets/tools-logo/cursor.svg",
    title: "Optimize both software and hardware together",
    description: "We build smart, scalable systems — from firmware to platform — with faster delivery, better performance, and lower costs."
  },
  {
    id: 2,
    icon: "/assets/tools-logo/tool.svg",
    title: "Integrate devices, platforms, and cloud effortlessly",
    description: "Create seamless connections between hardware, software systems and cloud platforms for unified operations."
  },
  {
    id: 3,
    icon: "/assets/tools-logo/strike.svg",
    title: "Build secure, scalable architectures from the ground up",
    description: "Design robust technical foundations that can grow with your business and adapt to changing needs."
  },
  {
    id: 4,
    icon: ["assets/tools-logo/db1.svg", "/assets/tools-logo/db2.svg"],
    isDoubleIcon: true,
    title: "Prototype and test faster with in-house R&D",
    description: "Accelerate development cycles with our dedicated research and testing capabilities."
  },
  {
    id: 5,
    icon: "/assets/tools-logo/navigation.svg",
    title: "Turn raw data into real-time insight and automation",
    description: "Transform complex data streams into actionable business intelligence and automated workflows."
  }
];

// Feature Card Component
interface FeatureCardProps {
  icon: string | string[];
  title: string;
  description: string;
  isDoubleIcon?: boolean;
}

function FeatureCard({ icon, title, description, isDoubleIcon = false }: FeatureCardProps) {
  return (
    <div className="p-4 sm:p-5 md:p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all group cursor-pointer transform hover:scale-[1.02] sm:hover:scale-[1.04] md:hover:scale-[1.06] lg:hover:scale-[1.08] xl:hover:scale-[1.12] 2xl:hover:scale-[1.14] duration-300">
      <div className="flex items-start">
        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 mr-3 sm:mr-4 text-gray-700 group-hover:text-[#316BFF] transition-colors relative">
          {isDoubleIcon ? (
            <>
              <div className="absolute">
                <Image 
                  src={Array.isArray(icon) ? icon[0] : icon}
                  alt="Icon 1" 
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute top-3 sm:top-4">
                <Image 
                  src={Array.isArray(icon) ? icon[1] : ''}
                  alt="Icon 2" 
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
            </>
          ) : (
            <Image 
              src={typeof icon === 'string' ? icon : icon[0]}
              alt={`${title} icon`}
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-[#316BFF] transition-colors leading-tight">{title}</h3>
          <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

// View Toggle Button Component
interface ViewToggleButtonProps {
  view: 'designer' | 'code';
  activeView: 'designer' | 'code';
  onClick: () => void;
}

function ViewToggleButton({ view, activeView, onClick }: ViewToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center py-1.5 sm:py-2 px-3 sm:px-4 md:px-5 rounded-full transition-all duration-200 ${
        activeView === view 
          ? 'bg-white text-[#316BFF]' 
          : 'bg-transparent text-white hover:bg-[rgba(255,255,255,0.1)]'
      } font-inter text-xs sm:text-sm font-medium whitespace-nowrap`}
    >
      {view === 'designer' ? 'Designer view' : 'Code view'}
    </button>
  );
}

export default function ToolsSection() {
  const [activeView, setActiveView] = useState<'designer' | 'code'>('designer');

  return (
    <section className="w-full mb-7 py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 2xl:py-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Left content column */}
          <div className="w-full lg:w-1/2">
            {/* Top button - responsive design */}
            <button className="flex items-center text-xs sm:text-sm font-medium text-[#316BFF] rounded-md px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 bg-[rgba(238,233,255,0.06)] border border-[#4787FF] hover:bg-[rgba(238,233,255,0.12)] transition-colors">
              <Image 
                src="/assets/background/lightning.svg" 
                alt="Lightning" 
                width={16}
                height={16}
                className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0"
              />
              <span className="whitespace-nowrap">How we help</span>
            </button>
            
            {/* Main heading - responsive typography */}
            <div className="text-left mb-6 px-4 sm:px-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#316BFF] mb-2 font-montserrat leading-snug">
                <span className="lg:whitespace-nowrap whitespace-normal">
                  Everything you need to build, connect,
                </span>
                <br className="hidden lg:block" />
                and launch next-gen tech
              </h2>
            </div>

            {/* Feature items - responsive spacing and sizing */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {features.map(feature => (
                <FeatureCard 
                  key={feature.id}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  isDoubleIcon={feature.isDoubleIcon}
                />
              ))}
            </div>
          </div>
          
          {/* Right column with responsive image container */}
          <div className="w-full lg:w-1/2 flex items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-32 2xl:mt-40">
            <div className="bg-[#316BFF] rounded-lg p-4 sm:p-6 md:p-8 h-[400px] sm:h-[500px] md:h-[580px] lg:h-[620px] xl:h-[645px] flex-1 flex flex-col max-w-full">
              {/* White card with responsive dimensions */}
              <div className="bg-white rounded-md w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px] xl:h-[461px] mb-8 sm:mb-12 md:mb-16 mx-auto flex-shrink-0">
                <div className="h-full flex items-center justify-center text-gray-400 text-sm sm:text-base">
                  {activeView === 'designer' ? 'Designer View Content' : 'Code View Content'}
                </div>
              </div>
              
              {/* Toggle buttons with responsive design */}
              <div className="flex justify-center mt-auto">
                <div className="flex rounded-full bg-[#316BFF] border border-[rgba(255,255,255,0.25)]">
                  <ViewToggleButton 
                    view="designer" 
                    activeView={activeView} 
                    onClick={() => setActiveView('designer')} 
                  />
                  <ViewToggleButton 
                    view="code" 
                    activeView={activeView} 
                    onClick={() => setActiveView('code')} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}