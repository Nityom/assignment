import React from 'react';
import Image from 'next/image';

interface ClientLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

export default function ClientLogoSection() {
  const logos: ClientLogo[] = [
   
    { name: 'ROBLOX', src: '/assets/clients-logo/roblox.svg', width: 120, height: 40 },
    { name: 'LAIKA', src: '/assets/clients-logo/laika.svg', width: 120, height: 40 },
    { name: 'GINKO', src: '/assets/clients-logo/ginko.svg', width: 120, height: 40 },
    { name: 'PEOPLE.AI', src: '/assets/clients-logo/people.svg', width: 120, height: 40 },
    { name: 'SQUARE', src: '/assets/clients-logo/square.svg', width: 120, height: 40 },
    { name: 'DROPBOX', src: '/assets/clients-logo/dropbox.svg', width: 120, height: 40 },
  ];

  return (
    <section className="py-10 bg-white rounded-[30px] w-[95%] max-w-[1400px] mx-auto mt-[-10px] z-10 relative">
      <div className="text-center mb-10">
        <p className="text-[#121212] text-sm md:text-base font-medium font-['Inter'] uppercase tracking-wide">
          Trusted by more than 100 of
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 items-center justify-items-center px-4 sm:px-6">
        {logos.map((client) => (
          <div key={client.name} className="flex items-center justify-center">
            <Image
              src={client.src}
              alt={`${client.name} logo`}
              width={client.width}
              height={client.height}
              className="w-auto object-contain"
              style={{
                maxHeight: '40px', 
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}