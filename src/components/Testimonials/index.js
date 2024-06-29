import React from 'react';
import styled from 'styled-components';
import TestimonialCard from '../Cards/TestimonialCard';
import { testimonials } from '../../data/constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 100px 0;
    @media (max-width: 960px) {
        padding: 60px 0;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    gap: 40px;
`;

const Title = styled.h2`
    font-size: 42px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 20px;
    text-align: center;
`;

const TestimonialsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    width: 100%;
    margin-top: 40px;
`;

const Testimonials = () => {
    return (
        <Container id="testimonials">
            <Wrapper>
                <Title>Testimonials</Title>
                <TestimonialsContainer>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </TestimonialsContainer>
            </Wrapper>
        </Container>
    );
};

export default Testimonials;
