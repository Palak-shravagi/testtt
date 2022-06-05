import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What we do?" text="Project Hub is a platfrom where you can search,view,explore various project according to your need and download it for your reference. Also by creating your account you too can upload all the stuff related to your project and can modify it whenever you want!" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Explore" text="Explore the projects whichever you want." />
      <Feature title="Experience" text="Learn from others experience and make your own." />
      <Feature title="Continue" text="Continue learning new things and enhance your skills." />
    </div>
  </div>
);

export default WhatGPT3;
