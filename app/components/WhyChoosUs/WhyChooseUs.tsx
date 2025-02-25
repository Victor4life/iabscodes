import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Experience & Expertise",
      description: "Years of industry experience delivering quality solutions",
      icon: "/Group.png",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your needs",
      icon: "/Group.png",
    },
    {
      title: "Competitive Pricing",
      description: "Best value for money with transparent pricing",
      icon: "/Group.png",
    },
    {
      title: "Quick Solutions",
      description: "Fast and efficient service delivery",
      icon: "/Group.png",
    },
    {
      title: "Quick Solutions",
      description: "Fast and efficient service delivery",
      icon: "/Group.png",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#2989D8] text-2xl mb-4">Why Choose Us</h2>
        <div className="flex flex-col md:flex-row gap-1 items-center">
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Image
                      src={reason.icon}
                      alt={reason.title}
                      width={40}
                      height={40}
                      className="flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 relative h-full flex justify-center">
            {/* Base Image */}
            <div className="relative w-[500px] h-[400px]">
              <Image
                src="/Rectangle.png"
                alt="VTU Business"
                fill
                className="object-cover"
                priority
              />
              <Image
                src="/Rays1.png"
                alt="VTU Business"
                width={50}
                height={50}
                className="absolute top-0 right-0 object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-[10rem] -left-[5rem] w-[300px] h-[300px]">
              <Image
                src="/Rectangle1.png"
                alt="VTU Business"
                fill
                className="object-cover border-t-[5px] border-white"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
