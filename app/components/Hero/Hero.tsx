import React from "react";
import Image from "next/image";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="p-6 md:py-16 bg-gradient-to-r from-[#D7EDFF00] to-[#DCEFFF]">
      {/* Container with flexible column/row layout */}
      <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto gap-8">
        {/* Text section */}
        <div className="w-full md:w-1/2">
          <div className="image-container">
            <div className="image-wrapper top-left">
              <Image
                src="/Vector.png"
                alt="VTU Business"
                fill
                className="responsive-image"
              />
            </div>
            <div className="flex flex-col justify-center items-start h-full ">
              <h1 className="text-3xl md:text-[43.2px] leading-tight md:leading-[36px] font-bold">
                Scale up Your VTU and Bill Payment Business with Secure,
                Reliable Solutions
              </h1>
              <p className="mt-6  text-gray-800">
                Launch and manage your own platform with ease. Save costs,
                streamline operations, and deliver unparalleled customer
                experiences.
              </p>
              <div className="flex gap-4 mt-6">
                <button className="px-6 py-2 text-[#2989D8] border-2 border-[#2989D8] rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  Contact Us{" "}
                </button>
                <div className="relative inline-flex">
                  <button className="px-6 py-2 text-white bg-[#2989D8] rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2">
                    Get Started
                  </button>
                  <Image
                    src="/component.png"
                    alt="VTU Business"
                    width={50}
                    height={50}
                    className="object-contain absolute -bottom-4 -right-4"
                  />
                </div>
              </div>
            </div>
            <div className="image-wrapper bottom-right">
              <Image
                src="/icon-park-twotone_database-power.png"
                alt="VTU Business"
                fill
                className="responsive-image"
              />
            </div>
          </div>
        </div>

        {/* Images section */}
        <div className="w-full h-100% md:w-1/2">
          <div className="relative flex gap-2 flex-1 items-center pb-12">
            <div className="image-with-pseudo relative">
              <Image
                src="/subway_power.png"
                alt="VTU Business"
                width={90}
                height={90}
                className="object-contain absolute -top-5 -right-16 -z-10"
              />
              <Image
                src="/Ray.png"
                alt="VTU Business"
                width={40}
                height={40}
                className="object-contain absolute -top-4 left-0"
              />

              <Image
                src="/vtu.png"
                alt="VTU Business"
                width={300}
                height={300}
                className="object-contain h-full"
              />
            </div>
            <div className="pseudo-image -mb-40 relative">
              <Image
                src="/frame1.png"
                alt="VTU Business"
                width={70}
                height={70}
                className="object-contain absolute -right-5 -top-5 z-0"
              />

              <Image
                src="/image.png"
                alt="VTU Business"
                width={300}
                height={300}
                className="object-contain h-full relative z-10"
              />
              <Image
                src="/line-md_speed-loop.png"
                alt="VTU Business"
                width={70}
                height={70}
                className="object-contain absolute -bottom-5 right-2 z-0"
              />
              <Image
                src="/Rays.png"
                alt="VTU Business"
                width={40}
                height={40}
                className="object-contain absolute bottom-0 right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
