

import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>Bora Güneş </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Bora Güneş</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, SQL,
          Java, Python ,HTML,Bootstrap,CSS,SASS.
        </h4>
        <h2>
          <a href="gunesbora80@gmail.com">Send email</a> :
          gunesbora80@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
