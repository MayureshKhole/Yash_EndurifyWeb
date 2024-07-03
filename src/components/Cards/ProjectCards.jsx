import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardImage src={project.image} alt={project.title} />
      <CardContent>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
