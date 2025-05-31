import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  link: string;
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      title: 'Software Development',
      description: 'Web apps, mobile apps, SaaS platforms, APIs, databases',
      link: 'Read more'
    },
    {
      title: 'Hardware Development',
      description: 'Embedded systems, firmware engineering, hardware prototyping',
      link: 'Read more'
    },
    {
      title: 'IoT & Smart Devices',
      description: 'Device connectivity, edge computing, real-time monitoring',
      link: 'Read more'
    },
    {
      title: 'AI & Data Engineering',
      description: 'ML integration, analytics pipelines, automation systems',
      link: 'Read more'
    },
    {
      title: 'Cloud & DevOps',
      description: 'AWS/Azure/GCP architecture, CI/CD, infrastructure as code',
      link: 'Read more'
    },
    {
      title: 'Digital Transformation',
      description: 'IT strategy, modernization, systems integration',
      link: 'Read more'
    }
  ];

  return (
    <div className="flex justify-center w-full px-3 sm:px-4 md:px-6 lg:px-8">
      <section 
        className="py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 2xl:py-28 bg-gradient-to-b from-[#316BFF] via-white to-white relative overflow-hidden w-full max-w-[1396px] rounded-2xl sm:rounded-3xl lg:rounded-[2rem] xl:rounded-[2.5rem] 2xl:rounded-[3rem]"
      >
       
        <div 
          className="absolute inset-0 rounded-2xl sm:rounded-3xl lg:rounded-[2rem] xl:rounded-[2.5rem] 2xl:rounded-[3rem] bg-[image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px] sm:bg-[length:50px_50px] md:bg-[length:60px_60px] lg:bg-[length:80px_80px] bg-repeat mix-blend-overlay"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative">
        
          <div className="mb-4 sm:mb-5 md:mb-6">
            <span 
              className="inline-flex items-center py-1.5 sm:py-2 px-3 sm:px-4 text-white text-xs sm:text-sm font-medium rounded-md sm:rounded-lg border border-white bg-[rgba(238,233,255,0.06)]"
            >
              <Image 
                src="/assets/background/lightning.svg" 
                alt="Lightning" 
                width={16}
                height={16}
                className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" 
              />
              <span className="whitespace-nowrap">Metonic solutions</span>
            </span>
          </div>

          <div className="text-left mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 sm:mb-2 font-montserrat leading-tight">
              Everything you need to protect & secure
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-montserrat leading-tight">
              sensitive data in your SaaS apps
            </h3>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7 2xl:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 2xl:p-10 shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[345px] xl:min-h-[360px] 2xl:min-h-[380px]"
              >
      
                <div className="text-[#316BFF] mb-4 sm:mb-5 md:mb-6">
                  <Image 
                    src="/assets/logos/settings.jpg" 
                    alt="Settings Icon" 
                    width={56}
                    height={56}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-13 xl:h-13 2xl:w-14 2xl:h-14 object-contain" 
                  />
                </div>
                
  
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 font-montserrat leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 text-sm sm:text-sm md:text-base leading-relaxed font-inter">
                    {service.description}
                  </p>
                </div>
                
              
                <div className="mt-auto">
                  <a 
                    href="#" 
                    className="text-[#2D89FF] text-sm sm:text-base font-medium inline-flex items-center gap-2 sm:gap-3 py-2 sm:py-2.5 px-4 sm:px-5 md:px-6 rounded-full border border-[#DBEAFF] bg-white transition-colors duration-200 shadow-sm w-fit"
                  >
                    <span className="whitespace-nowrap">{service.link}</span>
                    <span 
                      className="bg-[#EBF5FF] rounded-full w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-10 xl:h-10 flex items-center justify-center flex-shrink-0"
                    >
                      <ArrowRight 
                        size={12} 
                        color="#2D89FF" 
                        className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4" 
                      />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}