import React from 'react';
import Image from 'next/image';

export default function FooterSection() {

  const navigationData = [
    {
      title: "Synthetic data",
      items: ['Platform', 'Blog', 'News', 'Docs']
    },
    {
      title: "Industries",
      items: ['Healthcare', 'Finance', 'Other industries']
    },
    {
      title: "About us",
      items: ['Who we are', 'The team', 'Careers', 'Contact us']
    },
    {
      title: "Legal",
      items: ['Privacy policy', 'PMI', 'Grants']
    }
  ];

  // Social media data
  const socialMedia = [
    { name: "LinkedIn", icon: "/assets/social-media/linkedin.jpg" },
    { name: "Twitter / X", icon: "/assets/social-media/twitter.jpg" }
  ];

  const linkClasses = "text-[#8EB5FB] text-sm hover:text-[#0056d2] transition-colors duration-200";

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-10">
      
          <div className="col-span-2 md:col-span-1 space-3 relative">
            <h2 className="text-[#0078FF] font-['DM_Sans'] text-[25.469px] font-semibold leading-[31.837px] tracking-[1.783px] uppercase mb-8 md:absolute md:top-0 md:left-[80px]">
              LOGO
            </h2>
          </div>

          {navigationData.map((section) => (
            <nav key={section.title} aria-label={section.title} className="text-center sm:text-left">
              <h3 className="text-[#02061799] font-['Inter'] text-base font-semibold mb-4 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <a href="#" className={linkClasses}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Follow us" className="text-center sm:text-left">
            <h3 className="text-[#02061799] font-['Inter'] text-base font-semibold mb-4 tracking-wide">
              Follow us
            </h3>
            <ul className="flex flex-col space-y-2 items-center sm:items-start">
              {socialMedia.map((platform) => (
                <li key={platform.name}>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center ${linkClasses} cursor-pointer`}
                  >
                    <Image
                      src={platform.icon}
                      alt={`${platform.name} logo`}
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

    
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-xs text-gray-500 space-y-2 sm:space-y-0">
          <p>© 2024 - lodckdcksck d cw cw cwd cwc wjcwjcjwcjw cjwdcjwc  - sqcjcwcwcwcw</p>
          <p>Designed by AGT</p>
        </div>
      </div>
    </footer>
  );
}