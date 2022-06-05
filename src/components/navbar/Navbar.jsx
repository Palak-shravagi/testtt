import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../final-logo-01.jpg';
import './navbar.css';
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const size = {
    height: 200,
    width: 200
  }
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img style={{width:"170px",height:"60px",marginTop:"5px",marginBottom:"5px",paddingBottom:"5px"}} src={logo}  />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About us</a></p>
          <p><a href="#features">Features</a></p>
          
          
          
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        
        <button onClick={() =>navigate("/register")} >Sign in/Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">About us</a></p>
            <p><a href="#possibility">Features</a></p>
            
          
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
        }

export default Navbar;
