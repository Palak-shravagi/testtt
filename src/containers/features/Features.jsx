import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'CODE',
    text: 'Code your project and upload here to clear doubts and share with others.',
  },
  {
    title: 'COLLABORATE',
    text: 'Collaborate with your team and make it simple to store and find in future.',
  },
  {
    title: 'DOWNLOAD',
    text: 'Download .zip of projects howmany and whichever you want and make changes and learn at your end.',
  },
  {
    title: 'SHARE',
    text: 'Share your knowledge and experience with anyone.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Everything is going to be easy with Project Hub,use it & Make it Happen.</h1>
      
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
