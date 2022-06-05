import React from 'react';
import logo from '../../final-logo-01.jpg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    

    

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
      <img style={{width:"190px",height:"70px",marginTop:"5px",marginBottom:"5px",paddingBottom:"5px"}} src={logo}  />
        <p>Add your own project and explore.</p>
      </div>
      
     
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>projecthub@gmail.com</p>
        
        
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 PROGECT HUB..</p>
    </div>
  </div>
);

export default Footer;
