import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background: ${({ theme }) => theme.card};
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-5px);
    }
`;

const ClientName = styled.h3`
    font-size: 20px;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 8px;
`;

const Quote = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 20px;
`;

const TestimonialCard = ({ testimonial }) => {
    return (
      <CardContainer>
        <Quote>"{testimonial.quote}"</Quote>
        <ClientName>- {testimonial.clientName}</ClientName>
      </CardContainer>
    );
};

export default TestimonialCard;
