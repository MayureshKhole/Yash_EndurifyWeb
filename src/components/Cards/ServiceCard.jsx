import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background: ${({ theme }) => theme.card};
    border-radius: 8px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    text-align: center;
`;

const ServiceTitle = styled.h3`
    font-size: 20px;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 8px;
`;

const ServiceDescription = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.text_secondary};
`;

const ServiceImage = styled.img`
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 12px;
`;

const ServiceCard = ({ service }) => {
    return (
        <Card>
            <ServiceImage src={service.image} alt={service.title} />
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
        </Card>
    );
};

export default ServiceCard;
