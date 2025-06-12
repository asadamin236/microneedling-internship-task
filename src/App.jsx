import React from "react";
import HeroMicroneedling from "./components/HeroMicroneedling";
import WhatIsMicroneedling from "./components/WhatIsMicroneedling";
import MicroneedlingProcess from "./components/MicroneedlingProcess";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "Poppins, sans-serif" }}>
        Microneedling
      </h1>
      <HeroMicroneedling />
      <WhatIsMicroneedling />
      <MicroneedlingProcess />
      <WhyChooseUs />
      <Pricing />
      <FAQ />
      <Testimonials />
    </div>
  );
};

export default App;
