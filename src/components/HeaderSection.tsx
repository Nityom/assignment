import React from 'react';
import Image from 'next/image';

export default function TechVisionSection() {
  // Extract reusable styles
  const textStyle = "md:text-[#6B7280] md:font-montserrat md:text-[20px] md:font-normal md:leading-[36px]";
  
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text container */}
        <div className="w-full md:flex-1 md:max-w-[600px]">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-[#4787FF] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="text-base">⚡</span>
            <span>What People Say</span>
          </div>
          
          <h2 className="text-[#4787FF] font-semibold text-[36px] md:text-[46px] lg:text-[56px] leading-tight tracking-tight font-montserrat mb-6">
            <span className="block md:whitespace-nowrap">From Concept to Launch — We</span>
            <span className="block">Build What Matters</span>
          </h2>

          <p className="text-gray-600 max-w-lg">
            <span className={`block md:whitespace-nowrap ${textStyle}`}>
              We go beyond building tech — we create solutions that are
            </span>
            <span className={`block md:whitespace-nowrap ${textStyle}`}>
              reliable, scalable, and engineered for long-term success.
            </span>
            <span className={`block ${textStyle}`}>
              Here's what our partners and clients say:
            </span>
          </p>
        </div>

        {/* Image container */}
        <div className="w-full md:flex-shrink-0 md:w-auto flex justify-center">
          <div 
            className="relative max-w-[400px] w-full h-auto rounded-lg overflow-hidden" 
            style={{ boxShadow: '0px 0px 48.3px 0px rgba(0, 0, 0, 0.15)' }}
          >
            <Image 
              src="/assets/devTeam.png" 
              alt="Development team collaborating" 
              width={400}
              height={300}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover'
              }}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}