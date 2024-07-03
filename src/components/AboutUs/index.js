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
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AboutUs = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <AboutUsContainer id="about">
      <Wrapper>
        <AboutUsContent>
          <Title>About Us</Title>
          <AboutUsImage src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=600&q=80" alt="About Us Image" />
          <Desc>
            We are a dedicated team passionate about delivering innovative IT solutions. Our expertise spans across web development, mobile app development, cloud computing, and more. Our mission is to provide top-notch services that drive success for our clients.
          </Desc>
        </AboutUsContent>
        <ToggleButtonGroup>
          <ToggleButton active={toggle === 'all'} onClick={() => setToggle('all')}>
            All
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'web app'} onClick={() => setToggle('web app')}>
            Web Apps
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'android app'} onClick={() => setToggle('android app')}>
            React Native Apps
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' &&
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </AboutUsContainer>
  );
};

export default AboutUs;
