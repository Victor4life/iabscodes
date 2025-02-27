import Hero from "./components/Hero/Hero";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import WhyChooseUs from "./components/WhyChoosUs/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <WhatWeOffer />
    </main>
  );
}
