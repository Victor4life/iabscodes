import Image from "next/image";
import React from "react";

const OurServices = () => {
  return (
    <section>
      <div className="w-full py-12 px-6 md:px-16 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-center">
          {/*First Part*/}
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
            <div className="relative">
              <Image
                src="Rays1.png"
                alt="Web Development Services"
                width={50}
                height={50}
                className="absolute -top-3 -right-3"
                priority
              />

              <Image
                src="Rectangle 14.png"
                alt="Web Development Services"
                width={550}
                height={150}
                className="rounded-lg shadow-lg"
                priority
              />
              <div className="absolute -bottom-3 right-0 w-1/2 h-1 bg-[#2989D8]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <Image
                src="Ray.png"
                alt="Web Development Services"
                width={50}
                height={50}
                className="absolute -top-3 -left-3"
                priority
              />

              <Image
                src="Rectangle 18.png"
                alt="Web Development Services"
                width={550}
                height={150}
                className="rounded-lg shadow-lg"
                priority
              />
              <div className="absolute -bottom-3 left-0 w-1/2 h-1 bg-[#2989D8]"></div>
            </div>
          </div>
          {/*Second Part*/}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6 text-[#2989D8]">
              Mobile App Development{" "}
            </h2>
            <p className="text-gray-700 mb-6">
              Reach your customers on the go with robust and intuitive mobile
              applications. We specialize in creating apps that enhance user
              engagement and streamline your services{" "}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Cross-platform development{" "}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Feature-rich designs{" "}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Seamless integration with APIs{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full py-12 px-6 md:px-16 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-center">
          {/*Third Part*/}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6 text-[#2989D8]">
              Digital Marketing{" "}
            </h2>
            <p className="text-gray-700 mb-6">
              Grow your brand’s presence online with result-oriented marketing
              strategies. Our team ensures your business stands out in a
              competitive market.{" "}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Social media management{" "}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Content marketing{" "}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Pay-per-click advertising{" "}
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <Image
                src="Rays1.png"
                alt="Web Development Services"
                width={50}
                height={50}
                className="absolute -top-3 -right-3"
                priority
              />
              <Image
                src="Rectangle 17.png"
                alt="Web Development Services"
                width={550}
                height={150}
                className="rounded-lg shadow-lg"
                priority
              />
              <div className="absolute -bottom-3 right-0 w-1/2 h-1 bg-[#2989D8]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <Image
                src="Ray.png"
                alt="Web Development Services"
                width={50}
                height={50}
                className="absolute -top-3 -left-3"
                priority
              />
              <Image
                src="Rectangle 19.png"
                alt="Web Development Services"
                width={550}
                height={150}
                className="rounded-lg shadow-lg"
                priority
              />
              <div className="absolute -bottom-3 left-0 w-1/2 h-1 bg-[#2989D8]"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6 text-[#2989D8]">
              Graphics Design{" "}
            </h2>
            <p className="text-gray-700 mb-6">
              Makes a lasting impression with high-quality, eye-catching
              designs. From logos to full branding packages, we bring your
              vision to life.{" "}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Logo and brand identity{" "}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Marketing materials (flyers, brochures, etc.){" "}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Custom graphics for web and print.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
      <div className="w-full py-12 px-6 md:px-16 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-center">
          {/*First Part*/}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6 text-[#2989D8]">
              VTU Website Hosting{" "}
            </h2>
            <p className="text-gray-700 mb-6">
              Enjoy reliable and secure hosting services tailored specifically
              for VTU and bill payment websites. We offer flexible plans to suit
              businesses of all sizes.{" "}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Starter Plan: ₦50,000/year (₦5,000/month){" "}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Basic Plan: ₦100,000/year (₦10,000/month){" "}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Standalone VTU Websites: ₦250,000 (includes 1-year free hosting,
                domain name, and technical support){" "}
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <Image
                src="Rays1.png"
                alt="Web Development Services"
                width={50}
                height={50}
                className="absolute -top-3 -right-3"
                priority
              />
              <Image
                src="Rectangle 15.png"
                alt="Web Development Services"
                width={550}
                height={150}
                className="rounded-lg shadow-lg"
                priority
              />
              <div className="absolute -bottom-3 right-0 w-1/2 h-1 bg-[#2989D8]"></div>
            </div>
          </div>
        </div>
      </div>
      {/*Second Part*/}
      <div className="w-full py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <Image
                src="Ray.png"
                alt="Web Development Services"
                width={50}
                height={50}
                className="absolute -top-3 -left-3"
                priority
              />
              <Image
                src="Rectangle 16.png"
                alt="Web Development Services"
                width={550}
                height={150}
                className="rounded-lg shadow-lg"
                priority
              />
              <div className="absolute -bottom-3 left-0 w-1/2 h-1 bg-[#2989D8]"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6 text-[#2989D8]">
              Managed and Unmanaged VTU Website Plans{" "}
            </h2>
            <p className="text-gray-700 mb-6">
              Managed Standalone VTU Website{" "}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                ₦0 initial cost{" "}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Free technical support{" "}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Free API integration{" "}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Free feature requests{" "}
              </li>{" "}
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Free software updates{" "}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                ₦10,000 monthly hosting fee{" "}
              </li>
            </ul>
            <br />
            <p className="text-gray-700 mb-6">
              Unmanaged Standalone VTU Website
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                ₦250,000 initial cost{" "}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>1 year free hosting{" "}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Free domain name{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-6 mt-12">
          <h3 className="text-center text-[#2989D8] text-2xl font-semibold">
            Let’s Build Together
          </h3>
          <p className="text-center text-gray-800 max-w-2xl mx-auto leading-relaxed">
            Our dedicated team ensures that every project is executed to
            perfection. With IABCODESLTD, you’re not just getting a service;
            you’re gaining a partner committed to your success.
          </p>
          <p className="text-center text-gray-800 max-w-2xl mx-auto leading-relaxed">
            <a href="/contact" className="text-[#2989D8]">
              Contact Us!
            </a>{" "}
            Today to discuss your project!
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
