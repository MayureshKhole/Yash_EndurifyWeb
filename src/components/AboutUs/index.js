import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'; // Assuming existing styled components and styles are imported correctly
import ProjectCard from '../Cards/ProjectCards'; // Assuming ProjectCard component is correctly imported
import { projects } from '../../data/constants'; // Assuming projects data is correctly imported

const AboutUsContainer = styled(Container)`
    padding: 100px 0;
`;

const AboutUs = ({ openModal, setOpenModal }) => {
    const [toggle, setToggle] = useState('all');

    return (
        <AboutUsContainer id="about">
            <Wrapper>
                <Title>About Us</Title>
                <Desc>
                    We are a dedicated team passionate about delivering innovative IT solutions. Explore some of our recent projects.
                </Desc>
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
