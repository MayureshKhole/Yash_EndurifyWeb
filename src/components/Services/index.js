import React from 'react';
import styled from 'styled-components';
import { services } from '../../data/constants'; // Assuming services data is imported correctly
import ServiceCard from '../Cards/ServiceCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 0;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    padding: 0 20px;
`;

const Title = styled.h2`
    font-size: 42px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 20px;
    text-align: center;
`;

const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    width: 100%;
    margin-top: 40px;
`;

const Services = () => {
    return (
        <Container id="services">
            <Wrapper>
                <Title>Our Services</Title>
                <ServicesGrid>
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </ServicesGrid>
            </Wrapper>
        </Container>
    );
};

export default Services;
