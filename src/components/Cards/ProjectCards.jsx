import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background: ${({ theme }) => theme.card};
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-5px);
    }
`;

const Title = styled.h3`
    font-size: 20px;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 8px;
`;

const Description = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.text_secondary};
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 12px;
`;

const ProjectCard = ({ project }) => {
    return (
        <Card>
            <Title>{project.title}</Title>
            <Description>{project.description}</Description>
            {project.imageUrl && <Image src={project.imageUrl} alt={project.title} />}
            {/* Add other dynamic content or icons here */}
        </Card>
    );
};

export default ProjectCard;
