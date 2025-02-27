import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Airtime and Data Services",
      description: "Years of industry experience delivering quality solutions",
      icon: "/Group 67.png",
    },
    {
      title: "Bill Payment",
      description: "Round-the-clock customer support for all your needs",
      icon: "/Group 68.png",
    },
    {
      title: "Automated Solution",
      description: "Best value for money with transparent pricing",
      icon: "/Group 69.png",
    },
    {
      title: "Multi Level Platforms",
      description: "Fast and efficient service delivery",
      icon: "/Group 70.png",
    },
    {
      title: "Comprehensive Services",
      description: "Fast and efficient service delivery",
      icon: "/Group 71.png",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left side - Images */}
          <div className="w-full md:w-1/2 space-y-16 flex">
            <div className="relative w-full">
              <Image
                src="/Rectangle 21.png"
                alt="First Service Image"
                fill
                className="object-contain h-[300px] md:h-[400px]"
              />
              <Image
                src="/Ray.png"
                alt="VTU Business"
                width={50}
                height={50}
                className="absolute -top-8 -left-8 object-contain"
                priority
              />
            </div>
            <div className="relative w-full h-[200px] md:h-[300px]">
              <Image
                src="/Rectangle 22.png"
                alt="Second Service Image"
                fill
                className="object-contain absolute -bottom-8 -left-8"
              />
            </div>
          </div>

          {/* Right side - List */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl text-[#2989D8]">What We Offer</h3>
              <p>
                Our platform brings together everything you need for a
                successful VTU and bill payment business:
              </p>
            </div>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-white p-2 ">
                  <div className="flex items-start gap-4">
                    <Image
                      src={reason.icon}
                      alt={reason.title}
                      width={40}
                      height={40}
                      className="flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
