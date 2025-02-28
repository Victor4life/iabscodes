import React from "react";

type AboutCtaProps = {
  className?: string;
};

const AboutCta: React.FC<AboutCtaProps> = ({ className }) => {
  return (
    <div
      className={`max-w-6xl mx-auto px-4 py-20 md:px-8 lg:px-8 ${
        className || ""
      }`}
    >
      <div className="space-y-6">
        <h3 className="text-center text-[#2989D8] text-2xl font-semibold">
          Let's Grow Together
        </h3>
        <p className="text-[#343434] text-center max-w-2xl mx-auto leading-relaxed">
          Join hundreds of businesses who trust IABCODESLTD to power their
          digital transactions. Whether you are just starting out or looking to
          scale, we are here to help you succeed every step of the way.
        </p>
      </div>
    </div>
  );
};

export default AboutCta;
