import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'; // Assuming existing styled components and styles are imported correctly
import ProjectCard from '../Cards/ProjectCards'; // Assuming ProjectCard component is correctly imported
import { projects } from '../../data/constants'; // Assuming projects data is correctly imported

const AboutUsContainer = styled(Container)`
  padding: 100px 0;
`;

const AboutUsImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin: 20px 0;
`;

const AboutUsContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutUs = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <AboutUsContainer id="about">
      <Wrapper>
        <center><Title>About Us</Title></center>
        <AboutUsContent>
          <AboutUsImage src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=600&q=80" alt="About Us Image" />
          <Desc>
            We are a dedicated team passionate about delivering innovative IT solutions. Our expertise spans across web development, mobile app development, cloud computing, and more. Our mission is to provide top-notch services that drive success for our clients. We become an extension of your team, working collaboratively to transform your ideas into enduring digital experiences.
          </Desc>
        </AboutUsContent>
        
      </Wrapper>
    </AboutUsContainer>
  );
};

export default AboutUs;
