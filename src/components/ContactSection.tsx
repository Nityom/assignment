import React from 'react';

export default function ContactSection() {
  const buttonBaseClasses = "px-8 py-3 font-medium rounded-md transition-colors";
  
  return (
    <section className="max-w-[1408px] mx-auto px-4 py-16 min-h-[484px] bg-gradient-to-b from-[#8AB2FB] to-[#FDFDFD] rounded-lg">
      <div className="container mx-auto text-center flex flex-col justify-center h-full">
        <h2 className="text-[#F8FAFC] font-montserrat text-[40px] md:text-[60.875px] font-semibold leading-[50px] md:leading-[80px] tracking-[-1.28px] mb-4">
          Transform your data to<br />transform the future
        </h2>

        <p className="text-[#4787FF] font-montserrat text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[25px] mb-10 mx-auto max-w-[600px]">
          The synthetic data platform for businesses that want to{' '}
          <span className="md:hidden">change the world.</span>
          <span className="hidden md:inline">change the world.</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button 
            className={`${buttonBaseClasses} bg-white text-[#4787FF] hover:bg-gray-100`}
            aria-label="Contact us"
          >
            Contact us
          </button>
          <button 
            className={`${buttonBaseClasses} bg-[#4787FF1A] text-[#4787FF] border border-white hover:bg-white/10`}
            aria-label="Learn more"
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}