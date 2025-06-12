import React from "react";
import HeroMicroneedling from "./components/HeroMicroneedling";
import WhatIsMicroneedling from "./components/WhatIsMicroneedling";
import MicroneedlingProcess from "./components/MicroneedlingProcess";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import "./App.css"; // 👈 Add this for global styles

const App = () => {
  return (
    <div>
      <header className="app-heading">
        Microneedling
      </header>

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
