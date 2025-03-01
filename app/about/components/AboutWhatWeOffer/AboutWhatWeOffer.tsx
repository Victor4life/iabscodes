import React from "react";
import Image from "next/image";

const AboutWhyChooseUs = () => {
  const reasons = [
    {
      title: "Tailored Solutions",
      description:
        "We design platforms that adapt to your business needs, ensuring a seamless experience for both you and your customers.",
      icon: "Group 67.png",
    },
    {
      title: "Unparalleled Support",
      description:
        "Enjoy expert guidance and support, including free API integration and a dedicated customer service team.",
      icon: "Group 66.png",
    },
    {
      title: "Proven Expertise",
      description:
        "With years of experience in web development, mobile solutions, and digital marketing, we bring unmatched expertise to every project.",
      icon: "Group 71.png",
    },
    {
      title: "Security First",
      description:
        "Your platform is protected with advanced security measures, including SSL certificates and secure payment gateways.",
      icon: "Group 75.png",
    },
    {
      title: "Affordable Packages",
      description:
        "From starter hosting plans to standalone website solutions, we offer packages that suit every budget.",
      icon: "Group 76.png",
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 py-18 md:px-8 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start justify-between">
          {/* Left side - Images*/}
          <div className="w-full md:w-1/2 relative flex justify-center items-center my-auto">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center">
              <Image
                src="Rectangle 21.png"
                alt="VTU Business"
                fill
                className="object-contain"
                priority
              />
              <Image
                src="Ray.png"
                alt="VTU Business"
                width={50}
                height={50}
                className="absolute top-4 left-0 object-contain"
                priority
              />
            </div>
            <div className="absolute -bottom-[4rem] -right-[1rem] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] md:-bottom-[6rem] md:-right-[2rem] lg:-bottom-[3rem] lg:-right-[4rem]">
              <Image
                src="Rectangle 22.png"
                alt="VTU Business"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right side - List*/}
          <div className="w-full md:w-1/2 space-y-2 px-2 md:px-4">
            <div className="space-y-1">
              <h2 className="text-[#2989D8] text-2xl mb-12 text-left font-semibold">
                Why choose IABCODESLTD
              </h2>
              <p className="text-base md:text-lg">
                Our platform brings together everything you need for a
                successful VTU and bill payment business:
              </p>
            </div>
            <div className="space-y-2">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-white p-4 md:p-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src={reason.icon}
                      alt={reason.title}
                      width={70}
                      height={70}
                      className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10"
                    />
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">
                        {reason.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
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

export default AboutWhyChooseUs;
