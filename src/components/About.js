import React from "react";
import ProgressiveImage from "react-progressive-image";
import mainBanner from "../assets/PersonalPicture.jpg";
import blurBanner from "../assets/BlurPicture.jpg";
import Buttons from "./Buttons";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div className="banner">
        <ProgressiveImage src={mainBanner} placeholder={blurBanner}>
          {(src) => <img src={src} />}
        </ProgressiveImage>
      </div>
      <div className="text">
        <h1>Tyler Lam</h1>
        <p>
          Hi! I'm Tyler. I'm currently a student at the University of Calgary.
          I'm majoring in Software Engineering with a specialization in
          Biomedical Engineering.
          <br />
          <br />
          I'm currently a Software Developer Intern at {" "}
          <a href="https://www.energytoolbase.com/">Energy Toolbase</a>, and
          previously have had the pleasure of working as an Information Systems
          intern at{" "}
          <a href="http://www.paramountres.com/">Paramount Resources</a>. At
          school, I'm also part of the Let's Talk Science team, focused on
          science education and advocacy among youth. Learn more about them{" "}
          <a href="https://outreach.letstalkscience.ca/ucalgary.html">here.</a>
        </p>
      </div>
      <Buttons />
    </div>
  );
};

export default About;
