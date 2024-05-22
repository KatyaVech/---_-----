import React from 'react';
import './style/About.css';
import aboutImage from '../assets/about us.jpg';

function About() {
  return (
    <div className="about">
      <h1>About us</h1>
      <img src={aboutImage} alt="About Us" className="about-image" />
      <div className="text"> <p>Hello everyone, you are now on a site created by me for music lovers.<br></br>
         This site was created for the purpose of downloading your favorite music, without searching long and wasting time. <br></br>Pleasant use. <br></br>Your developer.</p></div>
     
    </div>
  );
}

export default About;
