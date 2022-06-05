import React from 'react';
import './cta.css';
import { useNavigate } from "react-router-dom";
function CTA(){
  const navigate = useNavigate();
  return(
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <h3>Signup Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button" onClick={() => navigate("/Register")}>Get Started</button>
    </div>
  </div>
);
}

export default CTA;
