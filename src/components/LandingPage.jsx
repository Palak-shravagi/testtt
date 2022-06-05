import React from "react";
import { CTA, Brand, Navbar } from '../components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from '../containers';
function ViewAsset() {
 
  return (
    <div className="navfootpad">
        <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    
    <WhatGPT3 />
    <Features />
    
    <CTA />
    <Footer />
    </div>
  );
}

export default ViewAsset;