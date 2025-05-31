"use client";
import React from 'react';
import Image from 'next/image';
import { Shield, CheckCheck, Zap, ArrowUpRight } from 'lucide-react';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const featureCards: FeatureCard[] = [
    {
      icon: <Shield className="w-6 h-6 text-[#00FF85]" />,
      title: "Privacy protection",
      description:
        "Ando's synthetic data is void of personal information, yet hyper-realistic. It enables AI development without the processing of personal data.",
    },
    {
      icon: <CheckCheck className="w-6 h-6 text-[#00FF85]" />,
      title: "Complete data",
      description:
        "Real data is often incomplete or available in insufficient quantities for AI development. Synthetic data augments real data for accurate and informed AI models.",
    },
    {
      icon: <CheckCheck className="w-6 h-6 text-[#00FF85]" />,
      title: "Fair data",
      description:
        "Real data often inaccurately reflects society, underrepresenting key segments. Synthetic data mitigates bias by rebalancing information assets.",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#00FF85]" />,
      title: "Data mobility and availability",
      description:
        "Synthetic data can be shared safely across departments and organizations. This creates a plethora of synergies and opportunities.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-[#316BFF] max-w-full mx-auto rounded-[24px] relative overflow-hidden px-4">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row mb-16">
          <div className="md:w-1/2 md:pr-8">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-1 font-inter mb-4 transition-opacity duration-500 opacity-100">
              <span className="text-blue-500">✦</span> Why Trust Us
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 leading-tight font-montserrat mb-6 transition-all duration-500">
              How we build lasting value for technology-driven businesses
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed font-inter transition-opacity duration-500">
              We go beyond building tech — we create solutions that are reliable, scalable, and engineered for long-term success. Here&apos;s what sets us apart:
            </p>
          </div>

     
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="relative w-full max-w-sm">
              <Image
                src="/assets/brain.png"
                alt="AI Brain Visualization"
                width={400}
                height={400}
                className="w-full h-auto transition-transform duration-500"
              />
            </div>
          </div>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] shadow-sm min-h-[320px] p-6 flex flex-col justify-start items-start gap-[22px] hover:bg-blue-50 md:hover:bg-white transition-all duration-300 mobile-hover"
            >
              <div className="mb-2">{card.icon}</div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-[19.219px] leading-8 font-inter">{card.description}</p>
            </div>
          ))}
        </div>

 
        <div className="mt-12 flex justify-start">
          <a
            href="#"
            className="bg-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-50 transition-colors shadow-sm text-[#4787FF] font-inter text-[15.625px] font-semibold leading-6 tracking-[0.32px]"
          >
            Read more <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .mobile-hover:hover {
            background-color: white !important;
          }
        }
        @media (max-width: 767px) {
          .mobile-hover:hover {
            background-color: #ebf8ff !important;
            transform: scale(1.01);
          }
        }
      `}</style>
    </section>
  );
}