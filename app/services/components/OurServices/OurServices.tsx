import Image from "next/image";
import React from "react";

const OurServices = () => {
  return (
    <section>
      <div className="w-full py-12 px-6 md:px-16 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6 text-[#2989D8]">
              Web Development
            </h2>
            <p className="text-gray-700 mb-6">
              Custom-built, responsive websites tailored to your business needs.
              From design to deployment, we ensure your platform is visually
              appealing, user-friendly, and performance-driven. E-commerce
              platforms, VTU and bill payment websites with SEO-optimized
              designs.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                E-Commerce Websites
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                VTU & Bill Payment Systems
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Responsive Web Applications
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <div className="">
              <Image
                src="Rectangle 19.png"
                alt="Web Development Services"
                width={600}
                height={300}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="w-full md:w-1/2">
            <div className="">
              <Image
                src="Rectangle 18.png"
                alt="Web Development Services"
                width={600}
                height={300}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6 text-[#2989D8]">
              Web Development
            </h2>
            <p className="text-gray-700 mb-6">
              Custom-built, responsive websites tailored to your business needs.
              From design to deployment, we ensure your platform is visually
              appealing, user-friendly, and performance-driven. E-commerce
              platforms, VTU and bill payment websites with SEO-optimized
              designs.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                E-Commerce Websites
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                VTU & Bill Payment Systems
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Responsive Web Applications
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
