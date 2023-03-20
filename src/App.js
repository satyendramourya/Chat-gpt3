import React from "react";
import "./App.css";

import {
  Blog,
  Footer,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { Cta, Brand, Article, Feature, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
