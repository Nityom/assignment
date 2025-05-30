import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
  const mainBlueColor = '#4787FF';
  const headlineTextSize = 'text-[10vw] md:text-[87.5px]';
  const headlineBaseStyle = `${headlineTextSize} font-montserrat font-semibold leading-tight`;

  return (
    <div className="flex justify-center min-h-screen px-4 py-10 relative">
      {/* Background Blur */}
      <div className="absolute rounded-[30px] w-[95%] max-w-[1400px] h-[80vh] md:h-[646px] z-[-1]" />

      {/* Main Section */}
      <section
        className={`relative w-full max-w-[1400px] rounded-[30px] overflow-hidden ${className}`}
        style={{ background: 'linear-gradient(180deg, #F5F5F5 40%, #4787FF 400%)' }}
      >
        <div className="px-6 md:px-20 pt-16 md:pt-20 pb-10 text-center">
          {/* Tagline */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-1 border-2 border-[#D8E6FF] bg-[rgba(238,233,255,0.06)] rounded-md text-blue-500 text-sm font-medium">
              <Image 
                src="/assets/background/lightning.svg" 
                alt="Lightning icon" 
                width={16} 
                height={16} 
                className="w-4 h-4"
                priority
              />
              <span>End To End Innovation</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className={`font-bold mb-6 ${headlineBaseStyle}`}>
            <span className="text-[#316BFF] tracking-tight block">
              Your Partner in Digital
            </span>

            <div className="flex justify-center my-3">
              <div
                className="h-1 w-[80%] rounded-md"
                style={{
                  background: `linear-gradient(to right, ${mainBlueColor}33, ${mainBlueColor}, ${mainBlueColor}33)`
                }}
              />
            </div>

            <span
              className="bg-gradient-to-b text-transparent bg-clip-text block"
              style={{
                backgroundImage: `linear-gradient(to bottom, ${mainBlueColor}, #86AEFF80, #DEEBFF4D)`
              }}
            >
              Innovation
            </span>
          </h1>

          {/* Blurred Background */}
          <div className="absolute left-0 right-0 mx-auto top-[65%] z-[-1] w-[80%] h-[100px] md:h-[150px] blur-[66px] backdrop-blur-[100px] bg-white/80 rounded-full" />

          {/* Description */}
          <p className="text-[#393E46] font-montserrat text-base md:text-lg leading-[28px] max-w-2xl mx-auto mb-10">
            We design, develop, and deliver scalable software, IT training,
            <br className="hidden md:inline" /> and digital transformation services tailored to your goals.
          </p>

          {/* CTA */}
          <button 
            className="bg-white text-[#4787FF] px-6 md:px-8 py-3 rounded-3xl text-base md:text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-gray-200"
            aria-label="Explore Services"
          >
            Explore Services
          </button>

          {/* Go to Events toggle */}
          <div
            role="link"
            tabIndex={0}
            className="cursor-pointer absolute bottom-0 right-0 
              bg-white px-3 sm:px-4 md:px-5 lg:px-8 
              py-2 sm:py-3 md:py-4 lg:py-6 
              rounded-l-md sm:rounded-l-lg md:rounded-l-xl
              flex items-center gap-2 sm:gap-3 md:gap-4 
              shadow-md transition-all duration-300"
          >
            <Image
              src="/assets/background/toggle.svg"
              alt="Go to events"
              width={179}
              height={48}
              className="w-[60px] xs:w-[80px] sm:w-[90px] md:w-[120px] lg:w-[179px] h-auto"
              priority
            />
            <div className="text-xs xs:text-sm md:text-base font-poppins text-black whitespace-nowrap">
              Go to Events page
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
