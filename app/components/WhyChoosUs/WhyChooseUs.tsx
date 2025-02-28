import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Experience & Expertise",
      description: "Years of industry experience delivering quality solutions",
      icon: "Group.png",
    },
    {
      title: "247 Support",
      description: "Round-the-clock customer support for all your needs",
      icon: "Group.png",
    },
    {
      title: "Competitive Pricing",
      description: "Best value for money with transparent pricing",
      icon: "Group.png",
    },
    {
      title: "Quick Solutions",
      description: "Fast and efficient service delivery",
      icon: "Group.png",
    },
    {
      title: "Quick Solutions",
      description: "Fast and efficient service delivery",
      icon: "Group.png",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#2989D8] text-2xl mb-12 text-left">
          Why Choose Us
        </h2>
        <div className="flex flex-col md:flex-row gap-12 justify-between items-start">
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-white p-2">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 flex-shrink-0">
                      <Image
                        src={reason.icon}
                        alt={reason.title}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">
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
          {/*Image Part*/}
          <div className="w-full md:w-1/2 relative h-full flex justify-center items-center">
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[400px]">
              <Image
                src="Rectangle.png"
                alt="VTU Business"
                fill
                className="object-contain"
                priority
              />
              <Image
                src="Rays1.png"
                alt="VTU Business"
                width={50}
                height={50}
                className="absolute -top-8 -right-8 object-contain"
                priority
              />
            </div>
            <div className="absolute -bottom-[6rem] md:-bottom-[8rem] -left-[2rem] md:-left-[4rem] w-[150px] h-[150px] md:w-[250px] md:h-[250px]">
              <Image
                src="Rectangle1.png"
                alt="VTU Business"
                fill
                className="object-contain"
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
