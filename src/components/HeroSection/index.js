import React from "react";
import styled from "styled-components";
import bgImage from "./background.jpg"; // New background image
import startupImage from "./startp.png"; // New right corner image

import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  HContainer,
} from "./HeroStyle";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import GitHub from "@mui/icons-material/GitHub";
import "./index.css";

const HeroSection = () => {
  const SocialMediaIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const SocialMediaIcon = styled.a`
    display: inline-block;
    margin: 0 1rem;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text_primary};
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  `;

  function scrollToContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <img src={bgImage} alt="Background" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", zIndex: -1 }} />
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Welcome to <br /> {Bio.companyName}
            </Title>
            <TextLoop>
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.services,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.tagline}</SubTitle>
            <SocialMediaIcons>
              <SocialMediaIcon href={Bio.facebook} target="display">
                <FacebookIcon />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.linkedin} target="display">
                <LinkedInIcon />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.github} target="display">
                <GitHub />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.insta} target="display">
                <InstagramIcon />
              </SocialMediaIcon>
            </SocialMediaIcons>
            <HContainer>
              <Button
                href={Bio.contactLink}
                target="display"
                className="button-outline-primary"
              >
                Contact Us
              </Button>
              <Button
                href={Bio.servicesLink}
                target="display"
                className="button-outline-success"
              >
                Our Services
              </Button>
            </HContainer>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={startupImage} />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
