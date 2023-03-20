import React, { Suspense } from "react";
import "./App.css";

import {
  // Blog,
  Footer,
  // Possibility,
  // Features,
  // WhatGPT3,
  // Header,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";

const Blog = React.lazy(() => import("./containers/blog/Blog"));
const Possibility = React.lazy(() =>
  import("./containers/possibility/Possibility")
);
const Features = React.lazy(() => import("./containers/features/Features"));
const WhatGPT3 = React.lazy(() => import("./containers/whatGPT3/WhatGPT3"));
const Header = React.lazy(() => import("./containers/header/Header"));

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
      </div>
      <Brand />
      <Suspense fallback={<div>Loading...</div>}>
        <WhatGPT3 />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Features />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Possibility />
      </Suspense>
      <Cta />
      <Suspense fallback={<div>Loading...</div>}>
        <Blog />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
