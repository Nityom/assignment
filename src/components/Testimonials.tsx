"use client"
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  company: string;
  logo?: string;
  content: string;
  author: {
    name: string;
    position: string;
    image: string;
  };
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      company: "Financial Services",
      content: "We are a Slack and Google shop, and Metomic had out-of-the-box integrations that made implementation a breeze.",
      author: {
        name: "Tim Collins",
        position: "CTO",
        image: "/assets/testimonials/sam.jpg"
      }
    },
    {
      id: 2,
      company: "Numan",
      logo: "/assets/logos/numan.png",
      content: "Metomic is user-centric, easy to use and has some great integrations. The best thing is that it helps data controllers remain compliant but more importantly able to easily assess risks and prevent breaches or infringements.",
      author: {
        name: "Sam Shah",
        position: "Chief Medical Strategy Officer",
        image: "/assets/testimonials/sam.jpg"
      }
    },
    {
      id: 3,
      company: "W",
      logo: "/assets/logos/w.jpg",
      content: "Metomic provides an excellent, easy-to-navigate interface with the necessary features to help keep our workspace secure.",
      author: {
        name: "Stephen Draper",
        position: "IT Help Desk Analyst",
        image: "/assets/testimonials/stephen.jpg"
      }
    },
    {
      id: 4,
      company: "W",
      logo: "/assets/logos/w.jpg",
      content: "We use Metomic to maintain sensitive compliance data and prevent it from accidentally residing in places where it really great solution with technical compliance teams and our frontline employees.",
      author: {
        name: "Colin",
        position: "IT Manager",
        image: "/assets/testimonials/colin.png"
      }
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-4 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonial card carousel */}
        <div className="relative overflow-visible">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {[...Array(4)].map((_, idx) => {
                const testimonialIndex = (currentIndex + idx) % testimonials.length;
                const testimonial = testimonials[testimonialIndex];
                
                return (
                  <div 
                    key={testimonial.id} 
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col min-h-[300px]"
                  >
                    <div className="bg-[#F7F5FF] p-3 rounded-lg self-start mb-6">
                      {testimonial.logo ? (
                        <img 
                          src={testimonial.logo} 
                          alt={`${testimonial.company} logo`} 
                          className="h-8 object-contain"
                        />
                      ) : (
                        <div className="h-8 flex items-center">
                          <span className="text-sm font-semibold text-[#6B46C1] tracking-wide">
                            {testimonial.company}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-800 text-base flex-grow mb-6 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center mt-auto">
                      {testimonial.author.image && (
                        <img 
                          src={testimonial.author.image} 
                          alt={testimonial.author.name} 
                          className="w-12 h-12 rounded-full mr-3 object-cover"
                        />
                      )}
                      <div>
                        <p className="font-medium text-gray-900">{testimonial.author.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.author.position}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation buttons with updated styling */}
        <div className="flex justify-center mt-10 gap-4">
          <button 
            onClick={handlePrevious}
            className="w-10 h-10 rounded-[14px] bg-[rgba(50,46,74,0.10)] hover:bg-[rgba(50,46,74,0.20)] flex items-center justify-center transition-colors border border-[#D9D9D9]"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={16} className="text-[#322E4A] flex-shrink-0 w-4 h-4" />
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-[14px] bg-[rgba(50,46,74,0.10)] hover:bg-[rgba(50,46,74,0.20)] flex items-center justify-center transition-colors border border-[#D9D9D9]"
            aria-label="Next testimonial"
          >
            <ArrowRight size={16} className="text-[#322E4A] flex-shrink-0 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}