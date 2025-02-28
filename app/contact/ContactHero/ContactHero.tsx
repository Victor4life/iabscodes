import React from "react";

const ContactHero = () => {
  return (
    <div className="w-full py-20 px-4 bg-gradient-to-r from-[#D7EDFF00] to-[#DCEFFF]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#343434] text-center mb-8">
          We will Love to Hear From You!
        </h1>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 mb-6">
            Have questions or need assistance? Our team is here to help. Get in
            touch with us through any of the following channels, and we’ll
            ensure you receive prompt and reliable support.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
